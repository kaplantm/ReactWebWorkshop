function App() {
  // Declare a new state variable, which we'll call "selectedValue"
  // This value will be linked to the "I feel..." selectorSet
  // Normally you'd call this something like selectedEmotionValue to be more descriptive
  // But I'm keeping it vague since you may choose to change this to something other than emotions
  const [selectedValue, setSelectedValue] = React.useState("Happy");

  // This is the function that will be called when a item in the selectorSet is chosen
  // It received the value of the selected item as a paramter called value
  // Then, in this function, we update the selectedValue state to the value of the clicked item
  // Updated state here causes react to re-render the page based on the new state
  const onSelectedValueChange = value => {
    // Why is this function defined differently than other function? See "Arrow Functions" in the readMe
    setSelectedValue(value);
  };

  function getScreenContentForSelectedValue() {
    if (selectedValue === "Happy") {
      return <h1>That's good.</h1>;
    } else if (selectedValue === "Sad") {
      return <p>oof.</p>;
    } else if (selectedValue === "Tired") {
      return <h1>zzzzzz</h1>;
    } else if (selectedValue === "Mysterious") {
      return <h1>???</h1>;
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
              label: "Happy",
              value: "Happy",
              style: { backgroundColor: "hsla(206, 37%, 45%, 1)" }
            },
            {
              label: "Sad",
              value: "Sad",
              style: { backgroundColor: "hsla(197, 44%, 59%, 1)" }
            },
            {
              label: "Tired",
              value: "Tired",
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
