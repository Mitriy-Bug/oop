// TODO: write your code here
//import sum from './basic';
import Character from './character';

//console.log(sum([1, 2]));
let character = new Character("Майор", 'Zombie')
console.log(character);
character.levelUp();
console.log(character);
character.damage(100);
console.log(character);