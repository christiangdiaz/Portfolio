import React, { useState } from 'react';
import mainPicture from './PAMainPage.png';
import picture2 from './PAPicture2.png';
import picture3 from './PAPicture3.png';
import picture4 from './PAPicture4.png';
import './DispTranslate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function DispTranslate() {
    const pictures = [mainPicture, picture2, picture3, picture4];
    const [dispPicture, setDispPicture] = useState(mainPicture);

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

    return (
        <div className='translateBox'>
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
            <div className='description'>
                <h4>This project, developed for a client, serves as a contact point direct to consumer. Customers can submit a file, managed by Firestore, to request a quote.</h4>
            </div>
            <footer>
                <p><a href='https://www.perfect-accent.com' target='_Blank'>Live Demo</a> | <a href='https://www.github.com/cdiaz2024/translations' target='_Blank'>GitHub Repo</a></p>
            </footer>
        </div>
    );
}

export default DispTranslate;
