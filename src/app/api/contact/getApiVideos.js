import React from "react";

const getApiVideos = async (keys) => {
  try {
	fetch(process.env.NEXT_PUBLIC_API_SERVER + "/get-projects/index.php",)
	.then((response) => response.json())
	.then((data) => {
	  return data;
	})
	.catch((error) => console.error('Error fetching projects:', error))
  } catch (err) {
    console.log(err);
  }
};

export default getApiVideos;