import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import DispWorkout from './DispWorkout';
import DispTranslate from './DispTranslate';
import DispCondo from './DispCondo';

function App() {
  const projects = ['Workout Tracker', 'Perfect Accent', 'Pelican Point'];
  
  const [selectedProject, setSelectedProject] = useState('');

  const handleClick = (project) => {
    if(project==selectedProject){
      setSelectedProject('')
    } else{
      setSelectedProject(project);
    }
  }
  
  const renderProject = () => {
    switch (selectedProject) {
      case 'Workout Tracker':
        return <DispWorkout/>
      case 'Perfect Accent':
        return <DispTranslate/>
      case 'Pelican Point':
        return <DispCondo/>
      default:
        return null;
      }
  };

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Christian Diaz</h1>
        <p>University of Massachusetts Amherst - Class of 2028</p>
      </header>
      <main>
        <section className="App-projects">
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <button onClick={() => handleClick(project)}>{project}</button>
              </li>
            ))}
          </ul>
        </section>
        <section className='Selected-Project'>
          {renderProject()}
        </section>
      </main>
      <footer className="App-footer">
        <p>Contact me at: <a href="mailto:christiangdiaz2@gmail.com" target='blank'>christiangdiaz2@gmail.com</a> / <a href='mailto:cgdiaz@umass.edu' target='blank'>cgdiaz@umass.edu</a> or <a href="tel:2392220007">239-222-0007</a></p>
      </footer>
    </div>
  );
}


export default App;
