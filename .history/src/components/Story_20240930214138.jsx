import React from 'react';

const Story = ({ title, link, creator, description, image_url, onRemove }) => {
  // Truncate description to a maximum of 300 characters
  const truncatedDescription = description && description.length > 300
    ? description.substring(0, 300) + '...'
    : description;

  return (
    <div className="card">
      <img 
        src={image_url ? image_url : 'https://placehold.co/300x200'} 
        alt={title} 
        className="image" 
      />
      <div className="content">
        <h2>{title}</h2>
        <p><strong>By:</strong> {creator && creator.length ? creator.join(', ') : 'Unknown'}</p>
        <p>{truncatedDescription ? truncatedDescription : 'No description available.'}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
        <br />
        <button onClick={onRemove} className="button">Remove Story</button>
      </div>
    </div>
  );
};

export default Story;
