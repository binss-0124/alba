import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
<<<<<<< HEAD
  Alert,
} from 'react-native';
import { supabase } from '../supabase';
=======
} from 'react-native';
>>>>>>> hoon

const RegisterEmployerScreen = ({ navigation }) => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
<<<<<<< HEAD
  const [phoneNumber, setPhoneNumber] = useState('');
  const [branchCode, setBranchCode] = useState(''); //%%수정됨

  const handleRegister = async () => {
    if (!companyName || !email || !password || !confirmPassword || !phoneNumber || !branchCode) { //%%수정됨
      Alert.alert('입력 오류', '모든 필드를 입력해주세요.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('비밀번호 불일치', '비밀번호가 일치하지 않습니다.');
      return;
    }

    const { data: { user }, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log('Supabase signUp error:', error);
      Alert.alert('회원가입 오류', error.message);
      return;
    }

    if (user) {
      // Insert into employers table
      const { error: employerInsertError } = await supabase
        .from('employers')
        .insert([{ user_id: user.id, company_name: companyName, phone_number: phoneNumber, branch_code: branchCode }]); //%%수정됨

      if (employerInsertError) {
        console.log('Supabase employer insert error:', employerInsertError);
        Alert.alert('고용주 정보 저장 오류', employerInsertError.message);
        return;
      }

      Alert.alert('회원가입 성공', '회원가입이 완료되었습니다. 로그인해주세요.');
      navigation.navigate('LoginEmployer');
    }
=======

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // Handle employer registration logic here
    // For now, just navigate to the login screen
    navigation.navigate('Login');
>>>>>>> hoon
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>고용주 회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="회사명"
        placeholderTextColor="#999"
        value={companyName}
        onChangeText={setCompanyName}
      />
      <TextInput
        style={styles.input}
        placeholder="이메일"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        placeholderTextColor="#999"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
<<<<<<< HEAD
      <TextInput
        style={styles.input}
        placeholder="전화번호"
        placeholderTextColor="#999"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="지점 번호"
        placeholderTextColor="#999"
        value={branchCode}
        onChangeText={setBranchCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('LoginEmployer'); /*%%수정됨*/}}>
=======
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
>>>>>>> hoon
        <Text style={styles.linkText}>이미 계정이 있으신가요? 로그인</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#4A90E2',
    fontSize: 14,
    marginTop: 20,
  },
});

export default RegisterEmployerScreen;