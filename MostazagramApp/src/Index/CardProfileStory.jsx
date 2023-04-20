import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardProfileStory = () => {
  const [story, setStory] = useState('');
  useEffect(() => {
    async function obtenerPost() {
      const randomPage = Math.floor(Math.random() * 100);
      const response = await axios.post('https://graphql.anilist.co', {
        query: `
          query {
            Page(page: ${randomPage}, perPage: 1) {
              media(type: ANIME) {
                coverImage {
                  medium
                }
              }
            }
          }
        `,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      setStory(response.data.data.Page.media[0].coverImage.medium);
    }
    obtenerPost();
  }, []);

  return (
    <div className='StoriesContainer'>
      <img src={story} className='FotoStory' ></img>
    </div>
  )
}

export default CardProfileStory;
