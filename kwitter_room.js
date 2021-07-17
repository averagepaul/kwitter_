
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyACV0VojEBpYuylZRkW25JjZRYX_z_rYo0",
  authDomain: "pauls-kwitter.firebaseapp.com",
  databaseURL: "https://pauls-kwitter-default-rtdb.firebaseio.com",
  projectId: "pauls-kwitter",
  storageBucket: "pauls-kwitter.appspot.com",
  messagingSenderId: "79490999189",
  appId: "1:79490999189:web:f9f5597e8fc4f154080c9c",
  measurementId: "G-LFVXSZSJB3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
