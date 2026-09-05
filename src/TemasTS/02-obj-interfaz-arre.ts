
interface Alumno{
    nombre:string;
    apllido:string;
    edad:number;
    email:string;
    nota?:number
}

const alumno:Alumno ={
    nombre: "Mario",
    apllido: "Martinez",
    edad: 22,
    email: "mariomart@gmail.com",
}

console.table(alumno)

let mascotas = ["perro","gato","perico","hamster","pez"]
console.log(mascotas)

mascotas[1] = "nuevo gato"
mascotas.push = "Leon"
console.log(mascotas)

let temp:(number|string)[] = []

temp.push(1)
temp.push("once")
console.log(temp)