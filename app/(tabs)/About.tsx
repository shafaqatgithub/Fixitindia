import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';  
import React, { useState } from 'react'; 
import Clickme from '@/components/Clickme'; 

const About = () => {  
  const [keyWord, setKeyword] = useState('');    

  const handleSearch = () => {    
    console.log('Searching for:', keyWord);  
  };    

  return (  
    <ScrollView contentContainerStyle={styles.scrollViewContainer}> 
      <View style={styles.container}>          
        <View style={styles.rowContainer}>
          <Image          
            source={require('@/assets/images/about.webp')} 
            style={styles.img}  
          />  

          <View style={styles.textContainer}>
            <Text style={styles.heading}>{"<<"} ABOUT COMPANY</Text>  
            <Text style={styles.subHeading}>  
              Your Solution for a Range{'\n'} of Services   
            </Text>  
            <Text style={styles.bodyText}>  
              Our team at FIX IT INDIA offers a variety of professional services, {'\n'}  
              customized to meet the unique needs of individuals and businesses{'\n'} alike.  
            </Text>

            <View style={styles.listContainer}>  
              <Text style={styles.listItem}>  
                <Text style={styles.checkMark}>✔ </Text>Reliable access to a network of professionals  
              </Text>  
              <Text style={styles.listItem}>  
                <Text style={styles.checkMark}>✔ </Text>24/7 support for service inquiries  
              </Text>  
              <Text style={styles.listItem}>  
                <Text style={styles.checkMark}>✔ </Text>Transparent pricing with no hidden fees  
              </Text>  
              <Text style={styles.listItem}>  
                <Text style={styles.checkMark}>✔ </Text>Flexible service packages to suit your needs  
              </Text>  
            </View>  

            <Clickme title={'More Details'} onPress={handleSearch} />  
          </View>
        </View>
      </View>
    </ScrollView>
  );  
};

const styles = StyleSheet.create({  
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  container: {  
    justifyContent: 'flex-start',  
    alignItems: 'center',  
    paddingHorizontal: 10, 
    backgroundColor: '#fff', 
  },  
  rowContainer: {  
    flexDirection: 'column',  
    alignItems: 'center',  
    width: '100%',
  },  
  img: {  
    width: '100%',  
    height: 300,
    marginBottom: 20, 
    resizeMode: 'cover',  
    borderRadius: 15,
  },  
  textContainer: {  
    width: '100%',
    justifyContent: 'center',  
    alignItems: 'center',
  },  
  heading: {  
    fontSize: 18,  
    color: 'orange',  
    marginBottom: 10,  
    fontWeight: 'bold',  
    textAlign: 'center',  
  },  
  subHeading: {  
    fontSize: 28,  
    color: '#333',  
    marginBottom: 15,  
    textAlign: 'center',  
    fontWeight: 'bold',  
  },  
  bodyText: {  
    fontSize: 16,  
    color: '#333',  
    marginBottom: 15,  
    textAlign: 'center',  
    lineHeight: 22,
  },  
  listContainer: {  
    marginTop: 20,  
    width: '100%',  
    paddingHorizontal: 10,  
  },  
  listItem: {  
    fontSize: 16,  
    color: '#333',  
    marginBottom: 10,  
    textAlign: 'left',  
    flexDirection: 'row',  
    alignItems: 'center',  
  },  
  checkMark: {  
    color: 'rgb(241, 90, 41)',  
    fontSize: 18,  
    marginRight: 8,  
  },  
  buttonContainer: {  
    justifyContent: 'center',  
    alignItems: 'center', 
    marginBottom: 20,  
  },  
  input: {  
    height: 40,  
    borderColor: '#ccc',  
    borderWidth: 1,  
    paddingLeft: 10,  
    marginBottom: 20,  
    width: '100%',  
  },  
});

export default About;
