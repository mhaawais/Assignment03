import React from 'react'
import Link from 'next/link';
import next from 'next';
import Aboutuspage from './Aboutus/page';
import Contactuspage from './Contact/page';
import Portfoliopage from './Portfolio/page';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

export default function Home () {
  return (
  <div>
    <h1 className='bg-fuchsia-600	font-bold	border-x border-dashed rounded border-black	border-y mx-4 my-4 '>   My Website   </h1>

      <ul>

      <header /><p className='bg-yellow-400 text-red-800 mx-3 my-3'> This is a Header</p>

      <p className='bg-amber-950 border-pink-500 border-2 rounded-md border-collapse: collapse;'>   <a href="/Aboutus" target="_blank">About US</a>    </p>  
            
      <p className='bg-amber-950 border-red-500 border-2 rounded-md'>   <a href="/Contact" target="_blank">Contact</a>     </p>
    
      <p className='bg-amber-950 border-orange-500 border-2 rounded-md'>   <a href="/Portfolio" target="_blank">Portfolio</a>  </p>  
      
      </ul>
      <br />
      <footer />   <p className='bg-slate-400 text-center text-xs text-0.25'>  2024...All rights are reserved </p> 

  </div>
  );
}