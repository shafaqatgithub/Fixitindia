import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Clickme = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Clickme;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    text: {
        fontSize: 16,
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',  
    }
});
