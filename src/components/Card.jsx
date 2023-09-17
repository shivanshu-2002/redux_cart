import React from 'react';

const Card = (props) => {
  const data = props.card;
  const tags = data.tags;

  return (
    <div className="bg-white rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
      <img
        src={data.img} // Add the image URL as a prop in your data
        alt={data.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.content}</p>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {data.author}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {data.date}
        </span>
        <div className="mt-2"> {/* Added margin to the tag section */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 rounded-full px-2 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
