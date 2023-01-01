// *Design Imports*
import ravenFeathers from "../../assets/images/ravenFeathers-pngwing.com.png";
import Star from "@material-ui/icons/Star";

const RegisterWelcome = () => {
  return (
    <>
      <img src={ravenFeathers} alt="ravenFeathers-pngwing.com.png" />
      <div className="welcomePoints">
        <h1>Thank you for your Interest in our Swords</h1>
        <ul>
          <li>
            These swords are 100% professional forged by modern sword
            enthusiasts like yourself.
          </li>
          <li>Made here in Canada, Newfoundland.</li>
          <li>
            The swords are all replicas of preserved ancient swords, made new
            and 99.9% like the original.
          </li>
        </ul>
      </div>
      <div className="ratingsContainer">
        <div>
          <h4>Jamie Cornick</h4>
          <p>On the Zweihänder Sword</p>
          <div className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>"Woah, this sword is huge! I fell like a man holding it."</p>
          </div>
        </div>
        <div>
          <h4>Roy Brushett</h4>
          <p>On the Spatha Sword</p>
          <div className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>
              "Great reparation of a Roman sword! Pizza, pizza, pizza, pizza."
            </p>
          </div>
        </div>
        <div>
          <h4>Kennedy Azupwah</h4>
          <p>On the Odachi Sword</p>
          <div className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>"I am samurai."</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterWelcome;
