import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>Sass/Less</li>
          <li>Scss</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Material-ui</li>
          <li>React.js</li>
          <li>Redux</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Chrome Dev</li>
          <li>Git & Github</li>
          <li>Jira</li>
        </div>
      </div>
    </div>
  );
};

export default About;
