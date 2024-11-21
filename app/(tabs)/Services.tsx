import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import CategoryFilter from './CategoryFilter'
import Clickme from '@/components/Clickme';

const Services = () => {
  const [keyWord, setKeyword] = useState('');

  const handleSearch = () => {

  }


  return (
     <View style={styles.container}>
      <Text style={styles.heading}>Filter by</Text>

      <TextInput
        style={styles.input}
        placeholder="Service name or Location"
        value={keyWord}
        onChangeText={setKeyword}
      />

      <CategoryFilter/>

      <Clickme title={'Search Now'} onPress= {handleSearch}/>

      


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },


  
 
});

export default Services;
