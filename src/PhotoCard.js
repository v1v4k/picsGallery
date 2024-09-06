import React from 'react'

const PhotoCard = (props) => {
    const {picData} = props;

    console.log(picData);

    const pic_url = picData?.download_url;
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img 
                src={pic_url} alt=''
                className='w-full h-64 object-cover'/>
        </div>
       
    </div>
  )
}

export default PhotoCard