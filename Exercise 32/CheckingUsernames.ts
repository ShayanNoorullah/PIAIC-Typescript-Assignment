let current_users = ["admin", "shayan", "rania", "aqsa", "aayan"];
let new_users = ["Rania", "alishba", "AAYAN", "affan", "noorullah"];
let flag = true;
for(let i = 0; i < new_users.length; i++){
    for(let j = 0; j < current_users.length; j++){
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()){
            console.log(`Username: ${new_users[i]} is already taken. Enter new username!`);
            flag = true;
            break;
        }
    }
    if (!flag){
        console.log(`Username: ${new_users[i]} is available!`);
    }
    flag = false;
}