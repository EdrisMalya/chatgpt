import { getApp, getApps, initializeApp } from '@firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAETrDwSHIBOyTPqrKLgrCriB3_Cdum3k0',
    authDomain: 'chatgpt-61726.firebaseapp.com',
    projectId: 'chatgpt-61726',
    storageBucket: 'chatgpt-61726.appspot.com',
    messagingSenderId: '166328358310',
    appId: '1:166328358310:web:b8a100c5358eddcd1eab67',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
