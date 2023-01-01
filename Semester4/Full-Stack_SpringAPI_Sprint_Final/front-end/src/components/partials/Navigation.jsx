import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// *API Services Imports*
import SearchSword from "../../api_services/SearchSword";
import PostUsers from "../../features/authentication/api_services/PostUsers";

// *Modal Import"
import PasswordModal from "../modals/PasswordModal";

// *Design Imports*
import blackRavenLogo from "../../assets/images/blackRavenLogo-DesignEvo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartTwoTone";
import "./partials.css";

// *Selector Imports*
import { selectProducts } from "../../features/shoppingCart/redux/selectors";
import { selectCurrentUserSession } from "../../features/authentication/redux/selectors";

const Navigation = () => {
  const [isClickedFirstLink, toggleIsClickedFirstLink] = useState(false);
  const [isClickedSecondLink, toggleIsClickedSecondLink] = useState(false);
  const [isClickedThirdLink, toggleIsClickedThirdLink] = useState(false);

  const [isClickedLongSwords, toggleIsClickedLongSwords] = useState(false);
  const [isClickedShortSwords, toggleIsClickedShortSwords] = useState(false);
  const [isClickedDaggers, toggleIsClickedDaggers] = useState(false);
  const [isClickedMaces, toggleIsClickedMaces] = useState(false);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  const searchProduct = SearchSword();

  const cartItems = useSelector(selectProducts);

  const userSession = useSelector(selectCurrentUserSession);
  const { postLogout } = PostUsers();

  // Stops bottom links from being active when the user clicks on the top bar links.
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/about" ||
      location.pathname === "/home/support"
    ) {
      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);
    }

    // Top Bar Links
    if (location.pathname === "/home") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      // Show footer or not show footer.
      document.querySelector("footer").style = "display: table";
    } else if (location.pathname === "/home/about") {
      toggleIsClickedFirstLink(false);
      toggleIsClickedSecondLink(true);
      toggleIsClickedThirdLink(false);

      document.querySelector("footer").style = "display: none";
    } else if (location.pathname === "/home/support") {
      toggleIsClickedFirstLink(false);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(true);

      document.querySelector("footer").style = "display: none";
    }
    // Bottom Bar Links
    else if (location.pathname === "/home/longSwords") {
      // Keeps sword tab active when user clicks on bottom links for certain swords.
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(true);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);

      document.querySelector("footer").style = "display: table";
    } else if (location.pathname === "/home/shortSwords") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(true);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);

      document.querySelector("footer").style = "display: table";
    } else if (location.pathname === "/home/daggers") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(true);
      toggleIsClickedMaces(false);

      document.querySelector("footer").style = "display: table";
    } else if (location.pathname === "/home/maces") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(true);

      document.querySelector("footer").style = "display: table";
    } else if (location.pathname === "/home/search") {
      toggleIsClickedFirstLink(true);
      toggleIsClickedSecondLink(false);
      toggleIsClickedThirdLink(false);

      toggleIsClickedLongSwords(false);
      toggleIsClickedShortSwords(false);
      toggleIsClickedDaggers(false);
      toggleIsClickedMaces(false);

      document.querySelector("footer").style = "display: none";
    } else {
      document.querySelector("footer").style = "display: none";
    }
  }, [location.pathname]);

  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <NavLink to="/home">
          <img src={blackRavenLogo} alt="blackRavenLogo-DesignEvo.png" />
        </NavLink>
        <div>
          <p>Raven</p>
          <p>Blacksmith Co.</p>
        </div>
      </div>
      <div className="barsContainer">
        <div className="topBar">
          <div>
            <NavLink
              to="/home"
              className={isClickedFirstLink ? "activateLink" : ""}
            >
              Swords
            </NavLink>
            <NavLink
              to="/home/about"
              className={isClickedSecondLink ? "activateLink" : ""}
            >
              About
            </NavLink>
            <NavLink
              to="/home/support"
              className={isClickedThirdLink ? "activateLink" : ""}
            >
              Support
            </NavLink>
          </div>
          <div className="topBarRight">
            <PasswordModal />
            {userSession ? (
              <NavLink onClick={(e) => postLogout(e)}>Log Out</NavLink>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <p>|</p>
                <NavLink to="/register">Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
        <div className="bottomBar">
          <div>
            <NavLink
              to="/home/longSwords"
              className={isClickedLongSwords ? "activeLink" : ""}
            >
              Long Swords
            </NavLink>
            <NavLink
              to="/home/shortSwords"
              className={isClickedShortSwords ? "activeLink" : ""}
            >
              Short Swords
            </NavLink>
            <NavLink
              to="/home/daggers"
              className={isClickedDaggers ? "activeLink" : ""}
            >
              Daggers
            </NavLink>
            <NavLink
              to="/home/maces"
              className={isClickedMaces ? "activeLink" : ""}
            >
              Maces
            </NavLink>
          </div>
          <div className="bottomBarRight">
            <form onSubmit={handleSubmit(() => searchProduct(watch("search")))}>
              <input
                {...register("search")}
                type="text"
                name="search"
                placeholder="Search by Name"
                autoComplete="off"
              />
            </form>
            <div
              className={
                cartItems.length
                  ? "cartIconContainer cartIconContainerIfCartItem"
                  : "cartIconContainer"
              }
            >
              <ShoppingCartIcon onClick={() => navigate("/cart")} />
              {cartItems.length ? <small>{cartItems.length}</small> : undefined}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
