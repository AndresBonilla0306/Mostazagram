import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardProfileStory = () => {

  const navegar = useNavigate();

  const Click = () =>{
    navegar('/Story')
  }
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
      <button onClick={Click}> 
        <img src={story} className='FotoStory' ></img>
      </button>
    </div>
  )
}

export default CardProfileStory;
