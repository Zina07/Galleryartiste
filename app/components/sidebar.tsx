'use client';
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Gallerystyles from "../toutelesgallery/gallerystyles/page";
import Gallerystyles1 from "../toutelesgallery/gallerystyles1/page";


export default function Sidebar() {
    const menuItem=[
        {
            link:"/",
            name:"Les Nuages",

    },
    {
       
        link:"/gallerystyles",
        name:"Portrait",

},
{
   
        link:"/gallerystyle1",
        name:"Fotographie",
},
    ]
    return <div className="  flex flex-col gap-4 w-[200px] min-w-[200px] border-r min-h-screen p-2">Sidebar
            <div className="-z-50">
  <div className="grow bg-green-200 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> Menu
  <ul className="text-[16px] font-normal">
    {menuItem.map((menu: any, key: number) =>{
        return (
        <li className="hover:underline text-[16px] font-normal" key={menu.name}>
       
            <Link href ={menu.link}></Link> 
        </li>



        );
})}

 
    </ul>
    </div>
  
    </div>
    
    </div>
 
  

 
}   


