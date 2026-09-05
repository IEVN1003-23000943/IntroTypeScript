
function sumar(a:number,b:number):number{
    let res:number = a+b
    //console.log(res)
    return res
}

const resultado = sumar(3,5)

console.log(resultado)

function multiplicar(m1:number = 2, base?:number, m2:number = 4):number{
    return m1*m2*base;
}

console.log(multiplicar())
console.log(multiplicar(3))
console.log(multiplicar(3,2))

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}

function mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad += x;
    console.log(mascota)
    console.log(mascota)
    console.log(mascota.mostrarEdad())
}

const nuevaMascota:Mascotas = {
    nombre: "firulaiz",
    edad: 5,
    raza: "pastor aleman",
    vacunado: true,
    mostrarEdad(){
        console.log(`la edad de ${this.nombre} es ${this.edad} y su raza es ${this.raza}`)
    }
}

mostrarMascota(nuevaMascota,3)