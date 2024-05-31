import { View, Text } from 'react-native'
import React from 'react'
import FirstStep from './FirstStep'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';

const SignupScreen = () => {
  return (
    <View style={{flex: 1, alignItems:'center'}}>
        <Text style={{fontSize: 22,padding: 30}}>Expo Web App By: Sandrei Mangubat</Text>
    <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
                <FirstStep/>
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <SecondStep/>
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <ThirdStep/>
            </View>
        </ProgressStep>
        <ProgressStep label="Final Step">
            <View style={{ alignItems: 'center' }}>
                <FinalStep/>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
  )
}

export default SignupScreen