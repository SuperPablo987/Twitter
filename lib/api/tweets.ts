import { API_URL, authToken } from "./config";

export const listTweets = async () => {
    // fetch tweets: http://localhost:3000/tweet
    
    const res = await fetch(`${API_URL}/tweet`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === 401) {
        console.log(res);
        throw new Error('Not authorized lt. Please sign in');
      }
    if (res.status !== 200) {
      throw new Error('Error fetching tweets');
    }
    if (res.status === 200){
      console.warn('lt incoming!')
    }
    return await res.json();
};

export const getTweet = async (id: string) => {
    const res = await fetch(`${API_URL}/tweet/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        },
      });
      if (res.status === 401) {
          throw new Error('Not authorized gt. Please sign in');
        }
      if (res.status !== 200) {
        throw new Error('Error fetching tweet');
      }
      if (res.status === 200){
        console.warn('gt incoming!')
      }
      return await res.json();
};

export const createTweet = async (data: { content: string }) => {
    const res = await fetch(`${API_URL}/tweet`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.status === 401) {
          throw new Error('Not authorized ct. Please sign in');
      }
      if (res.status !== 200) {
        console.log(res);
        throw new Error('Error creating tweet');
      }
      if (res.status === 200){
        console.warn('ct incoming!')
      }
      return await res.json();
};