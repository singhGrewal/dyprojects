import React, {Component} from 'react';
import getresume from './Components/getresume.json';


import Experience from './Components/Experience.js';
import Projects from './Components/Projects.js';
import Skills from './Components/Skills.js';
import Education from './Components/Education.js';
// import './App.css';

class Resume extends Component {
  
  renderExperience() {
    let resultArray = [];
    getresume.experiences.map((item, i) => {
      resultArray.push(<Experience item={item} key={i}/>);
    });
    return resultArray;
  }
  
  renderProjects() {
    let resultArray = [];
    getresume.projects.map((item, i) => {
      resultArray.push(<Projects item={item} key={i}/>);
    });
    return resultArray;
  }
  
  renderSkills() {
    let resultArray = [];
    getresume.skills.map((item, i) => {
      resultArray.push(<Skills item={item} key={i}/>);
    });
    return resultArray;
  }
  
  renderEducation() {
    let resultArray = [];
    getresume.education.map((item, i) => {
      resultArray.push(<Education item={item} key={i}/>);
    });
    return resultArray;
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src="assets/images/profile.png" alt=""/>
            <h1 className="name">{getresume.name}</h1>
            <h3 className="tagline">Full Stack Developer</h3>
          </div>
          
          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email"><i className="fa fa-envelope"/><a
                href="mailto: yourname@email.com">alan.doe@website.com</a>
              </li>
              <li className="phone"><i className="fa fa-phone"/><a href="tel:0123 456 789">0123 456
                789</a></li>
              <li className="website"><i className="fa fa-globe"/><a
                href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/"
                target="_blank">portfoliosite.com</a></li>
              <li className="linkedin"><i className="fa fa-linkedin"/>
                <a href="#" target="_blank">linkedin.com/in/alandoe</a>
              </li>
              <li className="github"><i className="fa fa-github"/><a href="#" target="_blank">github.com/username</a>
              </li>
              <li className="twitter"><i className="fa fa-twitter"/><a
                href="https://twitter.com/3rdwave_themes"
                target="_blank">@twittername</a></li>
            </ul>
          </div>
          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {this.renderEducation()}
          </div>
          
          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
              <li>English <span className="lang-desc">(Native)</span></li>
              <li>French <span className="lang-desc">(Professional)</span></li>
              <li>Spanish <span className="lang-desc">(Professional)</span></li>
            </ul>
          </div>
          
          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
              <li>Climbing</li>
              <li>Snowboarding</li>
              <li>Cooking</li>
            </ul>
          </div>
        
        </div>
        
        <div className="main-wrapper">
          
          <section className="section summary-section">
            <h2 className="section-title"><i className="fa fa-user"/>Career Profile</h2>
            <div className="summary">
              <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You
                can <a
                  href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/"
                  target="_blank">download this free resume/CV template here</a>. Aenean commodo
                ligula eget dolor
                aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu.</p>
            </div>
          </section>
          
          <section className="section experiences-section">
            <h2 className="section-title"><i className="fa fa-briefcase"/>Experiences</h2>
            
            {this.renderExperience()}
          
          </section>
          
          <section className="section projects-section">
            <h2 className="section-title">
              <i className="fa fa-archive"/>Projects
            </h2>
            <div className="intro">
              <p>You can list your side projects or open source libraries in this section. Lorem ipsum
                dolor sit amet,
                consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu
                lectus.</p>
            </div>
            {this.renderProjects()}
          </section>
          
          <section className="skills-section section">
            <h2 className="section-title"><i className="fa fa-rocket"/>Skills &amp; Proficiency</h2>
            <div className="skillset">
              {this.renderSkills()}
            </div>
          </section>
        
        </div>
      </div>
    );
  }
}

export default Resume;
