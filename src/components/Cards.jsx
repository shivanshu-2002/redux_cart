import { useState } from 'react';
import Card from './Card'
const Cards = ({ apiData, category }) => {

  const [Likedcourses, setLikedCourses] = useState([]); //in start no course  is like 

 
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(apiData).forEach((courseCategory) => {
        if (!Array.isArray(courseCategory)) { 
          console.error("apiData category is not an array.");
          return [];
        }
        courseCategory.forEach((courses) => {
          allCourses.push(courses);
        });
      });
  
      return allCourses;

    } else {
      return apiData[category];
    }
  };
  
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((courses) => {
          return (<Card course={courses}
            Likedcourses={Likedcourses}
            setLikedCourses={setLikedCourses}
          />)
        })
      }
    </div>
  )
}

export default Cards