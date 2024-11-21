import { View, Text ,TextInput} from 'react-native'
import React, { useState } from 'react'
import Clickme from '@/components/Clickme'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, SetPhone] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSignup = ()=>{

  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Signup</Text>
    <TextInput
      style={styles.input}
      placeholder="Name"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      style={styles.input}
      placeholder="Phone No"
      value={phone}
      onChangeText={SetPhone}
    />

    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      secureTextEntry
      onChangeText={setPassword}
    />
    
    
    <Clickme title={'Signup'} onPress={handleSignup} />

    <Link style={styles.link} href='/Login'>Already have an account? Login</Link>
    
  </View>
  )
}

export default Signup

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
   fontSize: 12, 
   color: 'red',
   padding: 6,
   textAlign: 'right'
  },
  link:{
    textAlign: 'center',
    padding : 20,
    fontSize: 16,
  },

});
