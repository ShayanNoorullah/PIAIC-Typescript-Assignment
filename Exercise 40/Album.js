function makeAlbum(artist, title, tracks) {
    var album = {
        artist_name: artist,
        album_title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
//Dictionaries:
var album_1 = makeAlbum("Atif Aslam", "Doorie");
console.log(album_1);
var album_2 = makeAlbum("Talha Anjum", "Open Letter", 28);
console.log(album_2);
var album_3 = makeAlbum("Ed Sheeran", "Divide", 4);
console.log(album_3);
