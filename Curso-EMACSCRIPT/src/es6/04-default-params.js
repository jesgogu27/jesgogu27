function newUser(name, Age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'mx';
    console.log(name, age, country);
}

newUser();
newUser('David', 14, 'CO');


function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('David', 14, 'CO');