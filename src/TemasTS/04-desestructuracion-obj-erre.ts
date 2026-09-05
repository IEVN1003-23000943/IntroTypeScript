

interface Reproductor{
    volumen:nomber,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor ={
    volumen: 50,
    segundo: 36,
    cancion: "sexo en el oxxo",
    detalles:{
        autor: "Darkar",
        anio: 2021
    }
}
console.log('el volumen es: ',reproductor.volumen)
console.log('el segundo actual es: ',reproductor.segundo)
console.log('la cancion actual es: ',reproductor.cancion)
console.log('el autor es: ',reproductor.detalles.autor)
console.log('el anio es: ',reproductor.detalles.anio)
//destructuracion
const{volumen,segundo,cancion,detalles} = reproductor;
const{autor,anio} = detalles;
console.log('el volumen es: ', volumen)
console.log('el segundo actual es: ', segundo)
console.log('la cancion actual es: ', cancion)
console.log('el autor es: ', autor)
console.log('el anio es: ', anio)

//destruccturacion de arreglos
const dbz:string[] = ["Goku","Vegeta","Trunks"];
const [p1,p2,p3] = dbz;
console.log("personaje 1:", p1);
console.log("personaje 2:", p2);
console.log("personaje 3:", p3);