import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const PRIMARY_COLOR = '#D1C4E9';
const BACKGROUND_COLOR = '#E0F2F7';
const CARD_BACKGROUND_COLOR = '#FFFDE7';
const FONT_COLOR = '#4A4A4A';

const DUMMY_WORK_RECORDS = {
  '2025-10-01': [{ name: '김민준', hours: '8시간' }, { name: '이서연', hours: '4시간' }],
  '2025-10-02': [{ name: '박도윤', hours: '6시간' }],
  '2025-10-03': [{ name: '김민준', hours: '8시간' }, { name: '이서연', hours: '5시간' }, { name: '박도윤', hours: '3시간' }],
};

const DUMMY_EMPLOYEES = {
  '김민준': { hourly_wage: 10000 },
  '이서연': { hourly_wage: 11000 },
  '박도윤': { hourly_wage: 12000 },
};

const SalaryManagementScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);

  const onDayPress = (day) => {
    const data = DUMMY_WORK_RECORDS[day.dateString];
    if (data) {
      setSelectedDayData({ records: data, date: day.dateString });
      setModalVisible(true);
    } else {
      setSelectedDayData({ records: [], date: day.dateString });
      setModalVisible(true);
    }
  };

  const calculateMonthlySalary = () => {
    const salary = {};
    for (const employee in DUMMY_EMPLOYEES) {
      salary[employee] = 0;
    }

    for (const date in DUMMY_WORK_RECORDS) {
      if (date.startsWith('2025-10')) {
        for (const record of DUMMY_WORK_RECORDS[date]) {
          const hours = parseInt(record.hours.replace('시간', ''));
          salary[record.name] += hours * DUMMY_EMPLOYEES[record.name].hourly_wage;
        }
      }
    }
    return salary;
  };

  const monthlySalary = calculateMonthlySalary();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Calendar
        onDayPress={onDayPress}
        theme={{
          selectedDayBackgroundColor: PRIMARY_COLOR,
          arrowColor: PRIMARY_COLOR,
          dotColor: PRIMARY_COLOR,
          todayTextColor: PRIMARY_COLOR,
        }}
        markedDates={Object.keys(DUMMY_WORK_RECORDS).reduce((acc, date) => {
          acc[date] = { marked: true, selectedColor: PRIMARY_COLOR };
          return acc;
        }, {})}
      />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>10월 급여 정산</Text>
        {Object.keys(monthlySalary).map((employee) => (
          <View style={styles.statsRow} key={employee}>
            <Text style={styles.statsLabel}>{employee}</Text>
            <Text style={styles.statsValue}>{monthlySalary[employee].toLocaleString()}원</Text>
          </View>
        ))}
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedDayData?.date} 근무 직원</Text>
            {selectedDayData?.records.length > 0 ? (
              selectedDayData.records.map((record, index) => (
                <View style={styles.modalDetailRow} key={index}>
                  <Text style={styles.modalDetailLabel}>{record.name}:</Text>
                  <Text style={styles.modalDetailValue}>{record.hours}</Text>
                </View>
              ))
            ) : (
              <Text>근무 기록이 없습니다.</Text>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  card: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 20,
    margin: 20,
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statsLabel: {
    fontSize: 16,
    color: 'gray',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: '600',
    color: FONT_COLOR,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: FONT_COLOR,
  },
  modalDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  modalDetailLabel: {
    fontSize: 16,
    color: 'gray',
  },
  modalDetailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: FONT_COLOR,
  },
  modalCloseButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SalaryManagementScreen;
