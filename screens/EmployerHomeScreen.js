import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';

const BACKGROUND_COLOR = '#E0F2F7';
const FONT_COLOR = '#4A4A4A';
const PRIMARY_COLOR = '#D1C4E9';
const CARD_BACKGROUND_COLOR = '#FFFDE7';

const DUMMY_SHIFTS = [
  { time: '09:00 - 12:00', name: '오전 파트', employees: ['김민준', '이서연'] },
  { time: '12:00 - 18:00', name: '오후 파트', employees: ['박도윤'] },
  { time: '18:00 - 22:00', name: '마감 파트', employees: ['김민준'] },
];

const DUMMY_EMPLOYEES = [
  { name: '김민준', isWorking: true },
  { name: '이서연', isWorking: false },
  { name: '박도윤', isWorking: true },
  { name: '최유나', isWorking: false },
];

const EmployerHomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>대시보드</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>오늘의 근무 시프트</Text>
        {DUMMY_SHIFTS.map((shift, index) => (
          <View key={index} style={styles.shiftRow}>
            <Text style={styles.shiftTime}>{shift.time}</Text>
            <Text style={styles.shiftName}>{shift.name}</Text>
            <Text style={styles.shiftEmployees}>{shift.employees.join(', ')}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>전체 직원</Text>
        {DUMMY_EMPLOYEES.map((employee, index) => (
          <View key={index} style={styles.employeeRow}>
            <View style={styles.employeeInfo}>
              <View style={[styles.statusIndicator, { backgroundColor: employee.isWorking ? '#2ECC71' : '#E74C3C' }]} />
              <Text style={styles.employeeName}>{employee.name}</Text>
            </View>
            <Text style={styles.employeeStatus}>{employee.isWorking ? '근무 중' : '퇴근'}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: FONT_COLOR,
  },
  card: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: FONT_COLOR,
  },
  shiftRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  shiftTime: {
    fontSize: 16,
    fontWeight: '600',
    color: FONT_COLOR,
    width: '35%',
  },
  shiftName: {
    fontSize: 16,
    color: 'gray',
    width: '25%',
  },
  shiftEmployees: {
    fontSize: 16,
    color: FONT_COLOR,
    width: '40%',
    textAlign: 'right',
  },
  employeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  employeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: '600',
    color: FONT_COLOR,
  },
  employeeStatus: {
    fontSize: 16,
    color: 'gray',
  },
});

export default EmployerHomeScreen;
