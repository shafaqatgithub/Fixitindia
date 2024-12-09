
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryFilter = () => {
  const categories = [
    'Carpenter',
    'Plumber',
    'CCTV Services',
    'Electrician',
    'Gardener',
  ];

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterHeading}>Select a Category</Text>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    marginVertical: 16,
    padding: 8,
  },
  filterHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginVertical: 4,
  },
  categoryText: {
    fontSize: 14,
  },
});

export default CategoryFilter;
 