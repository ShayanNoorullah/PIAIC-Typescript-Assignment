let usernames = ["admin", "Shayan", "Eric", "Rania", "Aqsa"];
for(let user of usernames){
    if (user == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}