import "./Main.css";

import SearchSection from "../SearchSection/SearchSection";
import SearchResults from "../SearchResults/SearchResults";
import AboutSection from "../AboutSection/AboutSection";

function Main() {
  return (
    <main>
      <SearchSection />
      <SearchResults />
      <AboutSection />
    </main>
  );
}

export default Main;
