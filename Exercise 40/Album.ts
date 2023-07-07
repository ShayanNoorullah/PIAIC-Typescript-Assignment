function makeAlbum(artist: string, title: string, tracks?: number): object {
    const album = {
        artist_name: artist,
        album_title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
//Dictionaries:
const album_1 = makeAlbum("Atif Aslam", "Doorie");
console.log(album_1);
const album_2 = makeAlbum("Talha Anjum", "Open Letter", 28);
console.log(album_2);
const album_3 = makeAlbum("Ed Sheeran", "Divide", 4);
console.log(album_3);
  