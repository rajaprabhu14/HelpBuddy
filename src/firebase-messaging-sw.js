importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');
  firebase.initializeApp({
    apiKey: "AIzaSyDVJG-5vIf7nD9T5Qsb8AXAsL9dxyXSwhI",
    authDomain: "helpbuddy-d0a38.firebaseapp.com",
    databaseURL: "https://helpbuddy-d0a38.firebaseio.com",
    projectId: "helpbuddy-d0a38",
    storageBucket: "helpbuddy-d0a38.appspot.com",
    messagingSenderId: "884293601037",
    appId: "1:884293601037:web:767e0cc38c31a0d5921244"
});
  const messaging = firebase.messaging();
