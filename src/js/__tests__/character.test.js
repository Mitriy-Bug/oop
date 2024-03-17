import Character from '../character';

test('Test Character1', () => {
    const character = new Character("Майор", 'Zombie');
    expect(character).toEqual({name: "Майор", type: "Zombie", health: 100, level: 1, attack: 40, defence: 10});
});
test('Test Character2', () => {
    const character = new Character("Майор", 'Zombie');
    character.levelUp();
    expect(character).toEqual({ name: "Майор", type: "Zombie", health: 100, level: 2, attack: 48, defence: 12 });
});
test('Test Character3', () => {
    const character = new Character("Майор", 'Zombie');
    character.damage(100);
    expect(character).toEqual({ name: "Майор", type: "Zombie", health: 10, level: 1, attack: 40, defence: 10 });
});
test('Test Character4', () => {
    const characterFail = new Character("Майор", 'Rombie');
    expect(characterFail).toThrow('Некорректный тип персонажа');
});
test('Test Character5', () => {
    const characterFail2 = new Character(8798987, 'Zombie');
    expect(characterFail2).toThrow(Error('Некорректное имя персонажа'));
});