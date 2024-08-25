import React, { useState } from 'react';
import './DispTranslate.css';
import pic1 from './Condo1.png';
import pic2 from './Condo2.png';
import pic3 from './Condo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './DispCondo.css'

function DispCondo() {
    const pictures = [pic1,pic2,pic3];
    const [dispPicture, setDispPicture] = useState(pic1);

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
        console.log(newIndex)
        console.log(pictures.length)
        if(newIndex===pictures.length){
            newIndex=0;
        }
        setDispPicture(pictures[newIndex]);
    }

    return(
        <div className='CondoBox'>
            <div className='buttonContainer'>
            <button className='LeftButton' onClick={handleLeftClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <section>
                    <img src={dispPicture} alt='Display' />
                    <span className='badge'>Work in Progress</span>
                </section>
                <button className='RightButton' onClick={handleRightClick}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className='Description'>
                <h4>This project was created for a condo association for residents to be able to access files and important information. As residents of this complex were elderly, a traditional authentication solution could not be used. Instead, a Node.js backend using Express, SQLite, and Firebase Firestore allows for a manager to create accounts for residents directly. All files are password protected and only the manager has access to upload files.</h4>
            </div>
            <footer>
                <p><a href='https://www.ppecondo.com' target='_Blank'>Live Demo</a> | <a href='https://github.com/cdiaz2024/ppe-frontend' target='_Blank'>GitHub Repo</a></p>
            </footer>
        </div>
    );

}

export default DispCondo;