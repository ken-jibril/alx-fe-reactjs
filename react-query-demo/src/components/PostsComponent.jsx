import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function PostsComponent() {
  // 🧠 Fetch function
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };

  // ⚙️ React Query hook with advanced configs
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // 🧩 advanced settings for caching and refetching
    cacheTime: 1000 * 60 * 5, // cache for 5 minutes
    staleTime: 1000 * 30, // consider data fresh for 30 seconds
    refetchOnWindowFocus: false, // don’t refetch when window regains focus
    keepPreviousData: true, // keeps previous data during refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Fetched Posts</h2>
      <button
        onClick={() => refetch()}
        style={{
          backgroundColor: '#4F46E5',
          color: '#fff',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        🔄 Refetch Posts
      </button>

      {isFetching && <p style={{ color: '#555' }}>Refreshing data...</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              marginBottom: '12px',
              padding: '12px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ marginBottom: 8 }}>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
