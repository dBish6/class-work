// *Custom Hooks*
import useDocumentTitle from "../../hooks/useDocumentTitle";

// *API Services Imports*
import FetchAllSwords from "../../api_services/FetchAllSwords";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const Home = (props) => {
  useDocumentTitle(`Raven | ${props.title}`);
  const [products, loadingProduct] = FetchAllSwords();

  return (
    <main>
      <TopHeader />
      <ProductCard products={products} isLoading={loadingProduct} />
    </main>
  );
};

export default Home;
