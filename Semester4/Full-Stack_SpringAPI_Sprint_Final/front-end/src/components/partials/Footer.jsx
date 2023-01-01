import { Link } from "react-router-dom";

// *Design Imports*
import "./partials.css";

const Footer = () => {
  return (
    <footer>
      <div className="columnContainer">
        <Link to="/home/support">Support</Link>|
        <Link to="/home/about">About</Link>|<Link>Terms</Link>|
        <Link>Privacy</Link>|<Link>Security</Link>
      </div>
      <div className="thankYouNote">
        <p>Thanks to DesignEvo.com for our Raven logo.</p>
        <p>Also, a special thanks to imgbb.com for hosting our images.</p>
      </div>
    </footer>
  );
};

export default Footer;
