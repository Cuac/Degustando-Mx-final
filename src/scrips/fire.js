import firebase from 'firebase';
import {env} from '../environment/environment'

const fire = firebase.initializeApp(env.Firebase);
export default fire;