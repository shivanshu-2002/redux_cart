import axios from 'axios';
import React, { useEffect, useState } from 'react'
const url = `https://api.giphy.com/v1/gifs/random?api_key=iYtPRyDcN9WdvhqsEr7pWYYvkVwqw8Gy`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [isfetched, setisfetched] = useState(false);

    async function fetchData(tag) {
        setisfetched(false);
        const { data } = await axios.get(tag?`${url}&tag=${tag}`:url);
        const image = data.data.images.downsized_medium.url;
        console.log(image)
        setGif(image);
        setisfetched(true);
    }

    useEffect(() => {
        fetchData('car');
    }, [])

   return {gif,isfetched,fetchData}
}

export default useGif