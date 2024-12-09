import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import CategoryFilter from './CategoryFilter';
import Clickme from '@/components/Clickme'; 
import Card from "../../components/Card"; 

const Services = () => {
  const [keyWord, setKeyword] = useState('');

  const services = [
    {
      title: "Complete Bathroom Plumbing Solutions",
      category: "CCTV Services",
      location: "Belagavi 🌟 Trusted Partner",
      duration: "8 days",
      phone: "9449513422",
    },
    {
      title: "Kitchen Plumbing Repair Services",
      category: "POP Services",
      location: "Hubli 🌟 Trusted Partner",
      duration: "4 weeks",
      phone: "9876543210",
    },
    {
      title: "Complete Bathroom Plumbing Solutions",
      category: "Appliance Repair Services",
      location: "Belagavi 🌟 Trusted Partner",
      duration: "1 day",
      phone: "9449513422",
    },
    {
      title: "Complete Bathroom Plumbing Solutions",
      category: "Outdoor Litter Cleanup",
      location: "Belagavi 🌟 Trusted Partner",
      duration: "1 day",
      phone: "9449513422",
    },
    {
      title: "Complete Bathroom Plumbing Solutions",
      category: "Carpenter",
      location: "Belagavi 🌟 Trusted Partner",
      duration: "4 weeks",
      phone: "9449513422",
    },
    {
      title: "Complete Bathroom Plumbing Solutions",
      category: "Plumbing",
      location: "Belagavi 🌟 Trusted Partner",
      duration: "3 weeks",
      phone: "9449513422",
    },
  ];

  const handleSearch = () => {
    
  };

  return (
    <ScrollView style={styles.container}> 
      <Text style={styles.heading}>Filter by</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Service name or Location"
        value={keyWord}
        onChangeText={setKeyword}
      />

      
      <CategoryFilter />

     
      <Clickme title={'Search Now'} onPress={handleSearch} />

     
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.horizontalScrollView}> 
        {services.map((service, index) => (
          <View key={index} style={styles.cardContainer}>
            <Card
              title={service.title}
              category={service.category}
              location={service.location}
              duration={service.duration}
              phone={service.phone}
            />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  horizontalScrollView: {
    marginTop: 20,
    marginBottom: 20, 
  },
  cardContainer: {
    marginRight: 15,
  }
});

export default Services;
