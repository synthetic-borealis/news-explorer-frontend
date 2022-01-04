import "./AboutSection.css";
import avatarImage from "../../images/avatar.jpg";

function AboutSection() {
  return (
    <section className="AboutSection">
      <div className="AboutSection__container">
        <img className="AboutSection__avatar" src={avatarImage} />
        <ul className="AboutSection__text-container">
          <li><h2 className="AboutSection__title">About the author</h2></li>
          <li><p className="AboutSection__paragraph">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p></li>
          <li><p className="AboutSection__paragraph">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p></li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
