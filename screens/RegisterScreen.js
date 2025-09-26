import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <Text style={styles.subtitle}>어떤 유형으로 가입하시겠어요?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterEmployee')}
      >
        <Text style={styles.buttonText}>알바생으로 회원가입</Text>
        <Text style={styles.buttonDescription}>새로운 알바를 찾고 있어요</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.employerButton]}
        onPress={() => navigation.navigate('RegisterEmployer')}
      >
        <Text style={styles.buttonText}>고용주로 회원가입</Text>
        <Text style={styles.buttonDescription}>새로운 직원을 찾고 있어요</Text>
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
  },
  button: {
    backgroundColor: '#50E3C2',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  employerButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDescription: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default RegisterScreen;