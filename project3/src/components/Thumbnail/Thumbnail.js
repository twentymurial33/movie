import React from "react";


// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Thumbnail = props => (
  <img
    style={{maxWidth: '100%'}}
    className="thumbnail"
    role="img"
    aria-label="Movie Image"
    src={`https://image.tmdb.org/t/p/w500/${props.src}`}
  />
);

export default Thumbnail;