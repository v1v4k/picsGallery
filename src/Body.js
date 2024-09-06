import React, { useState } from 'react'
import { useEffect } from 'react'
import PhotoCard from './PhotoCard';

const Body = () => {

    const [listOfPics, setListOfPics] = useState([]);

    useEffect(()=>{
        fetchPhotos();
    },[])


    const fetchPhotos = async()=>{
        const pics = await fetch("https://picsum.photos/v2/list");
       // console.log(pics);
        const json = await pics?.json();
        //console.log(json[0]?.download_url);

        setListOfPics(json)

    }
  return(listOfPics?.length === 0)?<h1>Loading</h1>:(
    <div className='min-h-screen w-full flex flex-wrap justify-center items-center bg-black'>
        {
            listOfPics?.map((photo)=><PhotoCard picData={photo} key={photo?.id}/>)
        }

    </div>
  )
}

export default Body