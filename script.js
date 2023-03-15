var mood = prompt('Hello, comment te sens-tu aujourd\hui? : concentré, sombre, fatigué, fou, frenchie, dynamique, angélique, heureux, triste ou énervé? (!! respecter la casse)');
var moodLC = mood.toLowerCase();

if (moodLC === 'concentré') {
    /* ici ça aurait pû être document.body.innerHTML */
    document.getElementById('idea').innerHTML = ' The Eagle Flies Alone - Arch Enemy ';
    document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/7KoWRwwVUgZV5D0zmrr25s?si=bcf2b1e783ea4dd9" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=mjF1rmSV1dM" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/bossy.jpg' alt='chat-concentré'/>";
} 
else if (moodLC === 'angélique') {
    document.getElementById('idea').innerHTML = ' What About Us - Within Temptation ft. Tarja ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/7IR2tGL04AWfVbK6bZiEEi?si=a8cb7a1fcb2f4307" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=Dy6MpsDPKts" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/fairy-cat.png' alt='chat-angélique'/>";
} 
else if (moodLC === 'fou') {
    document.getElementById('idea').innerHTML = ' Je Collectionne des Canards (Vivants) - Ultra Vomit ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/1zrbDobnLIW4r0G2SPEbJ8?si=5cc616c012574120" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=-w0qTvjydik" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/crazy-cat.jpg' alt='chat-fou'/>";
} 
else if (moodLC === 'frenchie') {
    document.getElementById('idea').innerHTML = ' Furia - Mass Hysteria ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/6Ev5SiZfj8NITyzocG86Vy?si=9eaf7d42245f426c" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=CDAjU6ffOK8" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/frenchie-cat.jpg' alt='frenchie-cat'/>";
} 
else if (moodLC === 'fatigué') {
    document.getElementById('idea').innerHTML = ' Klavier - Rammstein ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/2TfSwSYe7N7gaHFtlWvuZg?si=ecaf2679aaff401c" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=6A8bV_IEgyI" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/tired.jpg' alt='chat-fatigué'/>";
} 
else if (moodLC === 'sombre') {
    document.getElementById('idea').innerHTML = ' Priest of Sodom - Cannibal Corpse ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/6m5EVmAlKhJwbQCT3xN5Kt?si=08bd1894320a4564" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=DqTeGt6ZHQs" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/metal-cat.jpg' alt='chat-sombre'/>";
} 
else if (moodLC === 'dynamique') {
    document.getElementById('idea').innerHTML = ' All My Friends Are Dead - Turbonegro ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/6fEztciYVlIyWTBe66clVj?si=878a44f48c5f4994" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=o6EFg5eWWlM" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/dynamic.jpg' alt='chat-dynamique'/>";
} 
else if (moodLC === 'heureux') {
    document.getElementById('idea').innerHTML = ' Last Resort - Papa Roach ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/5W8YXBz9MTIDyrpYaCg2Ky?si=0ac01e6f39ec46aa" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=j0lSpNtjPM8" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/happy.jpg' alt='chat-heureux'/>";
} 
else if (moodLC === 'triste') {
    document.getElementById('idea').innerHTML = ' Roulette - System Of A Down ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/4sM7v7wyRAuV6ZTO2dvnCA?si=3b7c097f29ed4af9" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=PllrpKGJbOY" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/sad.jpg' alt='chat-triste'/>";
} 
else if (moodLC === 'énervé') {
    document.getElementById('idea').innerHTML = ' To the Hellfire - Lorna Shore ';
        document.getElementById('link').innerHTML = `<a href="https://open.spotify.com/track/0O26gtfjuscAOnQobjNPPL?si=decc409de0a4473b" target="_blank">
    <img src="./img/spotify.png" alt="spotify logo" width="40px" id="spotify"></a>
    <a href="https://www.youtube.com/watch?v=qyYmS_iBcy4" target="_blank">
    <img src="./img/youtube.png" alt="youtube logo" width="50px" id="youtube"></a> `;
    document.getElementById('image').innerHTML += "<img src='./img/angry.jpg' alt='chat-énervé'/>";
} 
else {
    document.getElementById('idea').innerHTML = ' Vous n\'avez pas indiqué un des mots proposés, sorry ';
    document.getElementById('image').innerHTML += "<img src='./img/bowie.png' alt='bowie-mon-chat'/>";
}