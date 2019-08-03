function SelectorSet(props) {
  const { options, currentValue, onValueChange, spacing, label } = props;

  const getOptionBoxes = () => {
    // Map takes an array and transforms each element, returning a new array
    // In this case, we are taking in an array of options, and returning JSX to display that element on screen
    return options.map((option, index) => {
      const { label, value, style = {} } = option;

      // "currentValue" is the currently value of the currently selection item.
      // Here, we are checking if the current item is equal to the selected value.
      // If so, we add a CSS class to show the item is selected (the class adds a white border)
      const optionClassName =
        currentValue === value || (!currentValue && !index)
          ? "selectorSetOptionsActive"
          : "";

      return (
        <div
          className={optionClassName}
          key={`${label}${index}`}
          style={style}
          onMouseUp={() => onValueChange(value)} // When this item is clicked, we update the selectedValue state to the value of this item
        >
          {label}
        </div>
      );
    });
  };

  return (
    <div className="selectorSetContainer">
      <div className="selectorSetLabelContainer">{label}</div>
      <div className="selectorSetOptionsContainer">{getOptionBoxes()}</div>
    </div>
  );
}
