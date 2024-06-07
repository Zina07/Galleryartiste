'use client'
import Image from "next/image";
import { useState, useEffect } from 'react'

export type CardsImgProps = {
    src: string;
    width: number; 
    height: number;
    alt:string;
  
  };
// pour créer une opacité sur un elt en tailwinds
  // md:opacity-50 pour
  
function CardsImg({src, width, height, alt}:CardsImgProps) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
    return (
      <div className="bg-gray-50 dark:bg-gray-800 id='cardImgGallery'
       border border-gray-200 rounded-lg shadow hover:shadow-2xl"> 
     
       {/* hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-800 dark:border-gray-700 grey  hover:bg-gray-100">  */}
 
        <Image className=" mx-full rounded-lg  "
        src={src}
        width={300} 
        height={300}
        alt="Picture of the author"/>
       </div>
      
    );
  }

  export default CardsImg;
  

  
    
  



