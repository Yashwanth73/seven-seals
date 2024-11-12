'use client'
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const HomePage = () => {
    const [book, setBook] = useState("");

  useEffect(() => {

    axios.get("/seven-seals-en.json").then((res) => {

      setBook(res.data.Telugu);
    });
  }, []);
  const handleClick = (event) => {
    const itemId = event.target;
    console.log(`Clicked item with ID: ${itemId}`);
  };
  return (
    <main className="">
      <Navbar/>
    <h1 className="text-center text-2xl md:text-5xl">Seven Seals</h1>
    
   <div className="w-1/2 mx-auto">
   <div className='mt-10 w-full mx-auto'>
      {book&&book.map((element,index)=>(
          <Link key={index} href={{pathname:'sealscontent',query:{code:element.code}}}> 
      <div key={index} className="flex text-center justify-center rounded-2xl border px-10 py-5 text-2xl mb-5 shadow-md ">
          <p key={index}>{index+1} . {element.book}</p>
      </div>
          </Link>
      ))}
    </div>
   </div>
    <Footer/>
  </main>  )
}

export default HomePage