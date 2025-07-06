class Person{
    constructor(Name, LastName, Age){
        this.Name = Name;
        this.LastName = LastName;
        this.age = Age;
    }
    getFullName(){
        console.log(`O name é ${person.Name}, o sobrenome é ${person.LastName}`)
    };

    static getPersonName(){
        console.log('Hello world');
    }
};
const person = new Person('Ana', 'Silva', 52);

console.log(`O name é ${person.Name}, o sobrenome é ${person.LastName} e a idade é ${person.age}`);
person.getFullName();
Person.getPersonName();

class Animal{
    constructor(name){
        this.Name = name;
    };

    noise(){
        console.log(`O ${animal.Name} fez um barulho`)
    };
};

class Dog extends Animal{
    constructor(name){
        super(name);
    };

    Noise(){
        console.log(`O ${dog.Name} latiu`);
    };
};
const animal = new Animal('Simba');
const dog = new Dog('cachorro');

console.log(`O nome do animal é ${animal.Name}`)
animal.noise();
console.log(`O ${dog.Name} fez um barulho`)
dog.Noise();