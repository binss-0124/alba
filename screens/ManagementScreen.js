import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../supabase';
import { useFocusEffect } from '@react-navigation/native';

const BACKGROUND_COLOR = '#E0F2F7';
const FONT_COLOR = '#4A4A4A';
const CARD_BACKGROUND_COLOR = '#FFFDE7';

const ManagementScreen = () => {
  const [pendingEmployees, setPendingEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPendingEmployees = async () => {
    setLoading(true);
    const { data: employerData, error: employerError } = await supabase.auth.getUser();
    if (employerError) {
      Alert.alert('오류', '고용주 정보를 불러오는데 실패했습니다.');
      console.error(employerError);
      setLoading(false);
      return;
    }

    const { data: employerProfile, error: profileError } = await supabase
      .from('employers')
      .select('branch_code')
      .eq('user_id', employerData.user.id)
      .single();

    if (profileError) {
      Alert.alert('오류', '고용주 프로필 정보를 불러오는데 실패했습니다.');
      console.error(profileError);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('branch_code', employerProfile.branch_code)
      .eq('status', 'pending');

    if (error) {
      Alert.alert('오류', '승인 대기중인 직원 목록을 불러오는데 실패했습니다.');
      console.error(error);
    } else {
      setPendingEmployees(data);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchPendingEmployees();
    }, [])
  );

  const handleApprove = async (employeeId) => {
    const { error } = await supabase
      .from('employees')
      .update({ status: 'approved' })
      .eq('user_id', employeeId);

    if (error) {
      Alert.alert('오류', '직원 승인 중 오류가 발생했습니다.');
      console.error(error);
    } else {
      Alert.alert('성공', '직원을 승인했습니다.');
      fetchPendingEmployees();
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.employeeCard}>
      <View>
        <Text style={styles.employeeName}>{item.name}</Text>
        <Text style={styles.employeePhone}>{item.phone_number}</Text>
      </View>
      <TouchableOpacity style={styles.approveButton} onPress={() => handleApprove(item.user_id)}>
        <Text style={styles.approveButtonText}>승인</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>알바생 승인 관리</Text>
      {loading ? (
        <Text>로딩 중...</Text>
      ) : pendingEmployees.length === 0 ? (
        <Text>승인 대기 중인 직원이 없습니다.</Text>
      ) : (
        <FlatList
          data={pendingEmployees}
          renderItem={renderItem}
          keyExtractor={(item) => item.user_id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: FONT_COLOR,
    marginBottom: 20,
  },
  employeeCard: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: FONT_COLOR,
  },
  employeePhone: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  approveButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  approveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ManagementScreen;
