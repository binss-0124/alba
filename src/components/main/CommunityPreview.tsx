import React from 'react';
import './CommunityPreview.css';

interface Post { 
  id: string;
  title: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
  views: number;
}

interface CommunityPreviewProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const CommunityPreview: React.FC<CommunityPreviewProps> = ({ posts, onPostClick }) => {
  return (
    <div className="community-preview">
      {posts.length === 0 ? (
        <p className="no-posts">아직 게시글이 없습니다.</p>
      ) : (
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.id} className="post-item" onClick={() => onPostClick(post)}>
              <h4 className="post-title">{post.title}</h4>
              <div className="post-meta">
                <span className="post-author">{post.author}</span>
                <span className="post-stats">👀 {post.views}</span>
                <span className="post-stats">👍 {post.likes}</span>
                <span className="post-stats">💬 {post.comments}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommunityPreview;
