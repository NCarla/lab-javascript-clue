// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connctions',
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
  }
];

function Suspect (firstName, lastName, occupation, age, description, image, color) {
  this.firstName = firstName
  this.lastName = lastName
  this.occupation = occupation
  this.age = age
  this.description = description
  this.image = image
  this.color = color
}

let newSuspect = new suspectsArray ("Doctor", "Orchid", "Scientist", 26, 
"PhD in plant toxicology. Adopted daughter of Mr. Boddy", 
"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", 
"white");

let newSuspect2 = new suspectsArray ("Victor", "Plum", "Designer", 22, 
"Billionaire video game designer", 
"https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", 
"purple");

let newSuspect3 = new suspectsArray ("Kasandra", "Scarlet", "Actor", 31, 
"She is an A-list movie star with a dark past", 
"https://www.radiotimes.com/uploads/images/Original/111967.jpg", 
"red");

let newSuspect4 = new suspectsArray ("Eleanor", "Peacock", "Socialite", 36, 
"She is from a wealthy family and uses her status and money to earn popularity", 
"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", 
"blue");

let newSuspect5 = new suspectsArray ("Jack", "Mustard", "retired football player", 62, 
"He is a former football player who tries to get by on his former glory", 
"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", 
"yellow");

// Rooms Collection
const roomsArray = [
  {
    name: "Dining Room"
  }
];

function Room (name) {
  this.name = name
}

let newRoom = new roomsArray ("Conservatory");
let newRoom2 = new roomsArray ("Kitchen");
let newRoom3 = new roomsArray ("Study");
let newRoom4 = new roomsArray ("Library");
let newRoom5 = new roomsArray ("Billiard Room");
let newRoom6 = new roomsArray ("Lounge");
let newRoom7 = new roomsArray ("Ballroom");
let newRoom8 = new roomsArray ("Hall");
let newRoom9 = new roomsArray ("Spa");
let newRoom10 = new roomsArray ("Living Room");
let newRoom11 = new roomsArray ("Observatory");
let newRoom12 = new roomsArray ("Theater");
let newRoom13 = new roomsArray ("Guest House");
let newRoom14 = new roomsArray ("Patio");

// Weapons Collection
const weaponsArray = [
  {
    name: "rope",
    weight: 10
  }
];

function Weapon (name, weight) {
  this.name = name
  this.weight = weight
}

let newWeapon = new Weapon ("knife", 8);
let newWeapon2 = new Weapon ("candlestick", 2);
let newWeapon3 = new Weapon ("dumbell", 30);
let newWeapon4 = new Weapon ("poison", 2);
let newWeapon5 = new Weapon ("axe", 15);
let newWeapon6 = new Weapon ("bat", 13);
let newWeapon7 = new Weapon ("trophy", 25);
let newWeapon8 = new Weapon ("pistol", 20);

weaponsArray.push(newWeapon, newWeapon2, newWeapon3, newWeapon4, 
  newWeapon5, newWeapon6, newWeapon7, newWeapon8);

// ITERATION 2

function selectRandom (array) {
  var randomItem = array[Math.floor(Math.random()*array.length)]; 
// array.forEach (array => console.log(array[0]));
  return randomItem;
}

let murderWeapon = selectRandom (weaponsArray);

function pickMystery () {
  let object = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  } 
  return object;
}

// ITERATION 3

function revealMystery(object) {
return `${object.suspect["firstName"]} ${object.suspect["lastName"]} 
killed Mr. Boddy using the ${object.weapon["name"]} in the ${object.room["name"]}`
}

let mystery = revealMystery(pickMystery());