var firebaseConfig = {
  apiKey: "AIzaSyA76i_5IfliuAqOUPbK92ZRZVC6M_MjlVA",
  authDomain: "ucc-rowing-program.firebaseapp.com",
  databaseURL: "https://ucc-rowing-program-default-rtdb.firebaseio.com",
  projectId: "ucc-rowing-program",
  storageBucket: "ucc-rowing-program.appspot.com",
  messagingSenderId: "341427210713",
  appId: "1:341427210713:web:f85949e76816ac0d4831c8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()
const database = firebase.database();

const login_form = document.querySelector("#loginForm")
const chatButtons = document.getElementById("chatButtons")
const logoutNav = document.getElementById("logoutNav")
const loggedNav = document.getElementById("loggedNav")
const loginNav = document.getElementById("loginNav")
// const inputPassword = document.getElementById("inputPassword")
// const inputUsername = document.getElementById("inputUsername")
users = []

userNames = []
passwords = []

database.ref('/users/').on('value',(snapshot) => {
    users = snapshot.val()
    ///console.log(users)

    //This is a for each loop that will loop through a collection
    //the same as C.hasNext()
    //This short hand loop form just automatically goes through all elements in 
    //the collection - it is designed to give me the key for every value as it passeses
    //it
    for (key in users) {
        userNames.push(users[key]["name"])
        passwords.push(users[key]["password"])

    }		

    console.log(userNames)
    console.log(passwords)
});

login_form.addEventListener('submit', (e) => {
  e.preventDefault()

  uname = login_form["inputUsername"].value
  pword = login_form["inputPassword"].value
  console.log(uname)
  console.log(pword)

    for (key in users) {

        if (users[key]["name"] == uname) {
            console.log(users[key]["userName"])
            if (users[key]["password"] == pword) {
                loginNav.style.display = "none"
                chatButtons.style.display= "block"
                logoutNav.style.display= "block"
                loggedNav.style.display= "block"
                cuser = users[key]
            }
            else {
                alert("Invalid User")
                break;
            }
        }
    }
  

  login_form.reset()
});

logoutNav.addEventListener('click', (e) => {
  loginNav.style.display = "block"
  chatButtons.style.display= "none"
  logoutNav.style.display= "none"
  loggedNav.style.display= "none"
});

async function writeUserData() {
  // Create user account
  const postKey = await firebase.database().ref('users/').push({
    name: document.getElementById("inputUsername").value,
    password: document.getElementById("inputPassword").value
  }).key;



  
  // User is created, now update global map
  // Basically, just add postkey and inputusername to an existing array updateChildren()?, okay. 
//   await firebase.database().ref(`app/globalMap/${document.getElementById("inputUsername").value}`).set(postKey)
// }

// async function signInUser() {
//   const username = document.getElementById("inputUsername").value
  
//   // check global map for the user uid! yeah? no no you ased for the user id, ididnt know wht itwas
// //john: "-MTnPl7Kb5r7jSkIiwpB" 

//   data = await firebase.database().ref(`app/globalMap/${username}`).once('value')
//   console.log(data)

  
//   Error: Query.once failed: Was called with 0 arguments. Expects at least 1.
//   at q (firebase-database.js:sourcemap:1)
//   at no.Dn.once (firebase-database.js:sourcemap:1)
//   at signInUser (auth.js:60)
//   at HTMLButtonElement.onclick (chat.html:88)
  // ahh
  // boyooyoyo...okay, bye
  // ok im going to disconenct off this nowbye
}


