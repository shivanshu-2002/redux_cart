import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

const Pagination = () => {
  const { load, post } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4">
      {load ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div className="text-center text-red-500 font-bold text-xl">
          No Posts Found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {post.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pagination;
