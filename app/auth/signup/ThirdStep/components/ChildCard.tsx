import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ChildItemProps {
  id: number;
  name: string;
  onEdit: (id: number, name: string) => void;
  onDelete: (id: number) => void;
}

const ChildCard: React.FC<ChildItemProps> = ({ id, name, onEdit, onDelete }) => {
  return (
    <View style={styles.childContainer}>
      <Text>{name}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onEdit(id, name)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    color: 'blue',
    marginRight: 8,
  },
  deleteButton: {
    color: 'red',
  },
});

export default ChildCard;
