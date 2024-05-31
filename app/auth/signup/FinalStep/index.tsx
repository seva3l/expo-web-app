import React,{useContext} from 'react'
import { UserContext } from '@/contexts/UserContext'
import { BrandTextInput, BrandPasswordInput } from '@/components/TextInput'
import { View } from 'react-native'
import Button from '@/components/Button'

export default function FinalStep() {
    const { email, setEmail, password, setPassword, createAccount } = useContext(UserContext)!;
  return (
    <View style={{gap:10}}>
        <BrandTextInput label='Email' setText={setEmail} value={email}/>
        <BrandPasswordInput label='Password' setText={setPassword} value={password}/>
        <Button label='Create Account' onPress={createAccount}/>
    </View>
  )
}
