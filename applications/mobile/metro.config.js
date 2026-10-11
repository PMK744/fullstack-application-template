const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Bun's isolated installs give each workspace its own copy of shared
// dependencies. Force React, React Native and Tamagui to resolve from this
// application so shared packages never load a second instance.
const appOrigin = path.join(__dirname, "package.json");
const tamaguiOrigin = require.resolve("tamagui/package.json", {
  paths: [__dirname],
});
const singletons = new Set(["react", "react-dom", "react-native", "tamagui"]);

function packageName(moduleName) {
  const [scope, name] = moduleName.split("/");
  return scope.startsWith("@") ? `${scope}/${name}` : scope;
}

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith(".") || path.isAbsolute(moduleName)) {
    return context.resolveRequest(context, moduleName, platform);
  }

  const name = packageName(moduleName);
  const origins = singletons.has(name)
    ? [appOrigin]
    : name.startsWith("@tamagui/")
      ? [tamaguiOrigin, appOrigin]
      : [];

  for (const originModulePath of origins) {
    try {
      return context.resolveRequest(
        { ...context, originModulePath },
        moduleName,
        platform,
      );
    } catch {
      // Not reachable from this origin; fall through to the next one.
    }
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
