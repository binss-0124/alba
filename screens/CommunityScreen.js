
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; //%%수정됨

const PRIMARY_COLOR = '#D1C4E9'; // Pastel primary color
const BACKGROUND_COLOR = '#E0F2F7'; // Very light pastel blue background
const CARD_BACKGROUND_COLOR = '#FFFDE7'; // Very light pastel yellow for cards
const FONT_COLOR = '#4A4A4A'; // Soft dark grey font color

const DUMMY_POSTS = [
  { id: '1', title: '오늘 근무 너무 힘드네요', author: '알바생1', date: '2025-09-24' },
  { id: '2', title: '새로 나온 메뉴 먹어보신 분?', author: '알바생2', date: '2025-09-23' },
  { id: '3', title: '매니저님 너무 착해요', author: '알바생3', date: '2025-09-22' },
  { id: '4', title: '시급 인상 소식! 다들 아시나요?', author: '알바생4', date: '2025-09-21' },
  { id: '5', title: '퇴근 후 뭐 드실 건가요?', author: '알바생5', date: '2025-09-20' },
];

const CommunityScreen = () => {
  const navigation = useNavigation(); //%%수정됨

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.postCard} onPress={() => navigation.navigate('PostDetail', { post: item })}> //%%수정됨
      <Text style={styles.postTitle}>{item.title}</Text>
      <View style={styles.postMeta}>
        <Text style={styles.postAuthor}>{item.author}</Text>
        <Text style={styles.postDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_POSTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={styles.writeButton} //%%수정됨
        onPress={() => navigation.navigate('CreatePost')} //%%수정됨
      >
        <Text style={styles.writeButtonText}>글쓰기</Text> //%%수정됨
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  listContent: {
    padding: 10,
  },
  postCard: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: FONT_COLOR,
    marginBottom: 5,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    fontSize: 13,
    color: 'gray',
  },
  postDate: {
    fontSize: 12,
    color: '#a0a0a0',
  },
  writeButton: { //%%수정됨
    position: 'absolute', //%%수정됨
    bottom: 20, //%%수정됨
    right: 20, //%%수정됨
    backgroundColor: PRIMARY_COLOR, //%%수정됨
    width: 60, //%%수정됨
    height: 60, //%%수정됨
    borderRadius: 30, //%%수정됨
    justifyContent: 'center', //%%수정됨
    alignItems: 'center', //%%수정됨
    elevation: 5, //%%수정됨
    shadowColor: '#000', //%%수정됨
    shadowOffset: { width: 0, height: 2 }, //%%수정됨
    shadowOpacity: 0.25, //%%수정됨
    shadowRadius: 3.84, //%%수정됨
  }, //%%수정됨
  writeButtonText: { //%%수정됨
    color: 'white', //%%수정됨
    fontSize: 16, //%%수정됨
    fontWeight: 'bold', //%%수정됨
  }, //%%수정됨
});

export default CommunityScreen;
