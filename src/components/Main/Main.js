import "./Main.css";

import SearchSection from "../SearchSection/SearchSection";
import SearchResults from "../SearchResults/SearchResults";
import AboutSection from "../AboutSection/AboutSection";

import { articles } from "../../utils/constants";

function Main() {
  return (
    <main>
      <SearchSection />
      <SearchResults currentResults={articles} />
      <AboutSection />
    </main>
  );
}

export default Main;
