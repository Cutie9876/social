
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCPPVRI7KkK5WyO3caUa0rB30hJ3zI5d60",
      authDomain: "kwitter-9493d.firebaseapp.com",
      databaseURL: "https://kwitter-9493d-default-rtdb.firebaseio.com",
      projectId: "kwitter-9493d",
      storageBucket: "kwitter-9493d.appspot.com",
      messagingSenderId: "84210775436",
      appId: "1:84210775436:web:652e9d5da8a832fb2c12a9"
    };
    
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
