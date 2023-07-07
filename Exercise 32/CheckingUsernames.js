var current_users = ["admin", "shayan", "rania", "aqsa", "aayan"];
var new_users = ["Rania", "alishba", "AAYAN", "affan", "noorullah"];
var flag = true;
for (var i = 0; i < new_users.length; i++) {
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            console.log("Username: ".concat(new_users[i], " is already taken. Enter new username!"));
            flag = true;
            break;
        }
    }
    if (!flag) {
        console.log("Username: ".concat(new_users[i], " is available!"));
    }
    flag = false;
}
