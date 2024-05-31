import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';

interface Props{
    label: string;
    onPress: () => void
}

export default function Button({label,onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}


const styles = ScaledSheet.create({
    button:{
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 8
    },
    text:{
        color: 'white',
        fontSize: '12@ms'
    }
})