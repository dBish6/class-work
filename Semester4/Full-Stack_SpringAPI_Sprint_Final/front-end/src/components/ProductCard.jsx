import { useDispatch } from "react-redux";

// *Modal Import"
import ReadMoreModal from "./modals/ReadMoreModal";

// *Design Imports*
import noImage from "../assets/images/no-image.webp";
import ProductsSkeleton from "../skeletons/ProductsSkeleton";
import "./productCard.css";

// *Redux Action Import*
import { ADD_TO_CART } from "../features/shoppingCart/redux/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  if (props.searchResults) {
    console.log(props.searchResults);
    return (
      <div className="productGridContainer">
        {props.searchResults.map((sword) => {
          return (
            <div className="productContainer" key={sword.sword_id}>
              <div className="imageContainer">
                {!sword.image_url.includes("https") ? (
                  <img src={noImage} alt="no-image.webp" />
                ) : (
                  <img src={sword.image_url} alt="image_url" />
                )}
              </div>
              <div className="contentContainer">
                <h2 className={sword.name.length >= 13 ? "fontSize" : ""}>
                  {sword.name}
                </h2>
                <div>
                  <p className="description">{sword.description}</p>
                  <ReadMoreModal description={sword.description} />
                  <p className="readMore">Read More</p>
                </div>
                <hr />
                <div className="widthHeightContainer">
                  <p>
                    <span>Length:</span> {sword.length}in
                  </p>
                  <p>
                    <span>Mass:</span> {sword.mass} lbs
                  </p>
                </div>
                <div className="priceBuyNowContainer">
                  <p>${sword.price}</p>
                  <button onClick={() => dispatch(ADD_TO_CART(sword))}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="productGridContainer">
        {props.isLoading ? (
          <ProductsSkeleton />
        ) : (
          props.products &&
          props.products.map((sword) => {
            return (
              <div className="productContainer" key={sword.sword_id}>
                <div className="imageContainer">
                  {!sword.image_url.includes("https") ? (
                    <img src={noImage} alt="no-image.webp" />
                  ) : (
                    <img src={sword.image_url} alt="image_url" />
                  )}
                </div>
                <div className="contentContainer">
                  <h2 className={sword.name.length >= 13 ? "fontSize" : ""}>
                    {sword.name}
                  </h2>
                  <div>
                    <p className="description">{sword.description}</p>
                    <ReadMoreModal description={sword.description} />
                    <p className="readMore">Read More</p>
                  </div>
                  <hr />
                  <div className="widthHeightContainer">
                    <p>
                      <span>Length:</span> {sword.length}in
                    </p>
                    <p>
                      <span>Mass:</span> {sword.mass} lbs
                    </p>
                  </div>
                  <div className="priceBuyNowContainer">
                    <p>${sword.price}</p>
                    <button onClick={() => dispatch(ADD_TO_CART(sword))}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
};

export default ProductCard;
