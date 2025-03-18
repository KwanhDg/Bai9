import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up Screen</Text>
      <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default SignUpScreen;