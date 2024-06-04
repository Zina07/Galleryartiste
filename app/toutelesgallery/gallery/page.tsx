'use client';
import Image from 'next/image'
import CardsImg from '../../components/cardimg'
// import NavGallery from '../components/navGallery/page';
// import { ContainerFonds } from '../containerFond/page'
// import styles from '../testzstyles/page/styles.css'

type DashboardProps={backgroundColor:string};

export default function Gallery({backgroundColor}:DashboardProps) {
// const backgroundColor = "orange";
    return (
<>  
{/* <section>
  <nav><NavGallery/>
  </nav>

</section> */}
  
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
       
    </div>
   
  </>

 )
    

}
