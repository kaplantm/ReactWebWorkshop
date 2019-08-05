function ImageContainer(props) {
  const { src, width, height, className, style, label } = props;

  return (
    <div className={"flexColumn"}>
      <img
        src={src}
        width={width}
        height={height}
        className={className || "outline-light-thick-transparent margin-1"}
        style={style}
      />
      {/* display a paragraph tag containing the label if there is a label passed into this component */}
      {label && <p className="fontSize-small textCenter">{label}</p>}
    </div>
  );
}
