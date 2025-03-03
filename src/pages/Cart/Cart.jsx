import React, { useState, useRef } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { updateCartQuantity } from "../../Slice/ProductSlice";
import { IoClose } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { removeCart } from "../../Slice/ProductSlice";
import { Bounce } from "react-toastify";
import OurPolicy from "../../components/Policy/OurPolicy";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ApplyCouponBanner from "../../assets/applycoupon.png";
import { toast } from "react-toastify";

const Cart = () => {
  const refcoupon = useRef();
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.productInfo.cart);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // back-button
  const navigate = useNavigate();

  //Close cart button
  const handleCloseCart = () => {};

  const totalPrice = cartdata.reduce(
    (sum, item) =>
      sum +
      (parseFloat(item.Price.replace(/[^0-9.]/g, "")) || 0) *
        (item.quantity || 1),
    0
  );

  const handleApplyCoupon = () => {
    refcoupon.current.focus();

    if (coupon === "SLAYMART5#") {
      setDiscount(20);

      Swal.fire({
        icon: "success",
        title: "Coupon Applied!",
        text: "₹20 discount has been added.",
        confirmButtonColor: "#3085d6",
      });
    } else {
      setDiscount(0);

      Swal.fire({
        icon: "error",
        title: "Invalid Coupon",
        text: "Please enter a valid coupon code.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const handlePlaceOrder = () => {
    const address = document.querySelector("#address").value;

    if (!address) {
      Swal.fire({
        icon: "warning",
        title: "Missing Address",
        text: "Please enter your address before placing the order.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    const productBrands = cartdata.map((item) => item.Brand).join(", ");

    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully!",
      html: `
        <div style="text-align: left; font-size: 14px; padding: 10px; border-radius: 10px;">
          <p><b>📍 Delivery Address:</b> ${address}</p>
          <p><b>🛍️ Products:</b> ${productBrands}</p>
          <p><b>💰 Total Price:</b> ₹${totalPrice - discount}</p>
        </div>
      `,
      confirmButtonColor: "#3085d6",
      width: "400px",
    });
  };

  return (
    <div className="parent-element">
      <div className="back-button" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack className="back-arrow" />
      </div>

      <div className="add-to-bag">
        {cartdata.length > 0 && (
          <div className="banner-coupon">
            <img src={ApplyCouponBanner} alt="" />
          </div>
        )}

        {cartdata.length > 0 ? (
          <div className="cart-con">
            {/* Left side */}

            <div className="cart-subleft">
              {cartdata.map((cart, i) => (
                <div className="cart" key={i + 1}>
                  <div className="cart-img">
                    <img src={cart.Image} alt="" />
                  </div>

                  <div className="cart-data">
                    <div
                      className="close-btn"
                      onClick={() => {
                        dispatch(removeCart(cart["Unnamed: 0"]));
                        toast.success("Item removed SuccessFully", {
                          position: "top-right",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Bounce,
                          className: "custom-toast",
                        });
                      }}
                    >
                      <IoClose />
                    </div>

                    <div className="cart-title">{cart.Brand}</div>

                    <div className="cart-desc">{cart.Description}</div>
                    <div className="cart-rating">
                      <div className="star">⭐⭐⭐⭐⭐</div>
                      <div className="review">(123 reviews)</div>
                    </div>

                    {/* size */}
                    <div className="size">
                      <select>
                        <option value="" disabled selected>
                          Select Size
                        </option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>

                    {/* count */}
                    <div className="count">
                      <div
                        className="Increment"
                        onClick={() =>
                          dispatch(
                            updateCartQuantity({
                              id: cart["Unnamed: 0"],
                              quantity: cart.quantity + 1,
                            })
                          )
                        }
                      >
                        <FaPlus />
                      </div>
                      <div className="product-count">{cart.quantity}</div>
                      <div
                        className="Decrement"
                        onClick={() =>
                          cart.quantity > 1 &&
                          dispatch(
                            updateCartQuantity({
                              id: cart["Unnamed: 0"],
                              quantity: cart.quantity - 1,
                            })
                          )
                        }
                      >
                        <FaMinus />
                      </div>
                    </div>

                    <div className="cart-price">
                      ₹{parseFloat(cart.Price.replace(/[^0-9.]/g, ""))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="cart-subright">
              {/* address div */}
              <div className="address-div">
                <div className="add-label">
                  <label>Add Address:</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your Address "
                  />
                </div>

                <div className="check">
                  <input
                    type="checkbox"
                    className="check"
                    name="default"
                    id="default"
                  />
                  <label htmlFor="default">Set as Default</label>
                </div>
              </div>

              {/* coupon div */}
              <div className="coupon-div">
                <div className="coupon-label">
                  <label>Apply Coupon:</label>
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Add coupon code"
                    ref={refcoupon}
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                </div>
              </div>

              {/* total price */}
              <div className="price">
                <div className="price-details">
                  PRICE DETAILS ({cartdata.length}Items)
                </div>

                <div className="mrp">
                  <span className="s1">Total MRP</span>
                  <span className="s2">₹{totalPrice}</span>
                </div>

                <div className="coupon-dis">
                  <span>Coupon Discount</span>
                  <span
                    className="apply-coupon-span"
                    onClick={handleApplyCoupon}
                  >
                    Apply Coupon
                  </span>
                </div>

                <div className="platform-fee">
                  <span>Platform Fee</span>
                  <span>Free</span>
                </div>

                <div className="shipping-fee">
                  <span>Shipping Fee</span>
                  <span>Free</span>
                </div>

                <div className="total-price">
                  <span>
                    {" "}
                    <b>Total Price</b>{" "}
                  </span>
                  <strong>₹{totalPrice - discount}</strong>
                </div>
              </div>
              <div className="place-order" onClick={handlePlaceOrder}>
                <span>Place Order</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-div">
            <h1>
              Your Cart is Empty-
              <span>
                <Link to="/" target="click here to shop">
                  Shop Now
                </Link>
              </span>
            </h1>
          </div>
        )}

        <OurPolicy />
      </div>
    </div>
  );
};

export default Cart;
