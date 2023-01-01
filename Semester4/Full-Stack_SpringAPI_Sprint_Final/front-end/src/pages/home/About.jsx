// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Component Imports*
import TopHeader from "../../components/TopHeader";

const About = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);

  return (
    <main>
      <TopHeader />
    </main>
  );
};

export default About;
