const [storyList, setStoryList] = useState(sampleNewsStories);

  const removeStory = (index) => {
    const updatedStories = storyList.filter((_, i) => i !== index);
    setStoryList(updatedStories);
  };

  return (
    <>
      <h1 className="heading">Latest Stories</h1>
      {storyList.map((story, index) => (
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
    </>
  );
};

export default App;