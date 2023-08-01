import Cards from "../../components/Card";
import Carousel from "../../components/Carousel";
import SearchButton from "../../components/SearchButton";
import UserCard from "../../components/UserCard";

export default function Home() {
  return (
    <div className="homePage">
      {/* <Carousel /> */}
      <img className="homeImage" src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" alt="img" />
      <div>
        <SearchButton />
      </div>
      <div>
        <h2 className="py">Explore categories</h2>
        <Cards />
      </div>
      <div className="comment">
        <h3>Are you a business? <button>Get started</button></h3>
        <h2>Recent reviews</h2>
        <UserCard />
      </div>
    </div>
  )
}
