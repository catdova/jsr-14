function FarmAnimal(name, sound, img) {
	this.name = name;
	this.sound = sound;
	this.img = 'animals/' + name + '.png';
	this.talk = "the " + name + " says " + sound;
}

function LiveStock(name, sound, img){
	FarmAnimal.call(this, name, sound, img);
	this.function = ['meat','milk','leather'];

}

function Bird(name, sound, img) {
	FarmAnimal.call(this, name, sound, img);
	this.eggs = true;
}

//create animals//
var goose = new Bird('goose', 'honk');
var cow = new LiveStock('cow', 'moo');
var horse = new FarmAnimal('horse', 'neigh');
var pig = new LiveStock('pig', 'oink oink');
var turkey = new Bird('turkey', 'gobble gobble');

//create images from objects//
var gooseImage = "<img src='" + goose.img + "' class='animal' id='gooseImage'>";
var cowImage = "<img src='" + cow.img + "' class='animal' id='cowImage' >";
var horseImage = "<img src='" + horse.img + "' class='animal' id='horseImage' >";
var pigImage = "<img src='" + pig.img + "' class= animal id='pigImage'>";
var turkeyImage = "<img src='" + turkey.img + "' class= animal id='turkeyImage'>";

//add animal images to containers//
$('#livestock-container').append(cowImage, pigImage);
$('#bird-container').append(gooseImage, turkeyImage);
$('#horse-container').append(horseImage);


//Aniaml sounds//
$('#gooseImage').click(function(){
	alert(goose.sound)
	console.log(goose.talk);
});

$('#horseImage').click(function(){
	alert(horse.sound)
	console.log(horse.talk);
});






