/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
// import admin from 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAFovNE2p9HgnqLqC98ayRPo3AP9XaDE8E',
  authDomain: 'me-data-68107.firebaseapp.com',
  databaseURL: 'https://me-data-68107.firebaseio.com',
  projectId: 'me-data-68107',
});

const rsf = new ReduxSagaFirebase(firebaseApp);

const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);

export default rsf;
/* eslint-enable import/no-extraneous-dependencies */
