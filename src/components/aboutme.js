const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="image-container">
        <img src="Melissa.jpeg" className="" alt="Avatar" />
      </div>
      <div className="paragraph">
        <p>
          I'm a recent graduate of Fullstack Academy Bootcamp’s Software
          Engineer immersive course. I'm adaptive, with good problem-solving
          skills and with a creative outlook towards unfamiliar situations. I am
          looking for an opportunity to work as a software engineer to further
          expand my knowledge and skills and the same time provide solutions and
          new ideas.
          <ul>
            Skills
            <ul>
              Proficient:
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>React</li>
              <li>Redux</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul>
              Knowledgeable:
              <li>Firebase/Firestore</li>
              <li>Socket.io</li>
              <li>Heroku</li>
              <li>mySQL</li>
            </ul>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
