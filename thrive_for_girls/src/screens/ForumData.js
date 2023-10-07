// mockData.js

// Function to generate random comments for a post
const generateRandomComments = (postId, count) => {
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push({
      id: i,
      postId: postId,
      text: `Random Comment ${i} for Post ${postId}`,
    });
  }
  return comments;
};

export const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post.",
    comments: generateRandomComments(1, 5), // Generate 5 random comments for Post 1
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post.",
    comments: generateRandomComments(2, 5), // Generate 5 random comments for Post 2
  },
  // Add more posts here...
];
