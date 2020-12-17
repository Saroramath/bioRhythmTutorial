import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  
  IonItem,
  IonDatetime,
  
} from '@ionic/react';
import React, {useState} from 'react';
import BiorhythmCard from './Components/BiorhythmCard'
import {useLocalStorage} from './hooks.js'


function App() {
const [birthDate, setBirthDate] = useLocalStorage('birthDate','');
const [targetDate, setTargetDate] = useState(new Date().toISOString());
//const targetDate = new Date().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bio Rhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate && targetDate && <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />}
        <IonItem>
          <IonLabel position = "floating">Date of Birth:</IonLabel>
          <IonDatetime value = {birthDate} onIonChange = {(event) => setBirthDate(event.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position = "floating">Target Date:</IonLabel>
          <IonDatetime value = {targetDate} onIonChange = {(event) => setTargetDate(event.detail.value)} />
        </IonItem>
        
        
      </IonContent>
    </IonApp>
  );
}

export default App;
