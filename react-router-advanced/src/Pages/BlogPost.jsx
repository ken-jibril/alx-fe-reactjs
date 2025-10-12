import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Blog Post 📝</h2>
      <p>You're viewing post ID: <strong>{id}</strong></p>
    </div>
  );
}
