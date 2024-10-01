import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story'; 

function App() {
  // Get stories from news feed
  const initialStories = news_feed.results;
  const [stories, setStories] = useState(initialStories); 

  const removeStory = (index) => {
    const updatedStories = stories.filter((_, i) => i !== index);
    setStories(updatedStories);
  };

  return (
    <div className="App">
      <h1 className="heading">Latest NEWS Feet</h1>
      {stories.map((story, index) => (
        <Story
          key={index} 
          title={story.title}
          link={story.link}
          creator={story.creator}
          description={story.description}
          image_url={story.image_url}
          onRemove={() => removeStory(index)}
        />
      ))}
    </div>
  );
}

export default App;