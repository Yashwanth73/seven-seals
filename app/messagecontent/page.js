'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/navbar";
import Modal from "@/components/modal";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const Content = ({params}) => {
  const searchParams = useSearchParams();
  const tel = searchParams.get('telugu');
  const eng = searchParams.get('english');
  const para = searchParams.get('para');
  const [book, setBook] = useState("");
  const [lang, setlang] = useState("Telugu");
  const [fsize, setfsize] = useState(18);
  const [selectedItem, setSelectedItem] = React.useState(null)
  const [open, setOpen] = useState(false)
  let noofparas=[];

  // const [no, setno] = useState('');
  // const router = useRouter();
  const handleClick = (item) => {
    alert(`You clicked on ${item}`)
  }
  useEffect(() => {
    var aTag = document.createElement('a');
    aTag.href=`#${params.id}`
    aTag.click();
 if (lang == "Telugu") {
  axios.get("/tel-mes.json").then((res) => {
    let data = res.data
   

    setBook(data.filter(element => element.bookTitle == tel));
  });
      } else if (lang == "English") {
        axios.get("/eng-mes.json").then((res) => {
          let data = res.data
         
    
          setBook(data.filter(element => element.bookTitle == eng));
        });
      }
      //  else if (lang == "Parallel") {
      //   data = res.data.Parallel
      // }
      setSelectedItem(para)
   
  }, [lang, fsize]);
  for(let i=1;i<=book.length;i++){
    noofparas.push(i);
  }
  // console.log(noofparas)

  return (
    <main className="">
      <Navbar />

      <div className="justify-center w-full">
       <div className="sticky top-0 flex shadow-lg bg-white flex-col md:flex-row w-full md:justify-items-start mb-5">
       <Link href={'/messages'}>
       <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="flex mt-4 ml-10 w-30 bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></Link>
       <div className="flex flex-col w-2/2 md:mx-auto md:flex-row md:justify-center">
          <form className="max-w-sm px-5 py-2 ">
            <label htmlFor="lang" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select A Language</label>
            <select onChange={(e) => setlang(e.target.value)} id="lang" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value={"Telugu"}>Telugu</option>
              <option value={"English"}>English</option>
              {/* <option value={"Parallel"}>Parallel</option> */}

            </select>
          </form>


              
 <h1 onClick={() => setOpen(true)} className="text-center text-2xl md:text-4xl font-semibold py-4">{lang=="Telugu"? tel:eng}</h1>

 <Modal open={open} onClose={() => setOpen(false)}>
 <div className="h-screen sticky top-0 mx-auto p-5 border rounded-2xl overflow-y-scroll flex flex-wrap gap-3">
  <h1 className="text-3xl font-semibold mb-5 text-center">{lang=="Telugu"? tel:eng}</h1>

  {
    noofparas.map(element=>
      <Link  href={`#${element-1}`} ><button onClick={()=>setSelectedItem(element-1)} className="box-content h-5 w-5 p-2 border-1 bg-blue-500 hover:bg-blue-700 text-white text-center font-bold rounded-full">{element}</button> </Link>
    )
  }

</div>
      </Modal>

          <form onSubmit={() => setfsize()} className="max-w-sm px-5 py-2">
            <label htmlFor="lang" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select A Text Size</label>
            <select onChange={(e) => setfsize(e.target.value)} onSubmit={(e) => setfsize(e.target.value)} id="lang" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option  value={18}>Small</option>
              <option value={24}>Medium</option>
              <option value={30}>Large</option>
              

            </select>
          </form>



        </div>
       </div>
      

        {
          book && book.map((ele,index) => (
            <>
             <ol>
          
               <li id={index+1} key={index} 
              //  onClick={() => handleClick(index+1)}
                  // onDoubleClick={()=>{
                  //   document.getElementById(index+1).className = 'px-5 py-2 text-white shadow-md rounded-xl border m-1 bg-blue-500'
                  // }} 
                  onClick={()=>{
                    setSelectedItem(index)
                   }}
                  style={{ backgroundColor: index === selectedItem ? 'yellow' : 'transparent' }}
                  
                  > {ele.bookContent.replaceAll('//10', '\n').split('\n').map(str => <p className={` px-5 py-2 text-lg shadow-md rounded-xl border m-1`} style={{ fontSize: `${fsize}px` ,
                lineHeight:fsize>=24?2:1.5} }     >{str}</p>)}</li>
             </ol>

            </>))
        }
        <ScrollToTop/>
      </div>
      <Footer />
    </main>
  )
}



export default Content