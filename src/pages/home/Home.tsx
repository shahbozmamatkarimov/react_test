import Carousel from "../../components/carousel";
import SearchButton from "../../components/searchButton";

export default function Home() {
  return (
    <div className="homePage">
      {/* <Carousel /> */}
      <img className="homeImage" src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" alt="img" />
      <div>
        <SearchButton />
      </div>
    </div>
  )
}
