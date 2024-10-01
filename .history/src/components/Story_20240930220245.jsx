import React from 'react';

const Story = ({ title, link, creator, description, image_url, onRemove }) => {
  const truncatedDescription = description && description.length > 300
    ? description.substring(0, 300) + '...'
    : description;

  return (
    <div className="card">
      <button onClick={onRemove} className="button">x</button>

      <img 
        src={image_url ? image_url : 'https://placehold.co/600x400?text=Story+Image'} 
        alt={title} 
        className="image" 
      />
      <div className="content">
        <a className="titlehref={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>{title}</h2>
        </a>        
        <p><strong>By:</strong> {creator && creator.length ? creator.join(', ') : 'Unknown'}</p>
        <p>{truncatedDescription ? truncatedDescription : 'No description available.'}</p>
      </div>
    </div>
  );
};

export default Story;
