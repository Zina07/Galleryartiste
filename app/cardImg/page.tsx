'use client'
import Image from "next/image";

export type CardsImgProps = {
    src: string;
    width: number; 
    height: number;
    alt:string;
  
  };
  
export function CardsImg({src, width, height, alt}:CardsImgProps) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50
      dark:shadow-lg dark:shadow-teal-800/80 border rounded-lg p-8 md:p-12 shadow-2xl"> 
 
        <Image className=" mx-full rounded-lg"
        src={src}
        width={300} 
        height={300}
        alt="Picture of the author"/>
       </div>
      
    );
  }

  

  
    
  



