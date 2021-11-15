import NavBar from "../../../shared/NavBar/NavBar";
import HomeBanner from "../HomeBanner/HomeBanner";
import Products from "../Products/Products";
import ReviewItems from "../ReviewItems/ReviewItems";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Products />
      <ReviewItems></ReviewItems>
    </div>
  );
};

export default Home;
