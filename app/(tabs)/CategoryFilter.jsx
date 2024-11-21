import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const CategoryFilter = () => {
  
  const [categories] = useState([
    'Carpenter',
    'Plumbing',
    'Outdoor Litter Cleanup',
    'Appliance Repair Services',
    'POP Services',
    'CCTV Services',
  ]);

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
     
      <Text style={styles.categoriesHeading}>Categories</Text>

      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  categoriesHeading: {
    fontSize: 18,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  categoryItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  categoryText: {
    fontSize: 16,
  },
  viewMoreLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 16,
    color: 'orange',
    textDecorationLine: 'underline', 
  },
});

export default CategoryFilter;
