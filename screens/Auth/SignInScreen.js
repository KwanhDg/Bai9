import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';

// Component CustomTextInput
const CustomTextInput = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

// Component IconButton
const IconButton = ({ iconName, text, backgroundColor, textColor, borderColor, style }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { 
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: borderColor ? 1 : 0 
        },
        style
      ]}
    >
      <Ionicons 
        name={iconName} 
        size={20} 
        color={textColor} 
        style={styles.icon} 
      />
      <Text style={[styles.text, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// Main SignInScreen Component
const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both email and password!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <CustomTextInput 
        placeholder="Enter your email here!" 
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <CustomTextInput 
        placeholder="Enter your password here!" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />
      
      <Text 
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        Forgot password?
      </Text>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or sign in with</Text>

      <View style={styles.socialButtons}>
        <IconButton
          iconName="logo-google"
          text="Google"
          backgroundColor="#fff"
          textColor="#000"
          borderColor="#ccc"
          style={styles.buttonMarginRight}
        />
        <IconButton
          iconName="logo-facebook"
          text="Facebook"
          backgroundColor="#3B5998"
          textColor="#fff"
          style={styles.buttonMarginLeft}
        />
      </View>

      <Text style={styles.signUp}>
        Not yet a member?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#F5A623',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#F5A623',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    marginRight: 8,
  },
  buttonMarginRight: {
    marginRight: 10,
  },
  buttonMarginLeft: {
    marginLeft: 10,
  },
  signUp: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  link: {
    color: '#F5A623',
    fontWeight: 'bold',
  },
});

export default SignInScreen;