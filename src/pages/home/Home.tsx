import Carousel from "../../components/carousel";
import SearchButton from "../../components/searchButton";

export default function Home() {
  return (
    <div className="homePage">
      <Carousel />
      <div>
        <SearchButton />
      </div>
    </div>
  )
}
