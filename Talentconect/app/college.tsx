import { View } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const College = () => {
  const router = useRouter()

  const goToOptions = () => {
    router.push("/college-options")
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title="Are You Already Registered?" onPress={goToOptions} />
    </View>
  )
}

export default College
