import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Signup from './Signup';
import Contact from './(tabs)/Contact';
import Clickme from '@/components/Clickme';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    // // Replace with real authentication logic
    // console.log('Login:', email, password);
    navigation.replace('MainTabs'); 
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Text style={styles.smalltext}> forgot Password?  </Text>
      
      <Clickme title={'Login'} onPress={handleLogin} />

      <Link style={styles.link} href='/Signup'>new user? Signup </Link>
      
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  smalltext: {
   fontSize: 14, 
   color: 'red',
   padding: 6,
   textAlign: 'right'
  },
  link:{
    textAlign: 'center',
    padding : 20,
    fontSize: 16,
  },
  span: {
    color: 'red',
    textDecorationLine : 'underline'
  }
});

export default Login;
