let usernames = ["admin", "Shayan", "Eric", "Rania", "Aqsa"];
for(let user of usernames){
    if (user == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}
//Emptying the list:
usernames.splice(0,5);
console.log("\nAfter emptying the list:")
//checking if list is empty:
if (usernames.length == 0){
    console.log("We need to find some users!")
}