import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const StartPage = () => {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size={"large"} color={"red"}/>
      
    </View>
  )
}

export default StartPage