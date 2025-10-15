
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Modal, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const PRIMARY_COLOR = '#D1C4E9'; // Pastel primary color
const BACKGROUND_COLOR = '#E0F2F7'; // Very light pastel blue background
const CARD_BACKGROUND_COLOR = '#FFFDE7'; // Very light pastel yellow for cards
const FONT_COLOR = '#4A4A4A'; // Soft dark grey font color

const DUMMY_WORK_DATA = {
  '2025-09-25': { hours: '8시간', location: '스타벅스 강남점', pay: '80,000원' },
  '2025-09-26': { hours: '6시간', location: '투썸플레이스 홍대점', pay: '60,000원' },
  '2025-09-27': { hours: '4시간', location: '이디야커피 역삼점', pay: '40,000원' },
};

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);

  const onDayPress = (day) => {
    const data = DUMMY_WORK_DATA[day.dateString];
    if (data) {
      setSelectedDayData({ ...data, date: day.dateString });
      setModalVisible(true);
    } else {
      setSelectedDayData({ date: day.dateString, hours: '휴무', location: '-', pay: '0원' });
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Calendar
        onDayPress={onDayPress}
        theme={{
          selectedDayBackgroundColor: PRIMARY_COLOR,
          arrowColor: PRIMARY_COLOR,
          dotColor: PRIMARY_COLOR,
          todayTextColor: PRIMARY_COLOR,
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: BACKGROUND_COLOR,
            },
          },
        }}
        markedDates={{
          '2025-09-25': {selected: true, marked: true, selectedColor: PRIMARY_COLOR},
          '2025-09-26': {marked: true, selectedColor: PRIMARY_COLOR},
          '2025-09-27': {marked: true, selectedColor: PRIMARY_COLOR},
        }}
      />
<<<<<<< HEAD
      <View style={styles.card}>
        <Text style={styles.cardTitle}>9월 통계</Text>
=======
      <Text style={styles.calendarTitle}>사장님 달력</Text>
      <Calendar
        theme={{
          selectedDayBackgroundColor: PRIMARY_COLOR,
          arrowColor: PRIMARY_COLOR,
          dotColor: PRIMARY_COLOR,
          todayTextColor: PRIMARY_COLOR,
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: BACKGROUND_COLOR,
            },
          },
        }}
      />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>10월 통계</Text>
>>>>>>> hoon
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>총 근무 시간</Text>
          <Text style={styles.statsValue}>40시간</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>예상 급여</Text>
          <Text style={styles.statsValue}>400,000원</Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedDayData?.date} 근무 상세</Text>
            <View style={styles.modalDetailRow}>
              <Text style={styles.modalDetailLabel}>근무 시간:</Text>
              <Text style={styles.modalDetailValue}>{selectedDayData?.hours}</Text>
            </View>
            <View style={styles.modalDetailRow}>
              <Text style={styles.modalDetailLabel}>근무 장소:</Text>
              <Text style={styles.modalDetailValue}>{selectedDayData?.location}</Text>
            </View>
            <View style={styles.modalDetailRow}>
              <Text style={styles.modalDetailLabel}>예상 급여:</Text>
              <Text style={styles.modalDetailValue}>{selectedDayData?.pay}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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

export default HomeScreen;
