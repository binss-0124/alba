
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PRIMARY_COLOR = '#D1C4E9'; // Pastel primary color
const BACKGROUND_COLOR = '#E0F2F7'; // Very light pastel blue background
const CARD_BACKGROUND_COLOR = '#FFFDE7'; // Very light pastel yellow for cards
const FONT_COLOR = '#4A4A4A'; // Soft dark grey font color

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileName}>김민준</Text>
<<<<<<< HEAD
        <Text style={styles.profileEmail}>test@example.com</Text>
=======
        <Text style={styles.profileEmail}>employer@example.com</Text>
>>>>>>> hoon
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>개인정보 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>알림 설정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    paddingTop: 50,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: FONT_COLOR,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  menuContainer: {
    width: '80%',
  },
  menuButton: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuButtonText: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    fontWeight: '500',
  },
});

export default ProfileScreen;
