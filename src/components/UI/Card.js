import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className; /* So now anything we receive as a class name from outside is added to that string. */

  return <div className={classes}>{props.children}</div>; /* by using {props.children} we can now use other components in between our Card components  */
};

export default Card;

/* 
For built-in HTML elements, like the div or the h2 tag. We can write in between them but for custom HTML Components React has a solution. We accept props and we will use one special prop which is built into React, which every component receives, even if you're never setting it explicitly. It's the children prop. children is a reserved name and the value of this special children prop will always be the content between the opening and closing tags of your custom component.
*/