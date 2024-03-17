import Character from '../character';

test('Test Character1', () => {
    const character = new Character("Майор", 'Zombie');
    expect(character).toEqual({name: "Майор", type: "Zombie", health: 100, level: 1, attack: 40, defence: 10});
});
test('Test Bowman', () => {
    const character = new Character("Майор", 'Bowman');
    expect(character).toEqual({name: "Майор", type: "Bowman", health: 100, level: 1, attack: 25, defence: 25});
});
test('Test Swordsman', () => {
    const character = new Character("Майор", 'Swordsman');
    expect(character).toEqual({name: "Майор", type: "Swordsman", health: 100, level: 1, attack: 40, defence: 10});
});
test('Test Magician', () => {
    const character = new Character("Майор", 'Magician');
    expect(character).toEqual({name: "Майор", type: "Magician", health: 100, level: 1, attack: 10, defence: 40});
});
test('Test Undead', () => {
    const character = new Character("Майор", 'Undead');
    expect(character).toEqual({name: "Майор", type: "Undead", health: 100, level: 1, attack: 25, defence: 25});
});
test('Test Daemon', () => {
    const character = new Character("Майор", 'Daemon');
    expect(character).toEqual({name: "Майор", type: "Daemon", health: 100, level: 1, attack: 10, defence: 40});
});
test('Test levelUp', () => {
    const character = new Character("Майор", 'Zombie');
    character.levelUp();
    expect(character).toEqual({ name: "Майор", type: "Zombie", health: 100, level: 2, attack: 48, defence: 12 });
});
test('Test levelUp 2', () => {
    expect(
        () => {
            const character = new Character("Майор", 'Zombie');
            character.health = -20;
            character.levelUp();
        }).toThrow(Error('Нельзя повысить левел умершего персонажа'));
});
test('Test damage', () => {
    const character = new Character("Майор", 'Zombie');
    character.damage(100);
    expect(character).toEqual({ name: "Майор", type: "Zombie", health: 10, level: 1, attack: 40, defence: 10 });
});
test('Test damage 2', () => {
    expect(
        () => {
            const character = new Character("Майор", 'Zombie');
            character.health = -20;
            character.damage(100);
        }).toThrow(Error('Нельзя понизить уровень жизни умершего персонажа'));
});
test('Test damage', () => {
    const character = new Character("Майор", 'Zombie');
    character.damage(500);
    expect(character).toEqual({ name: "Майор", type: "Zombie", health: 0, level: 1, attack: 40, defence: 10 });
});
test('Test Некорректный тип персонажа', () => {
    expect(()=>new Character("Майор", 'Rombie')).toThrow('Некорректный тип персонажа');
});
test('Test Некорректное имя персонажа', ()=>{
    expect(()=>new Character(8798987, 'Zombie')).toThrow(Error('Некорректное имя персонажа'));
});
