console.log("running script")

var uNames = ["user@test.com","user2@test.com"];
var pWords = ["123abc", "234bcd"];

function checkCred(u, p){

    //loop through each element in uNames
    for (i = 0; i < uNames.length; i = i + 1) {

        //Checks if the user name u exists
        if (uNames[i] === u) {

            if (pWords[i] == p){
                return true;
                //if true, correct user and password
            }
            

        }
    }
    return false; //if false, user and password dont match or not in system. 
}

result = checkCred("user@test.com","123abc")
console.log(result)