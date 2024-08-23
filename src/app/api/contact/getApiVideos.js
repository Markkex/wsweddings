import React from 'react'

const getApiVideos = async (keys) => {
    try {
        console.log()
        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${keys}&maxResults=50&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
		const data = await res.json();
		return data.items;
	} catch (err) {
		console.log(err);
	}
}

export default getApiVideos