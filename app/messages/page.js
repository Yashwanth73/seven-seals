'use client'
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const MessagesPage = () => {
  const [year, setyear] = useState("");
  // const [paranos, setparanos] = useState("");
  // const [teltitle, setteltitle] = useState("");
  // const [engtitle, setengtitle] = useState("");
  const [books, setbooks] = useState("");
  const [selectedYear, setselectedYear] = React.useState(null)
  // const [selectedBook, setselectedBook] = React.useState(null)
  // let noofparas = [];

  useEffect(() => {

    axios.get("/books.json").then((res) => {
      let data = res.data;
      setyear(data);

      fetchyears("year1")
      // fetchbooks("47-0412 విశ్వాసమే నిజస్వరూపము","47-0412 Faith Is The Substance")
    });
  }, []);
  function fetchyears(name) {
    axios.get("/books.json").then((res) => {

      setbooks(res.data.filter(element => element.name == name));
    })
    setselectedYear(name)
  }
  // function fetchbooks(tel, eng) {
  //   axios.get("/tel-mes.json").then((res) => {

  //     setparanos(res.data.filter(element => element.bookTitle == tel));
  //   })
  //   setteltitle(tel)
  //   setengtitle(eng)
  //   setselectedBook(tel)
    
  // }
  // for (let i = 1; i <= paranos.length; i++) {
  //   noofparas.push(i);
  // }

  return (
    <main className="">
      <Navbar />
     
       <h1 className="text-center text-2xl md:text-5xl">Messages</h1>
      

      <div className="flex w-full justify-between min-h-screen ">
        <div className='mt-10 w-1/4 h-screen sticky top-0 mx-auto p-5 border rounded-2xl overflow-y-scroll'>
          <div>
            <ul>
              {year && year.map((element, index) => (
                <li key={index} style={{ backgroundColor: element.name === selectedYear ? 'yellow' : 'transparent' }} onClick={() => fetchyears(element.name)} className="flex bg-white text-center justify-center rounded-2xl border px-10 py-5 text-2xl mb-5 shadow-md " >
                  {element.alter}
                </li>
              ))}</ul>
          </div>

        </div>
        <div className='mt-10 w-1/2 h-screen sticky top-0 mx-auto p-5 border rounded-2xl overflow-y-scroll'>
          {books && books.map((element, index) => (
            <ol>
              {
                <li key={index}>{element.item.map((item, index) => (
                  <Link href={{pathname: `messagecontent`, query: { telugu: item.telugu, english: item.english,}}}>

                  <div key={index} 
                  // style={{
                  //   backgroundColor: item.telugu === selectedBook ? 'yellow' : 'transparent',
                  // }}
                    className="flex bg-white text-center justify-center rounded-2xl border px-10 py-5 text-2xl mb-5 shadow-md ">
                    <li key={index}
                      // onClick={() => 
                      //   fetchbooks(item.telugu,item.english)

                      // }
                    >{item.telugu}</li>
                  </div>
                  </Link>
                ))}</li>
              }
            </ol>
          ))}

        </div>
        {/* <div className='mt-10 w-1/6 h-screen sticky top-0 mx-auto p-5 border rounded-2xl overflow-y-scroll'>
          <div>
            <ul>
              {noofparas.map(element =>
                <Link href={{ pathname: `messagecontent`, query: { telugu: teltitle, english: engtitle, para: element } }} ><button className="box-content h-5 w-5 p-2 border-1 bg-blue-500 hover:bg-blue-700 text-white text-center font-bold rounded-full">{element}</button> </Link>
              )}</ul>
          </div>

        </div> */}
      </div>
      <Footer />
    </main>)
}

export default MessagesPage