import React from 'react';

const CardEpisode = ({ name, air_date, url }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg p-4 text-white shadow-md flex flex-col justify-between"
      style={{ width: '256px', height: '160px' }} // Tamaño fijo de 256x160 píxeles
    >
      <div>
        <h4 className="text-base font-semibold truncate">{name}</h4>
        <p className="text-xs text-gray-400 mt-1 truncate">Air Date: {air_date}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-xs truncate"
      >
        More Info
      </a>
    </div>
  );
};

export default CardEpisode;