import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  const [load, setload] = useState(false);
  const [post, setpost] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(null);

  async function fetchblog(page = 1,category,tag) {
    console.log(category,tag)
    let  baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs?page=`;
     setload(true);
         baseUrl = `${baseUrl}${page}`;
         
         if(category){
             baseUrl =  `${baseUrl}&category=${category}`;  
         }
         else if(tag){
             baseUrl =  `${baseUrl}&tag=${tag}`;
             
         }
         console.log(baseUrl);
    try {
      let response = await fetch(baseUrl);
      let data = await response.json();
      console.log(data)
      setpage(data.page);
      setpost(data.posts);
      settotalpage(data.totalPages);
    }
     catch (error) {
      console.log("Error in fetching data", error);
      setpage(0);
      setpost([]);
      settotalpage(null);
    }
    setload(false);
  }

  function handlenextpage(nextPage,cat,ta) {
    console.log(cat,ta)
    setpage(nextPage);
    fetchblog(nextPage,cat,ta);
  }

  const value = {
    load,
    setload,
    post,
    setpost,
    page,
    setpage,
    totalpage,
    settotalpage,
    fetchblog,
    handlenextpage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}


