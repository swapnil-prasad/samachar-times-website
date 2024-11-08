import React from 'react';
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [news, setNews] = useState([]);

  const filterNews = async(category)=>{
    let link = "";
    if(category && category !== "everything") {
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API}`;
    } else {
      link = `https://newsapi.org/v2/everything?q=keyword&apiKey=${import.meta.env.VITE_API}`;
    }
    const { data } = await axios.get(link);
    setNews(data.articles);
    console.log(data.articles);
  };

  useEffect(()=>{
   filterNews();
  }, []);
  return (
    <>
     <Navbar filterNews={filterNews}/>
     <Home news={news}/>
     <Footer/>
    </>
  );
};

export default App;