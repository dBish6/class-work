import { Link } from "react-router-dom";

// *Design Imports*
import blackRavenLogo from "../../../../assets/images/blackRavenLogo-DesignEvo.png";

const TopSpan = () => {
  return (
    <div className="topSpan">
      <div className="logoContainer">
        <Link to="/home">
          <img src={blackRavenLogo} alt="blackRavenLogo-DesignEvo.png" />
        </Link>
        <div>
          <p>Raven</p>
          <p>Blacksmith Co.</p>
        </div>
      </div>
      <Link to="/home/support">Contact Support</Link>
    </div>
  );
};

export default TopSpan;
