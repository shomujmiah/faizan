importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC9jiFzGEJ5TM81-q6H2doOfZmB1tLEA8E",
  projectId: "faizanportal-230bc",
  messagingSenderId: "1090378575434",
  appId: "1:1090378575434:web:1dafa6e37af2cb9f6000b3"
});

const messaging = firebase.messaging();

// This listener handles notifications while the app is in the background
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
