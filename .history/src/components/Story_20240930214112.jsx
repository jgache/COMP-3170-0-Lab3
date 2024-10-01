import React from 'react';

const Story = ({ title, link, creator, description, image_url, onRemove }) => (
  <div style={styles.card}>
    <img 
      src={image_url ? image_url : 'https://placehold.co/300x200'} 
      alt={title} 
      style={styles.image} 
    />
    <div style={styles.content}>
      <h2>{title}</h2>
      <p><strong>By:</strong> {creator && creator.length ? creator.join(', ') : 'Unknown'}</p>
      <p>{description ? description : 'No description available.'}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read more</a>
      <br />
      <button onClick={onRemove} style={styles.button}>x</button>
    </div>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    display: 'flex',
    alignItems: 'flex-start',
  },
  image: {
    width: '150px',
    height: 'auto',
    marginRight: '16px',
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Story;
