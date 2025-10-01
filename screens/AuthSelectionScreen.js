import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AuthSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>환영합니다!</Text>
      <Text style={styles.subtitle}>어떤 유형으로 로그인/회원가입 하시겠어요?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginEmployee')}
      >
        <Text style={styles.buttonText}>알바생</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.employerButton]}
        onPress={() => navigation.navigate('LoginEmployer')}
      >
        <Text style={styles.buttonText}>고용주</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerLinkText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#50E3C2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  employerButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 30,
  },
  registerLinkText: {
    color: '#4A90E2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default AuthSelectionScreen;