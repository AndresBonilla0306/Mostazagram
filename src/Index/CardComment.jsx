import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardComment = () => {
  const [comment, setComment] = useState('');
  const [foto, setFoto] = useState('');
  const [chats, setChats] = useState([]);
  
  useEffect(() => {
    async function fetchComment() {
      const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
      const comment = response.data[0].quote;
      setComment(comment);
    }
    fetchComment();
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
      setFoto(response.data.data.Page.media[0].coverImage.medium);
    }
    obtenerPost();
    fetch('/chats.json')
      .then(response => response.json())
      .then(data => setChats(data))
      .catch(error => console.log(error));
  }, []);
  
  function getRandomName() {
    const randomIndex = Math.floor(Math.random() * chats.length);
    const randomChat = chats[randomIndex];
    if (randomChat && randomChat.nombre) {
      return randomChat.nombre;
    } else {
      return 'Anónimo';
    }
  }
  
  
  return (
    <div className='texto'>
      <h5>{getRandomName()}:</h5>
      <p>{comment.substring(0, 50)}</p>
    </div>
  )
}

export default CardComment;
