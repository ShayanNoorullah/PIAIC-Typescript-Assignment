let dinner_invitation = ["Noorullah", "Rania", "Aqsa", "Aayan", "Basit"];
//Sending invitations:
for (let person of dinner_invitation){
    console.log(`Dear ${person}. I would like to invite you to dinner`);
}
console.log(`${dinner_invitation[1]} wont't be able to make it`);

console.log("\n");

//modifying list:
dinner_invitation[1] = "Marium";

//Sending invitations again:
for (let person of dinner_invitation){
    console.log(`Dear ${person}. I would like to invite you to dinner`);
}

console.log("\n");

//Announcement for bigger table:
console.log(`Dear Guests. I have found a bigger dinner table \n`);
//Adding guests:
dinner_invitation.unshift("Ali");
dinner_invitation.splice(Math.floor(dinner_invitation.length/2),0,"Aryan");
dinner_invitation.push("Sajal")

//Sending invitations again:
for (let person of dinner_invitation){
    console.log(`Dear ${person}. I would like to invite you to dinner`);
}