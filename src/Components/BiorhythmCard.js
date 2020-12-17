import React from 'react';
import dayjs from 'dayjs';
import {IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent} from '@ionic/react'
import {calculateBiorhythms} from '../calculations'; //we use {} for import if we have a function named like that and no brackets if it is a default export
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css'



function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}    

function BiorhythmCard({ birthDate, targetDate }){
    const{physical, emotional, intellectual} = calculateBiorhythms(birthDate,targetDate);// good way to return an object from a functon and use it like that detructuring
    return (
        <IonCard className = "biorhythm-card">
        <IonCardHeader>
        <IonCardTitle>
            {formatDate(targetDate)}
          

          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>  
          <p className= "physical"> Physical : {physical.toFixed(4)}</p>
          <p className = "emotional"> Emotional: {emotional.toFixed(4)}</p>
          <p className= "intellectual"> Intellectual: {intellectual.toFixed(4)} </p>
          
        </IonCardContent>
      </IonCard>
    );
}
export default  BiorhythmCard;