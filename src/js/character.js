export default class Character {
    constructor(name, type) {
        if (name === undefined || name.length < 2 || name.length > 10 || typeof name!=='string') {
            throw new Error('Некорректное имя персонажа');
        }
        const arrType = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
        if (type === undefined || typeof type!=='string' ||!arrType.includes(type)) {
            throw new Error('Некорректный тип персонажа');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        const arrAttackDefence = [[25,25], [40,10], [10,40], [25,25], [40,10], [10,40]];
        if (type === 'Bowman') {
            this.attack = arrAttackDefence[0][0];
            this.defence = arrAttackDefence[0][1];
        } else if (type === 'Swordsman') {
            this.attack = arrAttackDefence[1][0];
            this.defence = arrAttackDefence[1][1];
        } else if (type === 'Magician') {
            this.attack = arrAttackDefence[2][0];
            this.defence = arrAttackDefence[2][1];
        } else if (type === 'Undead') {
            this.attack = arrAttackDefence[3][0];
            this.defence = arrAttackDefence[3][1];
        } else if (type === 'Zombie') {
            this.attack = arrAttackDefence[4][0];
            this.defence = arrAttackDefence[4][1];
        } if (type === 'Daemon') {
            this.attack = arrAttackDefence[5][0];
            this.defence = arrAttackDefence[5][1];
        }
    }
    levelUp() {
        if (this.health > 0) {
            this.level++;
            this.health = 100;
            this.attack += this.attack  * 0.20;
            this.defence += this.defence  * 0.20;
        } else {
            throw new Error('Нельзя повысить левел умершего персонажа');
        }
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
            if (this.health <= 0) {
                this.health = 0;
            }
        } else {
            throw new Error('Нельзя понизить уровень жизни умершего персонажа');
        }

    }
}
