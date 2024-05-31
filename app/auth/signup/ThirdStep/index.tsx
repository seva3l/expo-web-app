import { View, Text, FlatList, StyleSheet } from 'react-native'
import React,{useContext, useState} from 'react'
import { BrandTextInput } from '@/components/TextInput'
import Button from '@/components/Button'
import { UserContext } from '@/contexts/UserContext'
import ChildCard from './components/ChildCard'

const ThirdStep = () => {
  const { children, addChild, updateChild, removeChild } = useContext(UserContext)!;
  const [childName, setChildName] = useState<string>('');
  const [editingChildId, setEditingChildId] = useState<number | null>(null);
  const handleAddOrEditChild = () => {
    if (editingChildId !== null) {
      updateChild(editingChildId, childName);
    } else {
      addChild({ id: Date.now(), name: childName });
    }
    setChildName('');
    setEditingChildId(null);
  };

  const handleEditChild = (id: number, name: string) => {
    setChildName(name);
    setEditingChildId(id);
  };
  return (
    <View style={styles.container}>
      <BrandTextInput label={"Child's name"} setText={setChildName} value={childName}/>
      <Button label={editingChildId !== null ? "Update Child" : "Add Child"} onPress={handleAddOrEditChild}/>
      <FlatList
        data={children}
        renderItem={({ item }) => (
        <ChildCard
            id={item.id}
            name={item.name}
            onEdit={handleEditChild}
            onDelete={removeChild}
        />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default ThirdStep

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 10
  },
});