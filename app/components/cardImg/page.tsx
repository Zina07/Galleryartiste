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
  
export function CardsImg({src, width, height, alt}:CardsImgProps) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 
      border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-800 
      // dark:focus:ring-teal-800 shadow-lg shadow-teal-800/80
      // dark:shadow-lg dark:shadow-teal-800/80 border rounded-lg p-8 md:p-12 shadow-2xl"> 
 
        <Image className=" mx-full rounded-lg"
        src={src}
        width={300} 
        height={300}
        alt="Picture of the author"/>
       </div>
      
    );
  }

  

  
    
  



