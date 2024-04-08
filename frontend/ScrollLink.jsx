// ScrollLink.js

import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ to, spy, smooth, offset, duration, children }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
      className="cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
