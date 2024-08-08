type Person = {
    name: string;
    age: number;
}

const person: Person = {
    name: 'John',
    age: 23
};

let tech = 'TypeScript';
let color: any = 'Blue';

color = 123;
console.log(person, tech, color);