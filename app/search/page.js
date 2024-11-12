'use client'
import axios from 'axios';
// import Footer from '@/components/footer'
// import Navbar from '@/components/navbar'
// import { serverHooks } from 'next/dist/server/app-render/entry-base'
// import  { useEffect, useState } from 'react'

// const Search = () => {

//     const [book, setbook] = useState('')
//     const [search, setsearch] = useState('')
//     const [lang, setlang] = useState("Telugu");
//     useEffect(() => {
      
//     searchItems("Hello")
     
//     }, [])
    

//     function searchItems(search) {
//         // if (lang == "Telugu") {
//         //     axios.get("/tel-mes.json").then((res) => {
//         //         let data = res.data


//         //         setBook(data.filter(element => element.bookContent <= search));
//         //     });
//         // } else if (lang == "English") {
//             axios.get("/eng-mes.json").then((res) => {
//                 let data = res.data

// console.log(data.filter(element => element.bookContent <= search))
//                 // setBook(data.filter(element => element.bookContent <= search));
//             });
//         // }
        
//     }
//     return (
//         <main>
//             <Navbar />
//             <div>

               

//             {/* {
//                 book && book.map((ele, index) => (
//                     <>
//                         <ol>

//                             <li id={index + 1} key={index}
//                                 //  onClick={() => handleClick(index+1)}
//                                 // onDoubleClick={()=>{
//                                 //   document.getElementById(index+1).className = 'px-5 py-2 text-white shadow-md rounded-xl border m-1 bg-blue-500'
//                                 // }} 
//                                 onClick={() => {
//                                     setSelectedItem(index)
//                                 }}
//                                 style={{ backgroundColor: index === selectedItem ? 'yellow' : 'transparent' }}

//                             > {ele.bookContent.replaceAll('//10', '\n').split('\n').map(str => <p className={` px-5 py-2 text-lg shadow-md rounded-xl border m-1`} style={{
//                                 fontSize: `${fsize}px`,
//                                 lineHeight: fsize >= 24 ? 2 : 1.5
//                             }}     >{str}</p>)}</li>
//                         </ol>

//                     </>))
//             } */}
//             </div>
//             <Footer />
//         </main>
//     )
// }

// export default Search
import React, { useState } from 'react'
import Link from 'next/link';
import Navbar from '@/components/navbar';


const SearchBarFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState("");
  const [lang, setlang] = useState("Telugu")


  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    // filterData(value);
  };

let limit = 100;
  const filterData = (searchTerm) => {
      if(lang=="Telugu"){
        axios.get("/tel-mes.json").then((res) => {
          let data = res.data
           const filteredData = data.filter((item) =>
              item.bookContent.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filteredData.slice(0, limit));
            console.log(filteredData)
          })
      }else{
        axios.get("/eng-mes.json").then((res) => {
          let data = res.data
           const filteredData = data.filter((item) =>
              item.bookContent.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filteredData.slice(0, limit));
            console.log(filteredData)
          })
      }
    
  };


  return (
    <div>
      <Navbar/>
    <div className="flex flex-col sticky top-0 bg-white mx-auto">
        <label htmlFor="search" className='text-center text-3xl my-5'> Search In All Messages </label>
        <form className="max-w-sm px-5 py-2 mx-auto">
                 <label htmlFor="lang" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select A Language</label>
                 <select onChange={(e) => setlang(e.target.value)} id="lang" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                   <option value={"Telugu"}>Telugu</option>
                   <option value={"English"}>English</option>
                 
     
                 </select>
               </form>
    <input
    name='search'
      className='border-2 w-1/2 px-2 py-2 rounded-xl mx-auto mb-5'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={()=>filterData(searchTerm)} className='w-24 mx-auto text-white px-3 py-2 rounded-lg bg-blue-500'>Search</button>

    </div>

     <div className="mx-10 h-dvh sticky top-0 p-5 border rounded-2xl overflow-y-scroll">
     <ul>
        {filteredData&& filteredData.map((item,index) => {
                let matches = item.bookContent.match(/(\d+)/);
             let textToSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
             let pattern = new RegExp(`${textToSearch}`,"gi");
        return  <Link  href={`/messagecontent?${lang=="Telugu"?'telugu':'english '}=${item.bookTitle}#${matches[0]}`}> <li className='p-5 border rounded-lg shadow-md' key={index}>
            <h1 className='text-2xl'>{item.bookTitle}</h1>
            <p dangerouslySetInnerHTML={{__html:item.bookContent.replace(pattern, match => `<mark>${match}</mark>`)}}></p>
          </li></Link>
})}
      </ul>
     </div>
    </div>
  );
};


export default SearchBarFilter;
