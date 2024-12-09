import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
  const [keyWord, setKeyword] = useState('');
  console.log('Searching for:', keyWord);  // You can handle this with an input field later if needed

  return (
    // <View style={styles.container}>
    //   {/* Container for Image and Text Section in Row */}
    //   <View style={styles.rowContainer}>
    //     {/* Text Section */}
    //     <View style={styles.textContainer}>
    //       <Text style={styles.subHeading}>
    //         Hire Professionals{'\n'}for Your
    //         <Text style={styles.orangeText}>Service</Text>
    //         {'\n'}Needs
    //       </Text>
    //       <Text style={styles.bodyText}>
    //         Explore our marketplace to find top-rated professionals in your area.{'\n'}
    //         Compare reviews, check availability, and book services with confidence{'\n'}
    //         --all in one place.
    //       </Text>
    //     </View>

    //     {/* Image Section */}
    //     <View style={styles.imageContainer}>
    //       <Image
    //         source={{ uri: 'https://fixitindia.com/assets/images/banner/kgroiu.png' }} // Replace with your image path
    //         style={styles.logo}
    //       />
    //       </View>
    //   </View>
    // </View>
    <View>
      
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 250,  // Adjusted padding for proper spacing
//     backgroundColor: '#fff',
//   },
//   rowContainer: {
//     flexDirection: 'row',  // This keeps the image and text in a row (image on the right, text on the left)
//     alignItems: 'center',  // Vertically center the items
//     width: '100%',  // Ensure the row takes up the full width of the container
//   },
//   imageContainer: {
//     flex: 1, // Give image a flexible width based on the available space
//     justifyContent: 'center',
//     alignItems: 'center',  // Center the image within its container
//     marginLeft: 10, // Space between the image and the text
//   },
//   logo: {
//     width: 600,  // Set the width of the image
//     height: 500, // Set the height of the image
//     resizeMode: 'contain', // Ensure the image doesn't stretch
//   },
//   textContainer: {
//     flex: 1, // Give the text container more space than the image container
//     justifyContent: 'center',
//     alignItems: 'flex-start',  // Align text to the left within the container
//   },
//   subHeading: {
//     fontSize: 50,
//     color: '#333',
//     marginBottom: 5,
//     textAlign: 'left',  // Align the heading to the left
//     fontWeight: 'bold',
//   },
//   bodyText: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//     textAlign: 'left',  // Align the body text to the left
//     lineHeight: 25,
//   },
//   orangeText: {
//     color: 'orange',  // Apply the orange color to the word 'Service'
//   },
// });

export default Home;