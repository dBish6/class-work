// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *API Services Imports*
import FetchDaggers from "../../api_services/FetchDaggers";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const Daggers = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);
  const [daggers, loadingDaggers] = FetchDaggers();

  return (
    <main>
      <TopHeader />
      <ProductCard products={daggers} isLoading={loadingDaggers} />
    </main>
  );
};

export default Daggers;
