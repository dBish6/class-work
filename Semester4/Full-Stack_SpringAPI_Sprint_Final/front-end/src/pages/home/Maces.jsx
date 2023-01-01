// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *API Services Imports*
import FetchMaces from "../../api_services/FetchMaces";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const ShortMaces = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);
  const [maces, loadingMaces] = FetchMaces();

  return (
    <main>
      <TopHeader />
      <ProductCard products={maces} isLoading={loadingMaces} />
    </main>
  );
};

export default ShortMaces;
