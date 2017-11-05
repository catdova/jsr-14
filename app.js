function FarmAnimal(name, sound, img) {
	this.name = name;
	this.sound = sound;
	this.img = 'animals/' + name + '.png';
	this.talk = "the " + name + "says " + sound;
}

function LiveStock(name, sound, img){
	FarmAnimal.call(this, name, sound, img);
	this.function = ['meat','milk','leather'];

}

function Bird(name, sound, img) {
	FarmAnimal.call(this, name, sound, img);
	this.eggs = true;
}

var goose = new Bird('goose', 'honk');
var cow = new LiveStock('cow', 'moo');
var horse = new FarmAnimal('horse', 'neigh');
var pig = new LiveStock('pig', 'oink oink');
var turkey = new Bird('turkey', 'gobble gobble');

console.log(goose.img)

var gooseImage = "<img src='" + goose.img + "' class= animal >";
var cowImage = "<img src='" + cow.img + "' class= animal >";
var horseImage = "<img src='" + horse.img + "' class= animal >";
var pigImage = "<img src='" + pig.img + "' class= animal >";
var turkeyImage = "<img src='" + turkey.img + "' class= animal >";


$('animal-container').append(gooseImage)



