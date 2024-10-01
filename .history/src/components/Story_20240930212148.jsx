import React from 'react';

const Story = ({ title, link, creator, description, image_url, onRemove }) => (
  <div style={styles.card}>
    <img
      src={image_url ? image_url : "https://placehold.co/300x200"}
      alt={title}
      style={styles.image}
    />
    <div style={styles.content}>
      <h2>{title}</h2>
      <p>
        <strong>By:</strong>{" "}
        {creator && creator.length ? creator.join(", ") : "Unknown"}
      </p>
      <p>{description ? description : "No description available."}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <br />
      <button onClick={onRemove} style={styles.button}>
        Remove Story
      </button>
    </div>
  </div>
);
