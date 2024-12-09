import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Image, StyleSheet, ScrollView}
from 'react-native';
import Clickme from '@/components/Clickme'; 
import { Ionicons } from '@expo/vector-icons';

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={20} color="white" />}
    </Pressable>
  );
}

const ContactForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

 
  function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 4; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

 
  function handleReloadCaptcha() {
    setCaptcha(generateCaptcha());
  }

  
  function handleSubmit() {
    console.log('Form submitted');
   
  }

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://fixitindia.com/assets/images/resource/contact-image.jpg' }}
          style={styles.img}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Send A Message</Text>

        <TextInput style={styles.input} placeholder="Enter Name" />
        <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Subject" />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Write your message"
          multiline
          numberOfLines={4}
        />

        <View style={styles.captcha}>
          <View style={styles.view}>
          <Text style={styles.captchaLabel}>Enter Captcha:</Text>
          <Text style={styles.captchaDisplay}>{captcha}</Text>
          <TouchableOpacity style={styles.reloadButton} onPress={handleReloadCaptcha}>
            <Text style={styles.reloadButtonText}>Reload Captcha</Text>
          </TouchableOpacity>
          
          
          </View>
         <View style={styles.inp}>
         <TextInput
            style={styles.input}
            placeholder="Enter Captcha"
            value={captchaInput}
            onChangeText={setCaptchaInput}
          />
         
          
         </View>
        </View>

        <View style={styles.terms}>
          <View style={styles.checkboxContainer}>
            <MyCheckbox />
            <Text style={styles.checkboxLabel}>I agree with all the terms & conditions</Text>
          </View>
        </View>

       
        <Clickme title={'Submit now'} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
    paddingTop: 20,
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingBottom: 40,
    minHeight: '100%', 
  },

  imageContainer: {
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
  },

  img: {
    width: '100%', 
    height: 250, 
    resizeMode: 'contain',
 },

  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: 'orange',
  },

  formContainer: {
    width: '100%', 
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  formTitle: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: 14,
  },

  textarea: {
    height: 80,
    textAlignVertical: 'top', 
  },

  captcha: {
    flexDirection: 'column',
    marginBottom: 10,
  },

  view:{
    flexDirection: 'row',
    alignItems: 'center'
    
  },

  inp:{
   flexDirection:'column',
   alignItems:'center',
  },

  captchaLabel: {
    marginRight: 10,
  },

  captchaDisplay: {
    padding: 10,
    backgroundColor: '#e6e6e6',
    fontWeight: 'bold',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },

  reloadButton: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
  },

  reloadButtonText: {
    color: 'white',
  },

  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 16,
  },

});

export default ContactForm;

