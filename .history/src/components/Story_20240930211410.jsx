import React from 'react';

const SToryDetails = ({ story }) => {

  const { photo_urltitle, link, creator, description } = story;

  return (
    <div className="story-card">
      <img
        className="image"
        src={photo_url}
        width="30%"
      />

      <div className="content">
        <h2 className="name">{title}</h2> 
        
        <p><strong>Country:</strong> {country}</p> 
        
        <p><strong>Years Active:</strong> {years_active}</p> 
      </div>
    </div>
  );
};

export default ArtistDetails;