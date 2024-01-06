import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCA3EW_8Ipj4I1EHSk67iok5-DzhGwatjE",
  authDomain: "e-commerce-project-ce2d3.firebase.app",
  projectId: "e-commerce-project-ce2d3",
  // Add more Firebase config properties here
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
