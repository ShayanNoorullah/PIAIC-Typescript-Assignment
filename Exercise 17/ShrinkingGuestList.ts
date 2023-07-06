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

console.log("\n");

//Apology message:

console.log("Sorry Guests! I can only invite two guests for dinner.");

//poping out guest names from the list:
for(let i:number = dinner_invitation.length; i > 2; i--){
    let uninvited = dinner_invitation.pop();
    console.log(`Sorry ${uninvited}, i cant invite you to the dinner`);
}

console.log("\n");

//Confirmation for telling them that they are invited:

for (let person of dinner_invitation){
    console.log(`Dear ${person}. You are still invited`);
}

console.log("\n");

//Removing last two names:

for(let i = 0; i < 2; i++){
    dinner_invitation.pop();
}

//Confirming the list is empty:

console.log("Finally members remaining are:"+ dinner_invitation.length);
