import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import CategoryFilter from './CategoryFilter'
import Clickme from '@/components/Clickme';
import { ScrollView} from 'react-native';
  import Card from "../../components/Card";
 

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

      <ScrollView>
      <Card
        title="Complete Bathroom Plumbing Solutions"
        category="CCTV Services"
        location="Belagavi 🌟 Trusted Partner"
        duration="1 day"
        phone="9449513422"
      />
      <Card
        title="Kitchen Plumbing Repair Services"
        category="POP Services"
        location="Hubli 🌟 Trusted Partner"
        duration="2 days"
        phone="9876543210"
      />
      <Card
        title="Complete Bathroom Plumbing Solutions"
        category="Appliance Repair Services"
        location="Belagavi 🌟 Trusted Partner"
        duration="1 day"
        phone="9449513422"
      />
      <Card
        title="Complete Bathroom Plumbing Solutions"
        category="Outdoor Litter Cleanup"
        location="Belagavi 🌟 Trusted Partner"
        duration="1 day"
        phone="9449513422"
      />
      <Card
        title="Complete Bathroom Plumbing Solutions"
        category="Carpenter"
        location="Belagavi 🌟 Trusted Partner"
        duration="1 day"
        phone="9449513422"
      />
      <Card
        title="Complete Bathroom Plumbing Solutions"
        category="Plumbing"
        location="Belagavi 🌟 Trusted Partner"
        duration="1 day"
        phone="9449513422"
      />
      <Card
        title="Complete Bathroom Plumbing Solutions"
        category="Plumbing"
        location="Belagavi 🌟 Trusted Partner"
        duration="1 day"
        phone="9449513422"
      />
    </ScrollView>

      


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
