import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AppContext } from '../../context/AppContext';

// Component Avatar cho phần Header
const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('../../assets/images/avatar.jpg')} // Thay bằng đường dẫn ảnh avatar thực tế
        style={styles.avatar}
      />
    </View>
  );
};

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Avatar />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.title}>Mobile Developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#00BFFF',
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10, 
  },
  avatarContainer: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff', 
    marginBottom: 0,
    position: 'absolute', 
    top: 100,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  avatar: {
    width: '100%',
    height: '100',
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    color: '#00BFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  signOutButton: {
    backgroundColor: '#F5A623',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;