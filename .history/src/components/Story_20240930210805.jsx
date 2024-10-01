import React from 'react';

const SToryDetails = ({ story }) => {

  const { name, photo_url, country, years_active } = artist;

  return (
    <div className="artist-card">
      <img
        className="image"
        src={photo_url}
        width="30%"
      />

      <div className="content">
        <h2 className="name">{name}</h2> 
        
        <p><strong>Country:</strong> {country}</p> 
        
        <p><strong>Years Active:</strong> {years_active}</p> 
      </div>
    </div>
  );
};

export default ArtistDetails;