
//this is a comment
//let name = window.prompt("Enter your name:");
//window.alert("Hello " + name + ", welcome to JavaScript programming!");
let usernname;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    //window.alert("Hello " + username + ", welcome to JavaScript programming!");
    document.getElementById("myLabel").innerHTML = username;
}