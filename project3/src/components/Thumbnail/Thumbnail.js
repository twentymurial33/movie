import React from "react";


// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Thumbnail = props => (
  <div
    className="thumbnail"
    role="img"
    aria-label="Movie Image"
    style={{
      backgroundImage: `url(${props.src})`
    }}
  />
);

export default Thumbnail;