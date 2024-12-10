//enahced object literals

function newUser(user, age, country, Uid){
    return {user, age, country, id: Uid};
}

console.log(newUser('jmg', 23, 'Col', 1));