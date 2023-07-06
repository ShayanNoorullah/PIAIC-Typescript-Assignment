var dinner_invitation = ["Noorullah", "Rania", "Aqsa", "Aayan", "Basit"];
//Sending invitations:
for (var _i = 0, dinner_invitation_1 = dinner_invitation; _i < dinner_invitation_1.length; _i++) {
    var person = dinner_invitation_1[_i];
    console.log("Dear ".concat(person, ". I would like to invite you to dinner"));
}
console.log("".concat(dinner_invitation[1], " wont't be able to make it"));
console.log("\n");
//modifying list:
dinner_invitation[1] = "Marium";
//Sending invitations again:
for (var _a = 0, dinner_invitation_2 = dinner_invitation; _a < dinner_invitation_2.length; _a++) {
    var person = dinner_invitation_2[_a];
    console.log("Dear ".concat(person, ". I would like to invite you to dinner"));
}
console.log("\n");
//Announcement for bigger table:
console.log("Dear Guests. I have found a bigger dinner table \n");
//Adding guests:
dinner_invitation.unshift("Ali");
dinner_invitation.splice(Math.floor(dinner_invitation.length / 2), 0, "Aryan");
dinner_invitation.push("Sajal");
//Sending invitations again:
for (var _b = 0, dinner_invitation_3 = dinner_invitation; _b < dinner_invitation_3.length; _b++) {
    var person = dinner_invitation_3[_b];
    console.log("Dear ".concat(person, ". I would like to invite you to dinner"));
}
