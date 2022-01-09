import "./Main.css";

import SearchSection from "../SearchSection/SearchSection";
import SearchResults from "../SearchResults/SearchResults";
import AboutSection from "../AboutSection/AboutSection";

import { articles } from "../../utils/constants";

function Main(props) {
  return (
    <main>
      <SearchSection />
      <SearchResults currentResults={articles} isLoggedIn={props.isLoggedIn} onCardButtonClick={props.onCardButtonClick} />
      <AboutSection />
    </main>
  );
}

export default Main;
