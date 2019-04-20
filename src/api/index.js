import axios from 'axios';
import randomWords from 'random-words'; 
import mockServer from './server-mock';

export const getRandomVideos = async () => {
    try {
      const keywords = randomWords(1);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=date&q=${keywords}&key=${process.env.REACT_APP_API_KEY}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }


  export const getMocksVideos = () => {
    return mockServer;
  }