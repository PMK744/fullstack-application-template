import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

import { Button, CounterCard, Layout } from "@pmkerby/components";


export default function Home() {
  return (
    <Layout>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mb-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
          About
        </Text>
      </View>
    </Layout>
  );
}
