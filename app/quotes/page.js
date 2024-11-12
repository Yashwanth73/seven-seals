'use client'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'


const Quotes = () => {
    const cheerio = require("cheerio");
    const axios = require("axios");
    const [title, settitle] = useState('')
    const [code, setcode] = useState('')
    const [quote, setquote] = useState("")
    // axios.get("https://branham.org/en/QuoteOfTheDay").then(
    //   (urlresponse)=>{
    //     const $ = cheerio.load(urlresponse)
        
    //     settitle($('span#summary').innerHTML)
    //     setcode($('span#title').innerHTML)
    //     setcode($('span#content').innerHTML)
    //   }
    // )
    // axios.get("https://branham.org/en/QuoteOfTheDay").then(
    //     (urlresponse)=>{
    //         const $ = cheerio.load(urlresponse)
    //         settitle($('span#summary').text())
    //         setcode($('span#title').text())
    //         setquote($('span#content').text())
    //         }
    //         )
    fetch("https://branham.org/en/QuoteOfTheDay")
    .then(response => response.text())
    .then(data => {
      const $ = cheerio.load(data);
      settitle( $("span#summary").text());
      setcode($('span#title').text())
              setquote($('span#content').text())
    })
    .catch(error => {
     console.log(error)
    });
  return (
    <main>
        <Navbar/>
        <h1 className='text-4xl text-center mt-10 from-stone-700'>Quotes of Branham</h1>
        <p>{title}</p>
        <p>{code}</p>
        <p>{quote}</p>
    </main>
  )
}

export default Quotes