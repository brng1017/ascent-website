const axios = require('axios').default;

const endpoint = 'https://graph.instagram.com/';
const userId = 'me';
const accessToken = process.env.GATSBY_INSTAGRAM_KEY;
const apiCall = `${endpoint}${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;

const fetchInstagramPosts = async () => {
  try {
    const response = await axios.get(apiCall);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchInstagramPosts;