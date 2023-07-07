let magicians_name = ["Ricky Jay", "David Copperfield", "Dynamo", "Chris Angel"];

function showMagicians(magician: string[]) {
    for (let m of magician){
        console.log(m);
    }
}

//Making Great Magicians:

function make_great(magician:string[]) :string[] {
    let great_magician: string[] = [];
    for(let m of magician){
        great_magician.push(m + " the Great");
    }
    return great_magician;
}

//unchanged Magicians:

let greatMagicians = make_great(magicians_name);

console.log("Original (unchanged) List:");
showMagicians(magicians_name);

console.log("\nModified List:");
showMagicians(greatMagicians);