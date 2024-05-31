import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { BrandTextInput } from '@/components/TextInput'
import { UserContext } from '@/contexts/UserContext'

const FirstStep = () => {
  const { firstName, setFirstName } = useContext(UserContext)!;
  return (
    <View>
      <BrandTextInput label='Firstname' setText={setFirstName} value={firstName}/>
    </View>
  )
}

export default FirstStep