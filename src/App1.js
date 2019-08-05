function App1() {
  return (
    <div className="flexStart flexColumn textCenter alignCenter">
      <div className="padded-point5 margin-1 bg-dark-grey roundedCorners width-80">
        <p>
          You're using React! <br />
          <a href="https://reactjs.org/docs/getting-started.html#learn-react">
            React
          </a>
          {/* &nbsp; is the html entity for a non-breaking space (really, just a normal space)
          I'm just using it here since my VSCode is auto formatting wrong - its deleting the space between "React" and "is" */}
          &nbsp;is a Javascript library that makes it easier to make highly
          interactive websites using re-useable components. It is good a
          reacting to user input.
        </p>
        <p>
          With React we can use a syntax called JSX (its Javascript that looks a
          bit more like HTML) to modify the displayed HTML! That makes things
          easier too!
        </p>
      </div>
      <div className="flexStart">
        {/* Here we are using a custom component that makes it easy to add a label to an image. 
          It also adds a nicely spaced border. */}
        <ImageContainer
          src="assets/dog1.gif"
          label="This is Koda."
          hiddenLabel="click me"
          isHiddenByDefault={true}
        />
        <ImageContainer
          src="assets/dog2.gif"
          label="He isn't my dog."
          hiddenLabel="click me too"
          isHiddenByDefault={true}
        />
        <ImageContainer
          src="assets/dog3.gif"
          label="(Unfortunately)"
          hiddenLabel="and me"
          isHiddenByDefault={true}
        />
      </div>
    </div>
  );
}
