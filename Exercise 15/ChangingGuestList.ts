let dinner_invitation = ["Noorullah", "Rania", "Aqsa", "Aayan", "Basit"];
//Sending invitations:
for (let person of dinner_invitation){
    console.log(`Dear ${person}. I would like to invite you to dinner`);
}
console.log(`${dinner_invitation[1]} wont't be able to make it`);
//modifying list:
dinner_invitation[1] = "Marium";
//Sending invitations again:
for (let person of dinner_invitation){
    console.log(`Dear ${person}. I would like to invite you to dinner`);
}