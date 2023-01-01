/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

/*
 * We will include our MenuItem Component
 */
import MenuItem from './MenuItem';

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'Top' generically references the top of the page
 */
const menuItems = {
  // sponsors: 0,
  sponsor_1: 0,
  sponsor_2: null,
  sponsor_3: null,
  sponsor_4: null,
  sponsor_5: null,
  sponsor_6: null,
  sponsor_7: null,
  sponsor_8: null,
  sponsor_9: null,
  sponsor_10: null,
  sponsor_11: null
};

const menuItemNames = {
  // sponsors: "Sponsors",
  sponsor_1: 'Convenors',
  sponsor_2: 'General Secretary',
  sponsor_3: 'Content Team',
  sponsor_4: 'Design',
  sponsor_5: 'Event',
  sponsor_6: 'Marketing',
  sponsor_7: 'Publicity',
  sponsor_8: 'Public Relations',
  sponsor_9: 'Social Media',
  sponsor_10: 'Tech',
  sponsor_11: 'Secretaries'
};

/*
 * Our menu component
 */
function Menu() {
  /*
   * Store the active menuItem in state to force update
   * when changed
   */
  const [activeItem, setActiveItem] = useState('sponsor_1');
  /*
   * The MutationObserver allows us to watch for a few different
   * events, including page resizing when new elements might be
   * added to the page (potentially changing the location of our
   * anchor points)
   * We also listen to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {
    setTimeout(getAnchorPoints, 1000);
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById('root'), {
      childList: true,
      subtree: true
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Programmatically determine where to set AnchorPoints for our Menu
   */
  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 80;
    // const viewPortHeight = Math.max(
    //   document.documentElement.clientHeight,
    //   window.innerHeight || 0
    // );

    for (const key in menuItems) {
      try {
        menuItems[key] = document.getElementById(key).getBoundingClientRect().top + curScroll;
      } catch (error) {
        console.log(error);
      }
    }
    console.log(menuItems);
    const bottom = document.body.offsetHeight;
    console.log(bottom);
    handleScroll();
  };

  /*
   * Determine which section the user is viewing, based on their scroll-depth
   * Locating the active section allows us to update our MenuItems to show which
   * item is currently active
   */
  const handleScroll = () => {
    const curPos = window.scrollY;
    // let curSection = "sponsor_1";
    // for (let i = 0; i < sections.length; i++) {
    //     if (curPos > sections[i][1] && curPos < sections[i+1][1]){
    //         curSection = sections[i][0];
    //         break;
    //     }
    // }
    // console.log(curSection);

    /*
     * Iterate through our sections object to find which section matches with
     * the current scrollDepth of the user.
     * NOTE: This code assumes that the sections object is built with an 'ordered'
     * list of sections, with the lowest depth (top) section first and greatest
     * depth (bottom) section last
     * If your items are out-of-order, this code will not function correctly
     */
    // console.log(menuItems);
    for (const section in menuItems) {
      // curSection = menuItems[section] >= curPos ? curSection : section;
      // console.log(menuItems);
      // console.log(curPos);
      // console.log(curSection);
      // break;
      // if (curSection !== section) {
      //     console.log(menuItems[section]);
      //     console.log(curPos);
      //   console.log(curSection);
      //   break
      // }

      if (menuItems[section] < curPos + 40) {
        // curSection = section;
        setActiveItem(section);
        console.log(section);
        console.log(menuItems);
        console.log(curPos);
        // break;
      } else if (menuItems[section] >= curPos) {
        break;
      }
    }
    // setActiveItem(curSection);
    // console.log(activeItem);
  };

  /*
   * Create the list of MenuItems based on the sections object we have defined above
   */
  const menuList = Object.keys(menuItems).map((e, i) => (
    <MenuItem
      itemName={menuItemNames[e]}
      anchorId={e}
      key={`menuitem_${i}`}
      active={e === activeItem}
      id="menu-item"
      sx={{ background: 'transparent' }}
    />
  ));

  /*
   * Return the JSX Menu, complete with nested MenuItems
   */
  return (
    <section>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="menu-list">
        {menuList}
      </ul>
    </section>
  );
}

export default Menu;
