const newPost = async (userId, title, body) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId, title, body})
  });
  return await response.json();
};

export default newPost;
