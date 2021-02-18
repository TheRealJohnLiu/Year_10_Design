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
var storage = firebase.storage();
var storageRef = storage.ref();
var tangRef = storageRef.child('rowing/1975-1976 Rowing Team 001.jpg'); //references the storage bucket of my firebase system

const elementDisplay = document.getElementById("elementDisplay")

// function createCard(elemOBJ) {

    
//     const card = ` 	
//         <div class="col s12 m6 l4">
//             <div class="card">
//                 <div class="card-image" style = "height: 400px">
//                     <img class = "cardpic" id = "${elemOBJ["img"]}" src="">
                    
//                 </div>
//             </div>
//         </div>
//         `

//     return card
// }    	


// function setImage(obj,info) {
    
//     console.log(obj)
//     console.log(info["img"])
//     storageRef.child('images/'+info["img"]).getDownloadURL().then(function(url) {

//         obj.src = url;

//     });
// }
// database.ref('/elements/').on('value',(snapshot) => {


//         data = snapshot.val()
//         console.log(data)
//         //getDownloadURL generates a promise
//         for (key in data) {

            
//             elementDisplay.innerHTML += createCard(data[key])

                

//         }

//         cards = document.getElementsByClassName("cardpic")
        
//         for (i = 0; i < cards.length; i = i + 1) {
//             setImage(cards[i],data[i])
//         }

// });
/*
storageRef.child('images/2_Helium.jpg').getDownloadURL().then(function(url) {
                    var test = url;
                    elementDisplay.innerHTML += createCard(url)
                
            });
*/				



//const imagetest = document.getElementById("imagetest") //gets access to the element on the page

//imagetest.src = link


	//const elementDisplay = document.getElementById("elementDisplay")
tangRef.getDownloadURL().then(function(url)                             {
    // Once we have the download URL, we set it to our img element
    document.querySelector('img').src = url;
    
    }).catch(function(error) {
    // If anything goes wrong while getting the download URL, log the error
    console.error(error);
});
// for (key in users) {


// }