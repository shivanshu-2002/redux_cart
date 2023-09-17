import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [load, setload] = useState(false);
  const [post, setpost] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(null);

  async function fetchblog(page = 1) {
    setload(true);
    try {
      let response = await fetch(`https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`);
      let data = await response.json();
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

  function handlenextpage(nextPage) {
    setpage(nextPage);
    fetchblog(nextPage);
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


