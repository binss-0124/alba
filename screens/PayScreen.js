
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const PRIMARY_COLOR = '#D1C4E9'; // Pastel primary color
const BACKGROUND_COLOR = '#E0F2F7'; // Very light pastel blue background
const CARD_BACKGROUND_COLOR = '#FFFDE7'; // Very light pastel yellow for cards
const FONT_COLOR = '#4A4A4A'; // Soft dark grey font color

// 2024년 기준 4대 보험 요율 (근로자 부담분, 단순화된 시뮬레이션)
const NATIONAL_PENSION_RATE = 0.045; // 국민연금 4.5%
const HEALTH_INSURANCE_RATE = 0.03545; // 건강보험 3.545%
const LONG_TERM_CARE_RATE = 0.1295; // 장기요양보험 (건강보험료의 12.95%)
const EMPLOYMENT_INSURANCE_RATE = 0.009; // 고용보험 0.9%

// 소득세 및 지방소득세 (매우 단순화된 시뮬레이션)
// 실제 소득세는 간이세액표, 부양가족 등에 따라 복잡하게 달라집니다.
const INCOME_TAX_SIMPLIFIED_RATE = 0.03; // 예시: 3%
const LOCAL_INCOME_TAX_RATE = 0.1; // 소득세의 10%

const AVERAGE_WEEKS_IN_MONTH = 4.345; // 월 평균 주 수

const PayScreen = () => {
  const [hourlyWage, setHourlyWage] = useState('');
  const [weeklyHours, setWeeklyHours] = useState('');
  const [monthlyWorkingDays, setMonthlyWorkingDays] = useState('');

  const [monthlyGrossPay, setMonthlyGrossPay] = useState(0);
  const [monthlyWeeklyHolidayPay, setMonthlyWeeklyHolidayPay] = useState(0);
  const [nationalPensionDeduction, setNationalPensionDeduction] = useState(0);
  const [healthInsuranceDeduction, setHealthInsuranceDeduction] = useState(0);
  const [employmentInsuranceDeduction, setEmploymentInsuranceDeduction] = useState(0);
  const [incomeTaxDeduction, setIncomeTaxDeduction] = useState(0);
  const [localIncomeTaxDeduction, setLocalIncomeTaxDeduction] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [monthlyNetPay, setMonthlyNetPay] = useState(0);

  const calculatePay = () => {
    const wage = parseFloat(hourlyWage);
    const wHours = parseFloat(weeklyHours);
    const mDays = parseFloat(monthlyWorkingDays);

    if (isNaN(wage) || isNaN(wHours) || isNaN(mDays) || wage <= 0 || wHours <= 0 || mDays <= 0) {
      Alert.alert('입력 오류', '시급, 주간 근무 시간, 월간 근무 일수를 올바르게 입력해주세요.');
      return;
    }

    // 1. 월간 총 근무 시간 (주간 근무 시간 * 월 평균 주 수)
    const monthlyTotalHours = wHours * AVERAGE_WEEKS_IN_MONTH;

    // 2. 월간 주휴수당 계산
    let calculatedMonthlyWeeklyHolidayPay = 0;
    if (wHours >= 15) {
      // 주휴수당 = (주간 소정근로시간 / 40시간) * 8시간 * 시급 * 월 평균 주 수
      // 또는 (주간 소정근로시간 / 1주 소정근로시간) * 1일 소정근로시간 * 시급 * 월 평균 주 수
      // 여기서는 주 40시간 미만 근로자도 주휴수당을 받을 수 있으므로, 주간 근무 시간에 비례하여 계산
      calculatedMonthlyWeeklyHolidayPay = Math.floor((wHours / 40) * 8 * wage * AVERAGE_WEEKS_IN_MONTH);
    }
    setMonthlyWeeklyHolidayPay(calculatedMonthlyWeeklyHolidayPay);

    // 3. 월간 총 급여 (세전) = (시급 * 월간 총 근무 시간) + 월간 주휴수당
    const calculatedMonthlyGrossPay = Math.floor((wage * monthlyTotalHours) + calculatedMonthlyWeeklyHolidayPay);
    setMonthlyGrossPay(calculatedMonthlyGrossPay);

    // 4. 4대 보험 및 세금 공제 시뮬레이션
    // 국민연금
    const np = Math.floor(calculatedMonthlyGrossPay * NATIONAL_PENSION_RATE);
    setNationalPensionDeduction(np);

    // 건강보험
    const hi = Math.floor(calculatedMonthlyGrossPay * HEALTH_INSURANCE_RATE);
    setHealthInsuranceDeduction(hi);

    // 장기요양보험
    const ltc = Math.floor(hi * LONG_TERM_CARE_RATE);

    // 고용보험
    const ei = Math.floor(calculatedMonthlyGrossPay * EMPLOYMENT_INSURANCE_RATE);
    setEmploymentInsuranceDeduction(ei);

    // 소득세 (간이세액표를 단순화한 시뮬레이션)
    const it = Math.floor(calculatedMonthlyGrossPay * INCOME_TAX_SIMPLIFIED_RATE);
    setIncomeTaxDeduction(it);

    // 지방소득세
    const lit = Math.floor(it * LOCAL_INCOME_TAX_RATE);
    setLocalIncomeTaxDeduction(lit);

    const calculatedTotalDeductions = Math.floor(np + hi + ltc + ei + it + lit);
    setTotalDeductions(calculatedTotalDeductions);

    // 5. 월간 실수령액 (세후)
    const calculatedMonthlyNetPay = Math.floor(calculatedMonthlyGrossPay - calculatedTotalDeductions);
    setMonthlyNetPay(calculatedMonthlyNetPay);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>월간 급여 계산 입력</Text>
        <TextInput
          style={styles.input}
          placeholder="시급 (원)"
          placeholderTextColor="#bdc3c7"
          keyboardType="numeric"
          value={hourlyWage}
          onChangeText={setHourlyWage}
        />
        <TextInput
          style={styles.input}
          placeholder="주간 근무 시간 (시간, 예: 20)"
          placeholderTextColor="#bdc3c7"
          keyboardType="numeric"
          value={weeklyHours}
          onChangeText={setWeeklyHours}
        />
        <TextInput
          style={styles.input}
          placeholder="월간 근무 일수 (일, 예: 20)"
          placeholderTextColor="#bdc3c7"
          keyboardType="numeric"
          value={monthlyWorkingDays}
          onChangeText={setMonthlyWorkingDays}
        />
        <TouchableOpacity style={styles.button} onPress={calculatePay}>
          <Text style={styles.buttonText}>월간 급여 계산하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>월간 급여 계산 결과</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>월간 총 급여 (세전)</Text>
          <Text style={styles.statsValue}>{monthlyGrossPay.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>- 월간 주휴수당</Text>
          <Text style={styles.statsValue}>{monthlyWeeklyHolidayPay.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>총 공제액</Text>
          <Text style={styles.statsValue}>{totalDeductions.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>  - 국민연금</Text>
          <Text style={styles.statsValue}>{nationalPensionDeduction.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>  - 건강보험</Text>
          <Text style={styles.statsValue}>{healthInsuranceDeduction.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>  - 고용보험</Text>
          <Text style={styles.statsValue}>{employmentInsuranceDeduction.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>  - 소득세</Text>
          <Text style={styles.statsValue}>{incomeTaxDeduction.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>  - 지방소득세</Text>
          <Text style={styles.statsValue}>{localIncomeTaxDeduction.toLocaleString()}원</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={[styles.statsLabel, styles.netPayLabel]}>월간 실수령액 (세후)</Text>
          <Text style={[styles.statsValue, styles.netPayValue]}>{monthlyNetPay.toLocaleString()}원</Text>
        </View>
        <Text style={styles.disclaimer}>* 위 계산은 2024년 기준의 단순화된 시뮬레이션이며, 실제 급여 및 공제액과 다를 수 있습니다. 정확한 정보는 관련 기관에 문의하세요.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
  },
  card: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
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
  input: {
    backgroundColor: '#ecf0f1',
    borderWidth: 0,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
    color: FONT_COLOR,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statsLabel: {
    fontSize: 16,
    color: FONT_COLOR,
  },
  statsValue: {
    fontSize: 16,
    fontWeight: '600',
    color: FONT_COLOR,
  },
  netPayLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  netPayValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  disclaimer: {
    fontSize: 12,
    color: '#888',
    marginTop: 15,
    textAlign: 'center',
    lineHeight: 18,
  },
});

export default PayScreen;
