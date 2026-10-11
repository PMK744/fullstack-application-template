import { Text, YStack } from "tamagui";

import { Layout } from "@pmkerby/components";


export default function Home() {
  return (
    <Layout>
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        paddingHorizontal="$6"
      >
        <Text
          marginBottom="$3"
          textAlign="center"
          fontSize={12}
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing={1.44}
          color="$blue11"
        >
          About
        </Text>
      </YStack>
    </Layout>
  );
}
