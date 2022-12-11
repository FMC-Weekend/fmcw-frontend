import { useState, useEffect } from 'react';
import Classes from './MenuItem.module.css';
import Fade from 'react-reveal/Fade';

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
      <a
        href={`#${itemName}`}
        onClick={handleClick}
        // className={true ? Classes.active : ""}
        aria-label={`Scroll to ${itemName}`}
        style={active ? { color: '#fcc907' } : { color: 'white' }}>
        <Fade bottom>
          <h1>{itemName}</h1>
        </Fade>
      </a>
    </li>
  );
}

export default MenuItem;
