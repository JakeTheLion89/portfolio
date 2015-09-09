//Javascript code by Jake Leonen 2015

console.log("Starting");

// Make a random Olaf picture generator
var olafBox = document.createElement("div");
var olaf = document.createElement("img");

//array of olaf img urls

var arrayOfOlafs = [
    "http://25.media.tumblr.com/aeccd6abc9d992ef8b717a420829c532/tumblr_mya0tmEHnu1t08swio1_500.png",
    "http://frozen.disney.ru/itunes/i/olaf.png",
    "http://images6.fanpop.com/image/photos/36000000/Olaf-disney-frozen-36017503-248-274.gif",
    "http://media.giphy.com/media/UeSxOi8vAvYM8/giphy.gif",
    "https://e2f.com/wp-content/uploads/2015/07/Hi.png",
    "https://41.media.tumblr.com/73117069160b2f1db3a0b339d8c64836/tumblr_mxhuaczpzq1t6prmgo1_500.png",
    "http://wondersofdisney2.yolasite.com/resources/frozen/olaf/olafbeach.png",
    "http://wondersofdisney2.yolasite.com/resources/frozen/olaf/olafbreakdance.png",
    "http://wondersofdisney2.yolasite.com/resources/frozen/group/marshmallowchaseolaf.png",
]

// randomly choose an img
var n = Math.floor(Math.random() * arrayOfOlafs.length);

// set the attributes of the olaf container
olafBox.setAttribute("id","olafBoxDiv");
olafBox.style.position = "fixed";
olafBox.style.bottom = "0";
olafBox.style.left = "0";

// set the attributes of the olaf image
olaf.setAttribute("id","olaf");
olaf.setAttribute("src",arrayOfOlafs[n]);

// put container on the webpage
document.getElementsByTagName("BODY")[0].appendChild(olafBox);

// then put olaf's picture in the container
document.getElementById('olafBoxDiv').appendChild(olaf);

//MAKE OLAF SAY STUFF
var olafSays = [
    "Some people are worth melting for.",
    "Hi, everyone. I'm Olaf! And I like warm hugs!",
    "Hang in there, guys!",
    "Who's my cute little reindeer?!",
    "Because I love you Anna, I insist you run.",
    "Winter's a good time to stay in and cuddle, but put me in summer and I'll be a... happy snowman!"
];

// randomly choose a quote and make an alert
alert("OLAF JUST GOT ON THE PAGE! AND HE SAYS: \n" + olafSays[Math.floor(Math.random() * olafSays.length)]);
