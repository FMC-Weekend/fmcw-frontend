import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { useState, useEffect } from 'react';
import Classes from './MenuItem.module.css';

function MenuItem({ anchorId, itemName, active }) {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(anchorId));
  }, [anchorId]);

  function handleClick(e) {
    e.preventDefault();
    // anchorTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    const yOffset = -90;
    const y = anchorTarget.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    // const yOffset = 0;
    // const y = anchorTarget.getBoundingClientRect().top + yOffset;
    // window.scrollTo({ top: y, behavior: "smooth" });

    //   window.scrollBy(0, -10);
  }

  return (
    <li>
    <Bounce bottom>
      <a
        href={`#${itemName}`}
        onClick={handleClick}
        // className={true ? Classes.active : ""}
        aria-label={`Scroll to ${itemName}`}
        style={active ? { color: '#fcc907' } : { color: 'white' }}>
        <h1>{itemName}</h1>
      </a>
      </Bounce>
    </li>
  );
}

export default MenuItem;
