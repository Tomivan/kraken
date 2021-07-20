import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="left-top-box">
          <h4>Frontend Mentor</h4>
          <p>Feedback Board</p>
        </div>
        <div className="left-box">
          <div className="left-box-top">
          <p><span>All</span></p>
          <p> <span>UI</span></p>
          <p><span>UX</span></p>
          </div>
          <div className="left-box-middle">
          <p><span>Enhancement</span></p>
          <p><span>Bug</span></p>
          </div>
          <div className="left-box-bottom">
            <p><span>Feature</span></p>
          </div>
        </div>
        <div className="left-box-1">
          <div className="top">
            <h3>Roadmap</h3>
            <Link to="#">View</Link>
          </div>
          <div className="body">
            <div className="info">
              <div className="state">
                <FontAwesomeIcon icon={faCircle} className="pink"/>
                <p>Planned</p>
              </div>
              <p>2</p>
            </div>
            <div className="info">
              <div className="state">
                <FontAwesomeIcon icon={faCircle} className="purple"/>
                <p>In progress</p>
              </div>
              <p>3</p>
            </div>
            <div className="info">
              <div className="state">
                <FontAwesomeIcon icon={faCircle} className="aqua"/>
                <p>Live</p>
              </div>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <div className="right-top-left">
              <FontAwesomeIcon icon={faCog} className="cog"/>
              <div className="suggestions">
                <FontAwesomeIcon icon={faCircle} className="circle"/>
                <p>Suggestions</p>
              </div>
              <div className="sort">
                <p>Sort by</p>
                <p>Most updates <FontAwesomeIcon icon={faAngleDown} /></p>
              </div>
            </div>
            <button className="feedback"><FontAwesomeIcon icon={faPlus} />Add Feedback</button>
          </div>
          <div className="box">
            <div className="number-box">
              <FontAwesomeIcon icon={faAngleUp} />
              <p>112</p>
            </div>
            <div className="middle">
              <h3>Add tags for solutions</h3>
              <p>Easier to search for a solution based on a specific stack</p>
              <p><span>Enhancement</span></p>
            </div>
              <FontAwesomeIcon icon={faCircle} class="dot"/>
              <p>2</p>
          </div>
          <div className="box">
            <div className="number-box">
              <FontAwesomeIcon icon={faAngleUp} />
              <p>99</p>
            </div>
            <div className="middle">
              <h3>Add a dark theme option</h3>
              <p>It would help people with light sensitivities and who prefer dark mode</p>
              <p><span>Feature</span></p>
            </div>
              <FontAwesomeIcon icon={faCircle} class="dot"/>
              <p>4</p>
          </div>
          <div className="box">
            <div className="number-box">
              <FontAwesomeIcon icon={faAngleUp} />
              <p>65</p>
            </div>
            <div className="middle">
              <h3>Q&A within the challenge hubs</h3>
              <p>Challenge-specific Q&A would make for easy reference</p>
              <p><span>Feature</span></p>
            </div>
            <div className="end">
              <p><FontAwesomeIcon icon={faCircle} class="dot"/>1</p>
            </div>
          </div>
          <div className="box">
            <div className="number-box">
            <FontAwesomeIcon icon={faAngleUp} />
              <p>51</p>
            </div>
            <div className="middle">
              <h3>Allow image/video upload to feedback</h3>
              <p>Images and screenshots can enhance comments on solutions</p>
              <p><span>Enhancement</span></p>
            </div>
              <FontAwesomeIcon icon={faCircle} class="dot"/>
              <p>2</p>
          </div>
          <div className="box">
            <div className="number-box">
              <FontAwesomeIcon icon={faAngleUp} />
              <p>42</p>
            </div>
            <div className="middle">
              <h3>Ability to follow others</h3>
              <p>Stay updated on coments and solutions other people post</p>
              <p><span>Feature</span></p>
            </div>
              <FontAwesomeIcon icon={faCircle} class="dot"/>
              <p>3</p>
          </div>
          <div className="box">
            <div className="number-box">
              <FontAwesomeIcon icon={faAngleUp} />
              <p>3</p>
            </div>
            <div className="middle">
              <h3>Preview images not loading</h3>
              <p>Challenge preview images are missing when you apply a filter</p>
              <p><span>Bug</span></p>
            </div>
            <FontAwesomeIcon icon={faCircle} class="dot"/>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
