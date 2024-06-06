 'use client';
import Image from 'next/image'
import link from 'next/link'
import CardsImg from './cardimg'
// import { ContainerFonds } from '../containerFond/page'

 type DashboardValProps={backgroundColor?:string, backgroundImage?:string};



export default function DashboardVal({backgroundColor = "", backgroundImage = ""}:DashboardValProps) {
// const backgroundColor = "orange";
    return (
<>  
  
<div className={`grid grid-cols-1 md:grid-cols-3 gap-4`} style={{backgroundColor:backgroundColor, backgroundImage: backgroundImage}}>
    

     <CardsImg src="/img/val-1.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
     <CardsImg src="/img/val-2.jpeg" width={400}  height={500}  alt="Picture of the author"/>
   
    <CardsImg src="/img/val-4.jpeg" width={400}  height={500}  alt="Picture of the author"/>
    
     <CardsImg src="/img/val-7.jpeg" width={400}  height={500}  alt="Picture of the author"/>

    <CardsImg src="/img/val-8.jpeg" width={400}  height={500}  alt="Picture of the author"/>
    <CardsImg src="/img/val-1.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
     <CardsImg src="/img/val-2.jpeg" width={400}  height={500}  alt="Picture of the author"/>
  
    <CardsImg src="/img/val-4.jpeg" width={400}  height={500}  alt="Picture of the author"/>
    <CardsImg src="/img/val-2.jpeg" width={400}  height={500}  alt="Picture of the author"/>
   

    </div>
    
 
  </>

 )
    

}
