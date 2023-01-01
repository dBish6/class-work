// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *API Services Imports*
import FetchShortSwords from "../../api_services/FetchShortSwords";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const ShortSwords = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);
  const [shortSwords, loadingShortSwords] = FetchShortSwords();

  return (
    <main>
      <TopHeader />
      <ProductCard products={shortSwords} isLoading={loadingShortSwords} />
    </main>
  );
};

export default ShortSwords;
