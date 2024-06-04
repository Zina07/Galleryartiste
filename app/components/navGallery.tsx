'use client';
import React from "react";
import Link from "next/link"

type navGallerry ='navbarre';
export default function NavGallery () {
    const menuItem=[
        {
            name:"Accueil",
            link:"/",

    },
    {
        name:"Portrait",
        link:"/../gallerystyles",

},
{
    name:"Fotographie",
    link:"/gallerystyles1",

},

]
return (
   

<div>
<ul className="bg-white rounded-lg">
    {menuItem.map((menu) => {
        return (
        <li key={menu.name}
        className="">
            <Link href={menu.link}></Link>
        </li>
        );
})}

 </ul>
    </div> 
    
    
);
}

