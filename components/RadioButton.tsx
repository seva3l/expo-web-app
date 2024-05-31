import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface RadioButtonProps {
  label?: string;
  selected: boolean;
  onSelect: () => void;
  displayLabel: boolean;
  isAlignCenter?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = React.memo(
  ({ label, selected, onSelect, displayLabel, isAlignCenter }) => {
    return (
      <TouchableOpacity
        style={[styles.radioButton, { alignItems: isAlignCenter ? 'center' : 'flex-start' }]}
        onPress={onSelect}
      >
        <View style={[styles.radioCircle, selected && styles.selectedRadioCircle]} />
        {displayLabel && <Text style={styles.radioText}>{label}</Text>}
      </TouchableOpacity>
    );
  }
);

export default RadioButton;

const styles = ScaledSheet.create({
    radioButton: {
      flexDirection: 'row',
      gap: 8,
    },
    radioCircle: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#808080',
    },
    selectedRadioCircle: {
      borderColor: '#47ABAC',
      borderWidth: 6,
    },
    radioText: {
      fontSize: 16,
      color: 'black'
    },
  });