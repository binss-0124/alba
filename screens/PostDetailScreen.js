
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PRIMARY_COLOR = '#D1C4E9'; // Pastel primary color
const BACKGROUND_COLOR = '#E0F2F7'; // Very light pastel blue background
const CARD_BACKGROUND_COLOR = '#FFFDE7'; // Very light pastel yellow for cards
const FONT_COLOR = '#4A4A4A'; // Soft dark grey font color

const PostDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { post } = route.params;

  // Dummy data for comments and likes
  const [comments, setComments] = React.useState([
    { id: '1', author: '댓글러1', text: '정말 공감합니다!', date: '2025-09-24' },
    { id: '2', author: '댓글러2', text: '저도 같은 경험이 있어요.', date: '2025-09-23' },
  ]);
  const [newComment, setNewComment] = React.useState('');
  const [likes, setLikes] = React.useState(10);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newId = String(comments.length + 1);
      setComments([...comments, { id: newId, author: '새로운 댓글러', text: newComment, date: '2025-09-26' }]);
      setNewComment('');
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentCard}>
      <Text style={styles.commentAuthor}>{item.author}</Text>
      <Text style={styles.commentText}>{item.text}</Text>
      <Text style={styles.commentDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postDetailCard}>
        <Text style={styles.postDetailTitle}>{post.title}</Text>
        <View style={styles.postDetailMeta}>
          <Text style={styles.postDetailAuthor}>{post.author}</Text>
          <Text style={styles.postDetailDate}>{post.date}</Text>
        </View>
        <Text style={styles.postDetailContent}>
          이곳은 게시글의 상세 내용이 들어갈 공간입니다.
          더 많은 텍스트가 여기에 표시될 수 있습니다.
          사용자들이 작성한 글의 전체 내용을 보여줍니다.
        </Text>
        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
            <Text style={styles.likeButtonText}>{isLiked ? '❤️' : '🤍'} 좋아요</Text>
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likes}명이 좋아합니다.</Text>
        </View>
      </View>

      <View style={styles.commentsSection}>
        <Text style={styles.sectionTitle}>댓글</Text>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={styles.noCommentsText}>아직 댓글이 없습니다.</Text>}
          scrollEnabled={false} // Disable scrolling for FlatList inside ScrollView
        />
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="댓글을 입력하세요..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity onPress={handleAddComment} style={styles.addCommentButton}>
            <Text style={styles.addCommentButtonText}>등록</Text>
          </TouchableOpacity>
        </View>
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
  postDetailCard: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: FONT_COLOR,
    marginBottom: 5,
  },
  postDetailMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postDetailAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  postDetailDate: {
    fontSize: 13,
    color: '#a0a0a0',
  },
  postDetailContent: {
    fontSize: 16,
    color: FONT_COLOR,
    lineHeight: 24,
    marginBottom: 15,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  likeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  likeCount: {
    fontSize: 14,
    color: FONT_COLOR,
  },
  commentsSection: {
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: FONT_COLOR,
    marginBottom: 10,
  },
  commentCard: {
    backgroundColor: '#F5F5F5', // Lighter background for comments
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: FONT_COLOR,
    marginBottom: 3,
  },
  commentText: {
    fontSize: 14,
    color: FONT_COLOR,
    marginBottom: 5,
  },
  commentDate: {
    fontSize: 11,
    color: '#a0a0a0',
    textAlign: 'right',
  },
  noCommentsText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
  },
  commentInputContainer: {
    flexDirection: 'row',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  addCommentButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCommentButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PostDetailScreen;
//%%수정됨
