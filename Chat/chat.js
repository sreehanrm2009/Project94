//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCOgz84JR1j_E59enIJRPWRmxM5LlfjaTA",
      authDomain: "chat-app-b20d9.firebaseapp.com",
      databaseURL: "https://chat-app-b20d9-default-rtdb.firebaseio.com",
      projectId: "chat-app-b20d9",
      storageBucket: "chat-app-b20d9.appspot.com",
      messagingSenderId: "1057416048596",
      appId: "1:1057416048596:web:f9070b3134583895ca7041"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

function logout() {
      window.location.redirect("../Login/index.html");
}