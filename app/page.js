import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";


export default function Home() {
  
  return (
  <main className="">
    {/* Header Section */}
    <Navbar/>
    {/* Hero Section */}
    <section className="p-5 mt-10">
     <div className="flex flex-col md:flex-row rounded-b-full md:rounded-l-full border-1 shadow-2xl ">
     <div className="w-full md:1/2 p-5">
     <h1 className="text-center md:text-right text-3xl md:text-5xl font-bold">విలియం మారీయన్ బ్రేన్హం</h1>
      <p className="mt-5 text-right text-xl md:text-4xl font-semibold">-ఏడవ దూత</p>
  
        {/* <p className="mt-10 md:mt-20 px-10 text-4xl md:text-6xl font-semibold"> యేడవ దూత పలుకు దినములలో అతడు బూర ఊదబోవుచుండగా, <br /> దేవుడు తన దాసులగు ప్రవక్తలకు తెలిపిన సువార్తప్రకారము దేవుని మర్మము సమాప్తమగునని చెప్పెను. </p>
        <p className="mt-20 px-10 text-xl md:text-3xl text-left font-semibold">ప్రకటన 10:7 </p>
       */}<section className="text-gray-600 body-font">
  <div className="container px-5 py-5 md:py-12 mx-auto">
    <div className="w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed font-bold text-xl  md:text-4xl"> యేడవ దూత పలుకు దినములలో అతడు బూర ఊదబోవుచుండగా, <br /> దేవుడు తన దాసులగు ప్రవక్తలకు తెలిపిన సువార్తప్రకారము దేవుని మర్మము సమాప్తమగునని చెప్పెను. </p>
      <span className="inline-block h-1 w-52 rounded bg-amber-700 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">ప్రకటన 10:7</h2>
    </div>
  </div>
</section>
      </div>
      <div className="w-full justify-end flex">
        
        <Image alt="Branham Image" className="rounded-b-full md:rounded-l-full object-fit w-auto h-auto priority" src={'/wmb.png'} width={500} height={500}/>
      </div>
     </div>
     {/* Hero ends */}
    
    
    </section>
<Footer/>
  </main>
  );
}
/*
 <div className="mt-20 flex flex-col md:flex-row rounded-r-full border-1 shadow-2xl ">
     <div className="w-full md:w-1/2 justify-start flex">
        
        <Image className="rounded-r-full object-fit" src={'/wmb.png'} width={500} height={500}/>
      </div>
     <div className="w-full md:w-1/2 p-5">
     <h1 className="text-right text-5xl font-bold">విలియం మారీయన్ బ్రేన్హం</h1>
      <p className="mt-5 text-right text-4xl font-semibold">-ఏడవ దూత</p>
  
        {/* <p className="mt-10 md:mt-20 px-10 text-4xl md:text-6xl font-semibold"> యేడవ దూత పలుకు దినములలో అతడు బూర ఊదబోవుచుండగా, <br /> దేవుడు తన దాసులగు ప్రవక్తలకు తెలిపిన సువార్తప్రకారము దేవుని మర్మము సమాప్తమగునని చెప్పెను. </p>
        <p className="mt-20 px-10 text-xl md:text-3xl text-left font-semibold">ప్రకటన 10:7 </p>
       <section className="text-gray-600 body-font">
       <div className="container px-5 py-12 mx-auto">
       <div className="w-full mx-auto text-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
           <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
         </svg>
         <p className="leading-relaxed font-bold  text-4xl"> యేడవ దూత పలుకు దినములలో అతడు బూర ఊదబోవుచుండగా, <br /> దేవుడు తన దాసులగు ప్రవక్తలకు తెలిపిన సువార్తప్రకారము దేవుని మర్మము సమాప్తమగునని చెప్పెను. </p>
         <span className="inline-block h-1 w-52 rounded bg-amber-700 mt-8 mb-6"></span>
         <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">ప్రకటన 10:7</h2>
       </div>
     </div>
   </section>
         </div>
        
        </div>
*/
