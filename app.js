function FarmAnimal(name, sound, img) {
	this.name = name;
	this.sound = sound;
	this.img = 'images/' + name + '.png';
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

console.log(goose)



