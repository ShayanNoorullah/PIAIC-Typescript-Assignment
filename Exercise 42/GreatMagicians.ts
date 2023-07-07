let magicians_name = ["Ricky Jay", "David Copperfield", "Dynamo", "Chris Angel"];

function showMagicians(magician: string[]) {
    for (let m of magician){
        console.log(m);
    }
}

showMagicians(magicians_name);

//Making Great Magicians:

function make_great(magician:string[]) :string[] {
    let great_majician: string[] = [];
    for(let m of magician){
        great_majician.push(m + " the Great");
    }
    return great_majician;
}

magicians_name = make_great(magicians_name);
showMagicians(magicians_name);