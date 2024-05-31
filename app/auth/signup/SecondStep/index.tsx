import { View, Text } from 'react-native'
import React,{useContext, useState} from 'react'
import RadioButton from '@/components/RadioButton'
import { UserContext } from '@/contexts/UserContext'

const GENDER = ['Male', 'Female', 'Other']
const SecondStep = () => {
  const { gender, setGender } = useContext(UserContext)!;


  return (
    <View>
        <Text style={{marginBottom: 20}}>Select your Gender</Text>
        <View style={{gap: 10}}>
            {GENDER.map((userGender,index)=>
             <RadioButton
             key={index}
             selected={userGender === gender}
             label={userGender}
             onSelect={()=>setGender(userGender)}
             displayLabel
             />
            )}
        </View>
     
    </View>
  )
}

export default SecondStep