import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = ({ title, category, location, duration, phone }) => {
  return (
    <View style={styles.card}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.image}
        />
        <Text style={styles.categoryLabel}>{category}</Text>
        <TouchableOpacity style={styles.heartIcon}>
          <Text>❤️</Text>
        </TouchableOpacity>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtext}>Duration</Text>
        <View style={styles.duration}>
          <Text style={styles.icon}>📅</Text>
          <Text style={styles.durationText}>{duration}</Text>
        </View>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.viewDetails}>View Details</Text>
        </TouchableOpacity>
        <View style={styles.contact}>
          <Text style={styles.icon}>📞</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
  },
  categoryLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF7F50',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  details: {
    padding: 15,
  },
  location: {
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    color: '#888',
    marginBottom: 5,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  durationText: {
    color: '#000',
  },
  link: {
    marginBottom: 10,
  },
  viewDetails: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phone: {
    marginLeft: 5,
    color: '#000',
  },
});

export default Card;