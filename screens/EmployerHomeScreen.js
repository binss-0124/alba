
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PRIMARY_COLOR = '#4A90E2'; // A more business-like blue
const BACKGROUND_COLOR = '#F0F4F8';
const CARD_BACKGROUND_COLOR = '#FFFFFF';
const FONT_COLOR = '#333';
const ACCENT_COLOR_GREEN = '#34C759';
const ACCENT_COLOR_GRAY = '#8E8E93';


const EmployerHomeScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>사장님-홈</Text>
        <TouchableOpacity style={styles.inviteButton}>
          <Ionicons name="person-add-outline" size={20} color="#fff" />
          <Text style={styles.inviteButtonText}>직원 초대</Text>
        </TouchableOpacity>
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
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  inviteButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default EmployerHomeScreen;
