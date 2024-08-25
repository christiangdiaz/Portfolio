import React,{useState,useEffect} from 'react';
import workout1 from './Workout1.png';
import workout2 from './Workout2.png';
import workout3 from './Workout3.png';
import workout4 from './Workout4.png';
import workout5 from './Workout5.png';
import workout6 from './Workout6.png';
import workout7 from './Workout7.png';
import workout8 from './Workout8.png';
import './DispWorkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function DispWorkout(){
    const pictures = [workout1,workout2,workout3,workout4,workout5,workout6,workout7,workout8];
    const [dispPicture, setDispPicture] = useState(workout1);

    const handleLeftClick = () => {
        const currentIndex = pictures.indexOf(dispPicture);
        let newIndex = currentIndex-1;
        if(newIndex<0){
            newIndex=pictures.length-1;
        }
        setDispPicture(pictures[newIndex]);
    }

    const handleRightClick = () => {
        const currentIndex = pictures.indexOf(dispPicture);
        let newIndex = currentIndex+1;
        if(newIndex===pictures.length){
            newIndex=0;
        }
        setDispPicture(pictures[newIndex]);
    }

    return(
        <div className='WorkoutBox'>
            <div className='buttonContainer'>
                <button className='LeftButton' onClick={handleLeftClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <section>
                    <img src={dispPicture} alt='Display'/>
                    <span className='badge'>Work in Progress</span>
                </section>
                <button className='RightButton' onClick={handleRightClick}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className='description'>
                <h4>This project was created for my Advanced Topics in Software Engineering class. UI design was created using React, backend is a mix of AWS and Firebase, with AWS managing hosting and data storage, and Firebase managing authentication and user information. </h4>
            </div>
            <footer>
                <p>
                    <a href='https://www.mybulkbuddy.com' target='_blank'>Live Demo</a>
                     | 
                    <a href='https://www.github.com/csnse/workouttracker' target='_blank'>GitHub Repo</a>
                </p>
            </footer>
        </div>
    )
}

export default DispWorkout;
