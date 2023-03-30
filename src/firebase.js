import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyALv5XW7qloMe0ap72V91uZQpGq75S2u_c",
    authDomain: "nba-app-1f2ef.firebaseapp.com",
    databaseURL: "https://nba-app-1f2ef-default-rtdb.firebaseio.com",
    projectId: "nba-app-1f2ef",
    storageBucket: "nba-app-1f2ef.appspot.com",
    messagingSenderId: "1009474682208",
    appId: "1:1009474682208:web:d740af8d0c831b466e7205",
    measurementId: "G-CHQXRWM63M"
  };

firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
          const data = [];
            snapshot.forEach((childSnapshot) => {
                data.push({
                    ...childSnapshot.val(),
                    id:childSnapshot.key
                })
            });
            return data;
  }

  export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
  }