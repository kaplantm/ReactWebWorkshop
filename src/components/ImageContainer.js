function ImageContainer(props) {
  const {
    src,
    width,
    height,
    className,
    style,
    imageLabel,
    hiddenLabel,
    isHiddenByDefault
  } = props;

  const [isHidden, setIsHidden] = React.useState(isHiddenByDefault);

  // This is the function that will be called when a item in the selectorSet is chosen
  // It received the value of the selected item as a paramter called value
  // Then, in this function, we update the selectedValue state to the value of the clicked item
  // Updated state here causes react to re-render the page based on the new state
  const onClick = value => {
    setIsHidden(!isHidden);
  };

  if (isHidden) {
    return (
      <div
        className={"outline-light-thick-transparent margin-1"}
        onMouseUp={onClick}
      >
        {hiddenLabel || "Click here!"}
      </div>
    );
  } else {
    return (
      <div className={"flexColumn"} onMouseUp={onClick}>
        <img
          src={src}
          width={width}
          height={height}
          className={className || "outline-light-thick-transparent margin-1"}
          style={style}
        />
        {/* display a paragraph tag containing the label if there is a label passed into this component */}
        {imageLabel && (
          <p className="fontSize-small textCenter">{imageLabel}</p>
        )}
      </div>
    );
  }
}
