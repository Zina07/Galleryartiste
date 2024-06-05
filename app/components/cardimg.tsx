'use client'
import Image from "next/image";


export type CardsImgProps = {
    src: string;
    width: number; 
    height: number;
    alt:string;
  
  };
// pour créer une opacité sur un elt en tailwinds
  // md:opacity-50 pour
  
function CardsImg({src, width, height, alt}:CardsImgProps) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 id='cardImgGallery'
      border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:border-gray-700 grey
       dark:hover:bg-gray-700
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-800"> 
 
        <Image className=" mx-full rounded-lg  "
        src={src}
        width={300} 
        height={300}
        alt="Picture of the author"/>
       </div>
      
    );
  }

  export default CardsImg;
  

  
    
  



