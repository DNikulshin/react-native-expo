import { ScrollView, Text, View } from 'react-native'

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Text className="text-3xl text-white">HomeScreen</Text>

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >
        <Text className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non
          aliquam a adipisci, natus veniam voluptate expedita quidem nulla
          tenetur totam iusto rem libero et officia odio porro pariatur velit.
        </Text>
      </ScrollView>
    </View>
  )
}
