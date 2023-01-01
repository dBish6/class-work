import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

// *Design Imports*
import { ExpandMore } from "@material-ui/icons";
import "./topHeader.css";

const TopHeader = () => {
  const [dropdown, toggleDropdown] = useState(false);
  const [dropdownArrow, toggleDropdownArrow] = useState(false);
  const flipRef = useRef(null);
  const location = useLocation();

  // Have the dropdown arrow at these locations.
  useEffect(() => {
    const mainPaths = [
      "/home",
      "/home/longSwords",
      "/home/shortSwords",
      "/home/daggers",
      "/home/maces",
    ];

    const ifPathIncludesMainPaths = () => {
      toggleDropdownArrow(mainPaths.includes(location.pathname));
    };
    ifPathIncludesMainPaths();
  }, [location.pathname]);

  return (
    <>
      <header className="topHeaderContainer">
        {location.pathname === "/home" ? (
          <h1>All Swords</h1>
        ) : location.pathname === "/home/longSwords" ? (
          <h1>Long Swords</h1>
        ) : location.pathname === "/home/shortSwords" ? (
          <h1>Short Swords</h1>
        ) : location.pathname === "/home/daggers" ? (
          <h1>Daggers</h1>
        ) : location.pathname === "/home/maces" ? (
          <h1>Maces</h1>
        ) : location.pathname === "/home/about" ? (
          <h1>About Us</h1>
        ) : location.pathname === "/home/support" ? (
          <h1>Support</h1>
        ) : location.pathname === "/home/search" ? (
          <h1>Search</h1>
        ) : (
          <h1>Error</h1>
        )}
        {dropdownArrow ? (
          <div>
            <ExpandMore
              className={dropdown ? "expandLess" : ""}
              ref={flipRef}
              onClick={() => {
                !flipRef.current.classList.contains("expandLess")
                  ? toggleDropdown(true)
                  : toggleDropdown(false);
              }}
            />
            <p>More Information</p>
          </div>
        ) : undefined}
      </header>
      {dropdown && (
        <div className="dropdownContainer">
          <div className="dropdown">
            <div className="dropdownContent">
              <h3>Background</h3>
              {location.pathname === "/home" ? (
                <p className="description">
                  A sword is an edged, bladed weapon intended for manual cutting
                  or thrusting. Its blade, longer than a knife or dagger, is
                  attached to a hilt and can be straight or curved. A thrusting
                  sword tends to have a straighter blade with a pointed tip. A
                  slashing sword is more likely to be curved and to have a
                  sharpened cutting edge on one or both sides of the blade. Many
                  swords are designed for both thrusting and slashing. The
                  precise definition of a sword varies by historical epoch and
                  geographic region. Historically, the sword developed in the
                  Bronze Age, evolving from the dagger; the earliest specimens
                  date to about 1600 BC. The later Iron Age sword remained
                  fairly short and without a crossguard. The spatha, as it
                  developed in the Late Roman army, became the predecessor of
                  the European sword of the Middle Ages, at first adopted as the
                  Migration Period sword, and only in the High Middle Ages,
                  developed into the classical arming sword with crossguard.
                </p>
              ) : location.pathname === "/home/longSwords" ? (
                <p className="description">
                  The term long sword comes from europe. The term was prevalent
                  during the late medieval and Renaissance periods
                  (approximately 1350 to 1550), with early and late use reaching
                  into the 12th and 17th centuries. The long sword has a
                  straight double-edged blade of around 80 to 110 cm (31 to 43
                  in) with a grip for primarily two-handed use around 15 to 30
                  cm (6 to 12 in).
                </p>
              ) : location.pathname === "/home/shortSwords" ? (
                <p className="description">
                  Throughout history, short swords served as secondary weapons
                  most of the time and symbols of rank and prestige. Almost
                  every culture has its own version of a short sword, which
                  served as a sidearm and backup weapon for the long sword and
                  was more efficient in close quarters combat.
                </p>
              ) : location.pathname === "/home/daggers" ? (
                <p className="description">
                  A dagger is a fighting knife with a very sharp point and
                  usually two sharp edges, typically designed or capable of
                  being used as a thrusting or stabbing weapon. Designed for
                  close combat but was also often for ceremonial and sacrificial
                  practices.
                </p>
              ) : location.pathname === "/home/maces" ? (
                <p className="description">
                  This bludgeon weapon evolving from a club has a heavy head
                  attached to the end of a handle. Alternate designs adapted the
                  use of flanges, knobs or spikes depending on the intended
                  purpose. The length of maces varied greatly. The shorter of
                  around 24-36 inches were used for hand to hand combat and the
                  longer versions were used from horseback.
                </p>
              ) : undefined}
              <div className="sincerely">
                <p>Sincerely, Wikipedia</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
