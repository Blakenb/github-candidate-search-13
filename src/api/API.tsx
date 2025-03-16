const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 1000) + 1; // Smaller range
    console.log(import.meta.env.VITE_GITHUB_TOKEN); // Debugging token
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
    console.log('Response:', response); // Debugging response
    const data = await response.json();
    console.log('Data:', data); // Debugging data
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.error('An error occurred:', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
