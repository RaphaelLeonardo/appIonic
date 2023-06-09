// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  firebaseConfig: {
    apiKey: "AIzaSyA9iJZA0xWeXdUMFfbkS5h-TuHsKHyp974",
    authDomain: "taskinhas.firebaseapp.com",
    projectId: "taskinhas",
    storageBucket: "taskinhas.appspot.com",
    messagingSenderId: "671769994541",
    appId: "1:671769994541:web:e6a6ec85a55d4d5c951fa4",
  }
};
