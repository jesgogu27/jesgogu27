
let skills: string[] = ['Bash', 'Counter', 'Healing']

interface character {
    name: string,
    hp: number,
    skills: string [],
    homeTown:  string
}


const strider: character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    homeTown: "Arjona"
}

console.table(strider);
export{};