import "./AboutSection.css";
import avatarImage from "../../images/avatar.jpg";

function AboutSection() {
  return (
    <section className="AboutSection">
      <div className="AboutSection__container">
        <img
          className="AboutSection__avatar"
          src={avatarImage}
          alt="author avatar"
        />
        <ul className="AboutSection__text-container">
          <li>
            <h2 className="AboutSection__title">About the author</h2>
          </li>
          <li>
            <p className="AboutSection__paragraph">
              I'm an avid gamer, a tech geek and a fullstack developer. My tech
              stack includes, among others, the following languages &
              technologies: HTML, CSS, JavaScript, React, Express.js & MongoDB.
              I also have basic working knowledge of C++, C#, Python, Unreal
              Engine & Unity.
            </p>
          </li>
          <li>
            <p className="AboutSection__paragraph AboutSection__paragraph_last">
              Practicum has helped me become comfortable using current
              development practices & technologies.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
