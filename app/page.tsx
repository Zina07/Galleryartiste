import Image from "next/image";

import BaseBouton from './components/baseButon'
// import Footer from "./components/footer/page";




export default function Home() {
  return (
    <body>
      
      
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       
        
          
          <BaseBouton />
       
      </div>

    

  
    </main>
    {/* <Footer/> */}
    </body>
    
  );
}
