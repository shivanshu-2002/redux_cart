import React from 'react'
import { FcLike ,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = ({course ,Likedcourses,setLikedCourses}) => {
   
  const clickHandler = () => {
    if (Likedcourses.includes(course.id)) {
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
        toast.warning("Like removed");
    } else {
        if (Likedcourses.length === 0) {
            setLikedCourses([course.id]); // Wrap course.id in an array
        } else {
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully!");
    }
    console.log("hey", Likedcourses);
};

  return (
    <div className='w-[300px] bg-slate-600 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url}></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-2 grid place-items-center'>
          <button onClick={clickHandler}>
            {
              Likedcourses.includes(course.id)?(
                <FcLike fontSize="1.75rem" />
              ):(
                <FcLikePlaceholder fontSize="1.75rem"/>
              )
            }
            
            
          </button>

        </div>

      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2 '>
        {
           course.description.length>100?(
            course.description.substr(0,100).concat('....')):
            (course.description)
        }
       
        </p>
      </div>

    </div>

  )
}

export default Card