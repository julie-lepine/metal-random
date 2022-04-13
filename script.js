var mood = prompt('Hello, comment te sens-tu aujourd\hui? : concentré, sombre, fatigué, fou, frenchie, dynamique, angélique, heureux, triste ou énervé? (!! respecter la casse)');
var moodLC = mood.toLowerCase();

if (moodLC === 'concentré') {
    /* ici ça aurait pû être document.body.innerHTML */
    document.getElementById('idea').innerHTML = 'The Eagle Flies Alone - Arch Enemy';
    document.getElementById('image').innerHTML += "<img src='./img/bossy.jpg' alt='chat-concentré'/>";
} else if (moodLC === 'angélique') {
    document.getElementById('idea').innerHTML = 'What About Us - Within Temptation ft. Tarja';
    document.getElementById('image').innerHTML += "<img src='./img/fairy-cat.png' alt='chat-angélique'/>";
} else if (moodLC === 'fou') {
    document.getElementById('idea').innerHTML = 'Je Collectionne des Canards (Vivants) - Ultra Vomit';
    document.getElementById('image').innerHTML += "<img src='./img/crazy-cat.jpg' alt='chat-fou'/>";
} else if (moodLC === 'frenchie') {
    document.getElementById('idea').innerHTML = 'Furia - Mass Hysteria';
    document.getElementById('image').innerHTML += "<img src='./img/frenchie-cat.jpg' alt='frenchie-cat'/>";
} else if (moodLC === 'fatigué') {
    document.getElementById('idea').innerHTML = 'Klavier - Rammstein';
    document.getElementById('image').innerHTML += "<img src='./img/tired.jpg' alt='chat-fatigué'/>";
} else if (moodLC === 'sombre') {
    document.getElementById('idea').innerHTML = 'Priest of Sodom - Cannibal Corpse';
    document.getElementById('image').innerHTML += "<img src='./img/metal-cat.jpg' alt='chat-sombre'/>";
} else if (moodLC === 'dynamique') {
    document.getElementById('idea').innerHTML = 'All My Friends Are Dead - Turbonegro';
    document.getElementById('image').innerHTML += "<img src='./img/dynamic.jpg' alt='chat-dynamique'/>";
} else if (moodLC === 'heureux') {
    document.getElementById('idea').innerHTML = 'Last Resort - Papa Roach';
    document.getElementById('image').innerHTML += "<img src='./img/happy.jpg' alt='chat-heureux'/>";
} else if (moodLC === 'triste') {
    document.getElementById('idea').innerHTML = 'Roulette - System Of A Down';
    document.getElementById('image').innerHTML += "<img src='./img/sad.jpg' alt='chat-triste'/>";
} else if (moodLC === 'énervé') {
    document.getElementById('idea').innerHTML = 'To the Hellfire - Lorna Shore';
    document.getElementById('image').innerHTML += "<img src='./img/angry.jpg' alt='chat-énervé'/>";
} else {
    document.getElementById('idea').innerHTML = 'Vous n\'avez pas indiqué un des mots proposés, sorry';
    document.getElementById('image').innerHTML += "<img src='./img/bowie.png' alt='bowie-mon-chat'/>";
}