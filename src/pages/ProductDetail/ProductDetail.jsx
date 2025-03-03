import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { addCart, addWishList } from "../../Slice/ProductSlice";
import { toast, Bounce } from "react-toastify";
import Card from "../../components/Card/Card";
import Coupon from "../../assets/applycoupon.png";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId, category } = useParams(); // Get productId & category from URL
  const [singleProduct, setSingleProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // Store related products

  // back-button
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleAddCart = () => {
    if (isAuthenticated) {
      dispatch(addCart(singleProduct));

      toast.success(
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={singleProduct.Image}
            alt="Product"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <span>Added to Bag</span>
        </div>,
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          theme: "dark",
          transition: Bounce,
          className: "custom-toast",
        }
      );
    } else {
      toast.error("Login first", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // wishlist

  const handleAddWishlist = () => {
    dispatch(addWishList(singleProduct));
  };

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch(
          `https://ecommerceflaskapi.vercel.app/api/v1/${category}`
        );
        const data = await response.json();

        // Find the selected product by productId
        const selectedProduct = data.find(
          (p) => p["Unnamed: 0"] === Number(productId)
        );

        setSingleProduct(selectedProduct);
        window.scrollTo(0, 0);

        // Filter out the selected product from the list
        const related = data
          .filter((p) => p["Unnamed: 0"] !== Number(productId)) // Exclude current product
          .sort(() => 0.5 - Math.random()) // Shuffle randomly
          .slice(0, 10); // Take first 5 items

        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }

    fetchProductData();
  }, [productId, category]);

  if (!singleProduct) {
    return (
      <div className="loading-product">
        <h2>Loading product details...</h2>
      </div>
    );
  }

  return (
    <div className="parent-element">
      {/* back button */}
      <div className="back-button" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack className="back-arrow" />
      </div>
      {/* Main Product Detail */}
      <div className="single-product-container">
        <div className="left-single">
          <img
            src={singleProduct.Image}
            className="img-single"
            alt={singleProduct.Description}
          />
        </div>

        <div className="right-single">
          <h2 className="heading-single">{singleProduct.Brand}</h2>
          <p className="desc">{singleProduct.Description}</p>
          <div className="cart-rating">
            <div className="star">⭐⭐⭐⭐⭐</div>
            <div className="review">(123 reviews)</div>
          </div>
          <p className="single-price">{singleProduct.Price}</p>

          <div className="button-div">
            <button className="add-to-cart" onClick={handleAddCart}>
              Add to Cart
            </button>

            <button className="add-to-cart" onClick={handleAddWishlist}>
              Add to Wishlist
            </button>
          </div>

          <div className="coupon-div">
            <img src={Coupon} alt="" />
          </div>
        </div>
      </div>

      {/* Related Products Section */}

      <div className="related-con">
        <h1 className="related-heading">Related Products</h1>

        <div className="related-container">
          <div className="related-card-list">
            {relatedProducts.map((product) => (
              <Card
                key={product["Unnamed: 0"]}
                products={product}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <CateCategory /> */}
    </div>
  );
};

export default ProductDetail;
