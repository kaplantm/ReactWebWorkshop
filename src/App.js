function App() {
  // Declare a new state variable, which we'll call "selectedValue"
  // This value will be linked to the "I feel..." selectorSet
  // Normally you'd call this something like selectedEmotionValue to be more descriptive
  // But I'm keeping it vague since you may choose to change this to something other than emotions
  const [selectedValue, setSelectedValue] = React.useState();

  // This is the function that will be called when a item in the selectorSet is chosen
  // It received the value of the selected item as a paramter called value
  // Then, in this function, we update the selectedValue state to the value of the clicked item
  // Updated state here causes react to re-render the page based on the new state
  const onSelectedValueChange = value => {
    setSelectedValue(value);
  };

  function getScreenContentForSelectedValue() {
    if (selectedValue === "Confused") {
      return (
        <div className="flexStart">
          {/* Here we are using a custom component that makes it easy to add a label to an image. 
          It also adds a nicely spaced border. */}
          <ImageContainer src="src/assets/dog1.gif" label="This is Koda." />
          <ImageContainer src="src/assets/dog2.gif" label="He isn't my dog." />
          <ImageContainer src="src/assets/dog3.gif" label="(Unfortunately)" />
        </div>
      );
    } else if (selectedValue === "Sad") {
      // Using the HTML paragraph tag
      return <p className="fontSize-small">oof.</p>;
    } else if (selectedValue === "Hungry") {
      return (
        <div className="flexCenter flexColumn">
          {/* Using the HTML image tag - since we don't need a border or label */}
          <img
            src="src/assets/shrimpNagiri.svg"
            width="200"
            className="animated-rotate-forever"
          />
          {/* embedding a youtube video */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CP1LnBij7gU?mute=1&autoplay=true&controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>
            This was one of the first games I ever programmed in Javascript!
          </p>
        </div>
      );
    } else if (selectedValue === "Mysterious") {
      return (
        // this sound file is from https://freesound.org/people/TheZero/sounds/390534/
        // it is published under a Creative Commons CC0 license that allows to commercial and non-commercial use in the public domain
        // for more info about creative commons copyright https://en.wikipedia.org/wiki/Creative_Commons_license#Seven_regularly_used_licenses
        <div>
          {/* Using the HTML audio tag */}
          <audio autoPlay src="src/assets/creepySound.wav">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <ImageContainer src="src/assets/frog.jpeg" />
        </div>
      );
    }
  }

  return (
    <div className="flexCenter flexColumn">
      {/* SelectorSet is a custom component I created. Here we pass in properties that tell 
      this instance of the component how to display and function */}
      <div>
        <SelectorSet
          label="I feel..."
          gradient
          options={[
            {
              label: "Confused",
              value: "Confused",
              style: { backgroundColor: "hsla(206, 37%, 45%, 1)" }
            },
            {
              label: "Sad",
              value: "Sad",
              style: { backgroundColor: "hsla(197, 44%, 59%, 1)" }
            },
            {
              label: "Hungry",
              value: "Hungry",
              style: { backgroundColor: "hsla(155, 38%, 60%, 1)" }
            },
            {
              label: "Mysterious",
              value: "Mysterious",
              style: { backgroundColor: "hsla(12, 100%, 66%, 1)" }
            }
          ]}
          currentValue={selectedValue}
          onValueChange={onSelectedValueChange}
        />
      </div>
      <div className="flexGrow-1 flexCenter">
        {getScreenContentForSelectedValue()}
      </div>
    </div>
  );
}
