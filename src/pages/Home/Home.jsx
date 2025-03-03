import React, { useEffect, useState } from "react";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import OurPolicy from "../../components/Policy/OurPolicy";

const Home = () => {
  const [mensData, setMensData] = useState([]);

  const [womenData, setWomenData] = useState([]);

  const [kidData, setKidData] = useState([]);

  // Mens collection
  useEffect(() => {
    async function fetchMenData() {
      const menData = await window.fetch(
        "https://ecommerce-api3.p.rapidapi.com/menswear",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6327be3afcmsh0f0de4b2e3264f3p18651fjsn1c61e8505d1e",
            "X-RapidAPI-Host": "ecommerce-api3.p.rapidapi.com",
          },
        }
      );
      const menfinalData = await menData.json();
      setMensData(menfinalData.slice(0, 5));
    }
    fetchMenData();
  }, []);

  // Women collection
  useEffect(() => {
    async function fetchWoMenData() {
      const womenData = await window.fetch(
        "https://ecommerce-api3.p.rapidapi.com/womenswear",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6327be3afcmsh0f0de4b2e3264f3p18651fjsn1c61e8505d1e",
            "X-RapidAPI-Host": "ecommerce-api3.p.rapidapi.com",
          },
        }
      );
      const womenfinalData = await womenData.json();
      setWomenData(womenfinalData.slice(0, 5));
    }
    fetchWoMenData();
  }, []);

  // kid collection
  useEffect(() => {
    async function fetchKidData() {
      const kidData = await window.fetch(
        "https://ecommerce-api3.p.rapidapi.com/kidswear",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6327be3afcmsh0f0de4b2e3264f3p18651fjsn1c61e8505d1e",
            "X-RapidAPI-Host": "ecommerce-api3.p.rapidapi.com",
          },
        }
      );
      const kidfinalData = await kidData.json();
      setKidData(kidfinalData.slice(0, 5));
    }
    fetchKidData();
  }, []);

  const carouselData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
      heading: "Exclusive Winter Sale!",
      offer: "Buy 1 Get 1 Free",
      discount: "Flat 50% Off",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a",
      heading: "Limited Time Offer!",
      offer: "Extra 20% Off on Orders Above $100",
      discount: "Up to 70% Off",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      heading: "Trending Fashion Deals",
      offer: "Free Shipping on All Orders",
      discount: "30% Off on Selected Items",
    },

    {
      id: 4,
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d",
      heading: "Festive Special Deals",
      offer: "Special Coupons for First-Time Buyers",
      discount: "Save Big This Season!",
    },
  ];

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay
          transitionTime={3}
          infiniteLoop
          showStatus={false}
          showIndicators={false}
        >
          {carouselData.map((clothes, i) => (
            <React.Fragment key={i}>
              <div className="poster-img">
                <img src={clothes.image} alt="img" />
              </div>
              <div className="poster-image-overlay">
                <div className="poster-image-title">{clothes.heading}</div>
                <div className="poster-image-desc">{clothes.discount}</div>
                <Link to={"shop/mens"} className="explore-btn">
                  Explore Now
                </Link>
              </div>
            </React.Fragment>
          ))}
        </Carousel>
      </div>

      <div className="heading-coll">
        <h1>Shop By Category</h1>
      </div>

      <div className="men-winter-coll">
        <div className="home-men">
          {mensData.map((data, i) => (
            <Card key={i} products={data} category={"menswear"} />
          ))}
        </div>
      </div>

      <div className="women-winter-coll">
        <div className="home-women">
          {womenData.map((data, i) => (
            <Card key={i} products={data} category={"womenswear"} />
          ))}
        </div>
      </div>

      <div className="kid-winter-coll">
        <div className="home-kid">
          {kidData.map((data, i) => (
            <Card key={i} products={data} category={"kidswear"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
