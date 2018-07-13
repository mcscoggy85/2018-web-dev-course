class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wiz1 = new Wizard('Shelly', 'Healer');
const wiz2 = new Wizard('Shawn', 'Dark Magic');
wiz1.play();
wiz2.play();

player = new Player('Billy', 'Troll');
player.introduce();

console.log(wiz2);
wiz2.introduce();

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
    sound(animalSound) {
        console.log(`${animalSound} my name is ${this.name} I am a ${this.color} ${this.type} `)
    }
}

class Mammal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
}
cow = new Mammal('Sally', 'cow', 'brown');
cow.sound('MOOOOOOOO!!!');

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const jj = dragons.includes('John');
console.log(jj);
const jj1 = dragons.filter(name => name.includes('John'));
console.log(jj1);

