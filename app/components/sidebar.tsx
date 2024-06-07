'use client';
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Gallerystyles from "../toutelesgallery/gallerystyles/page";
import Gallerystyles1 from "../toutelesgallery/gallerystyles1/page";
import { link } from "fs";


export default function Sidebar() {
    const menuItems=[
        {
            link:'../toutelesgallery/galleryEverlastinesky',
            name:"Les Nuages",

    },
    {
       
        link:'../toutelesgallery/gallerystyles1',
        name:"Portrait",

},
{
   
        link:'../toutelesgallery/galleryVal',
        name:"Fotographie",
},

{
  link:'../toutelesgallery/galleryEverlastinesky',
  name:"La pluie",

},
{

link:'../toutelesgallery/gallerystyles1',
name:"Grenouilles",

},
{

link:'../toutelesgallery/galleryVal',
name:"Paysage",
},
    ];


return <div className="flex flex-col gap-4 w-[200px] min-w-[200px] sticky top-0  border-r min-h-screen p-2">Nom de l'Artiste

<aside className='bg-transparent-100 w-[300px] min-w-[300px]'> 
  <nav>
    <ul>
      {menuItems.map(({ link, name }) => (
        <ul className='m-2' key={name}>
          <Link href={link}>
            <li
              className={`flex p-2 bg--200 rounded justify-start items-center  text-[16px] hover:font-semibold uppercase md:opacity-50 hover:bg-blue-100 cursor-pointer`}>
            
              {name}
            </li>
          </Link>
        </ul>
      ))}
    </ul>
  </nav>
</aside>
</div>
}

// {/* //     return <div className="  flex flex-col gap-4 w-[200px] min-w-[200px] sticky top-0  border-r min-h-screen p-2">Nom de l'Artiste */}
//             <div className="-z-50">
//   <div className="grow bg-green-200 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> Menu
//   <nav>
//   <ul className="text-[16px] font-normal">
//     {menuItems.map((menu: any, key: number) =>{
//         return (
//         <li className="hover:underline text-[16px] font-normal" key={menu.name}>
       
//             <Link href ={menu.link}></Link> 
//         </li>



//         );
// })}

 
//     </ul>
//     </div>
   
  
//     </div>
    
//     </div>
//   </nav>
  
    // }
 
  


