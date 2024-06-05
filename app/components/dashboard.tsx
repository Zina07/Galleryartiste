 'use client';
import Image from 'next/image'
import link from 'next/link'
import CardsImg from './cardimg'
// import { ContainerFonds } from '../containerFond/page'

 type DashboardProps={backgroundColor:string};

export default function Dashboard({backgroundColor}:DashboardProps) {
// const backgroundColor = "orange";
    return (
<>  
  
<div className={`grid grid-cols-1 md:grid-cols-3 gap-4`} style={{backgroundColor:backgroundColor}}>

   
      <CardsImg src="/img/images-6.jpeg" width={300}  height={500}  alt="Picture of the author"/>
   
   
     <CardsImg src="/img/images-5.jpeg" width={300}  height={600}  alt="Picture of the author"/>
  
 
      <CardsImg src="/img/images-6.jpeg" width={500}  height={500}  alt="Picture of the author"/>
     
  
      <CardsImg src="/img/images-7.jpeg" width={300}  height={400}  alt="Picture of the author"/>
     
 
       <CardsImg src="/img/images-3.jpeg" width={400}  height={600}  alt="Picture of the author"/>
     

    
       <CardsImg src="/img/images-2.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
      <CardsImg src="/img/images-1.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
      <CardsImg src="/img/images-5.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
      <CardsImg src="/img/images-4.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
      <CardsImg src="/img/images-2.jpeg" width={400}  height={500}  alt="Picture of the author"/>
     
     <CardsImg src="/img/images-1.jpeg" width={400}  height={500}  alt="Picture of the author"/>
    
     <CardsImg src="/img/images-5.jpeg" width={400}  height={500}  alt="Picture of the author"/>
    
     <CardsImg src="/img/images-4.jpeg" width={400}  height={500}  alt="Picture of the author"/>
    </div>
    
 
  </>

 )
    

}
