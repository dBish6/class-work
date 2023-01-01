import { useSelector } from "react-redux";

// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

// *Selector Import*
import { selectSearchResults } from "../../redux/selectors";

const Search = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);
  const searchResults = useSelector(selectSearchResults);

  return (
    <main>
      <TopHeader />
      <ProductCard searchResults={searchResults} />
    </main>
  );
};

export default Search;
