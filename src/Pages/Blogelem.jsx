import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import Header from '../components/Header';
let baseUrl = 'https://codehelp-apis.vercel.app/api/get-blog';


const Blogelem = () => {
  const [blog, setblog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { load, setload } = useContext(AppContext)

  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setload(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("heybaby", data, data.relatedblogs)
      setblog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    }
    catch (error) {
      console.log("Error aagya in blog id wali call")
      setblog(null);
      setRelatedBlogs(null);
    }
    setload(false)
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])
  return (

    <div >
      <Header />
      <div>
        <div className='flex justify-center align-center'>
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Back 
        </button>
        </div>
        {
          load ? (<div><p>Loading</p></div>) : blog ? (
            <div>
              <div>
                <Card card={blog} />
              </div>
              <div className='flex justify-center '>
              <h1 className='text-3xl'>Related Articles</h1>
              </div>
              {
                relatedblogs.map((post) => (

                  <div key={post.id} className='m-2'>
                    <Card card={post} />
                  </div>
                ))
              }
            </div>
          ) : (<h1>No blog found</h1>)
        }
      </div>
    </div>
  )
}

export default Blogelem