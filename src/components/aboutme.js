import Subtitle from "./UI/subtitle";

const Aboutme = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="image-container">
        <img src="Melissa.jpeg" className="" alt="Avatar" />
      </div>
      <div className="paragraph">
        <Subtitle>About Me</Subtitle>
        <p>
          I'm a recent graduate of Fullstack Academy Bootcamp’s Software
          Engineer immersive course. I'm adaptive, with good problem-solving
          skills and with a creative outlook towards unfamiliar situations. I am
          looking for an opportunity to work as a software engineer to further
          expand my knowledge and skills and the same time provide solutions and
          new ideas.
          <tbody>
            <a>Skills</a>
            <tr>
              <th>
                <a>Proficient:</a>
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
              </th>
              <th>
                <a>Knowledgeable:</a>
                <li>Firebase/Firestore</li>
                <li>Socket.io</li>
                <li>Heroku</li>
                <li>mySQL</li>
                <li>Python</li>
                <li>PHP</li>
              </th>
            </tr>
          </tbody>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
