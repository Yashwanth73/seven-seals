'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Image from 'next/image';
import axios from "axios";
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const HomePage = () => {
    const [book, setBook] = useState("");

  useEffect(() => {

    axios.get("/seven_church_ages_en.json").then((res) => {

      setBook(res.data.Telugu);
    });
  }, []);
  const arr = [
    '/messengers/john7seals.jpg',
    '/messengers/john7seals.jpg',
    '/messengers/paul.jpg',
    '/messengers/ireneaus.jpg',
    '/messengers/luther.jpg',
    '/messengers/columba.jpg',
    '/messengers/martin.jpg',
    '/messengers/wesley.jpg',
    '/messengers/william.jpg',
    '/messengers/john7seals.jpg',
  ]
  return (
    <main className="">
      <Navbar/>
    <h1 className="text-center text-2xl md:text-5xl">Seven Church Ages</h1>
    
    <div className="w-1/2 flex mx-auto">
   <div className='mt-10 w-full mx-auto'>
      {book&&book.map((element,index)=>(
          <Link key={index} href={{pathname:'agescontent',query:{code:element.code}}}> 
      <div key={index} className="flex text-center border shadow-lg justify-center   rounded-2xl px-10 py-5 text-2xl mb-5 ">
          <p className='flex flex-col justify-center ' key={index}>
           {index+1} . {element.book}
          </p>
      </div>
          </Link>
      ))}
    </div>
   </div>
    <Footer/>
  </main>  )
}

export default HomePage