// Comentario

/*
Comentario de varias líneas
ABC
FGHI
*/

console.log("Hola, JavaScript")

// Variables

var myString = "Esto es una cadena de texto"
console.log(myString)

let separacion = "-------------" 
console.log(separacion)

let myString2 = "Esto es una cadena de texto bien hecha"
myString2 = "Cambio de la cadena de texto" 
console.log(typeof myString2)
myString2 = 6
console.log(myString2)
console.log(typeof myString2)

console.log(separacion)

let myNumber = 7
myNumber = myNumber + 87
console.log(myNumber)

console.log(myString + "  " + myNumber)

console.log(separacion)

let myNumber2 = 7.2
console.log(myNumber2)
console.log(typeof myNumber2)

console.log(separacion)

let myBool = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

myBool = null
console.log(myBool + myNumber2)

myBool = undefined // No es correcto, mejor null
console.log(myBool)

let myUndefined
console.log(myUndefined)


// Constantes
console.log(separacion)

const MY_CONST = "Esto es mi constante"
// MY_CONST = "Cambio"
console.log(MY_CONST)


// Control de flujo
console.log(separacion)

myNumber = 10
myString = "adios"
if (myNumber == 10 && myString == "hola") {
    console.log("El valor es 10")
} else if (myNumber == 11  || myString == "adios") {
    console.log("El valor es 11")
} else {
    console.log("El valor no es 10")
}

console.log(separacion)

myBool = null

if (myBool == null){
    console.log("Null")
}

myBool = 123

if (myBool){
    console.log("Null")
}

//Funciones
console.log(separacion)

function myFunction(){
    console.log("Mi funcion")
}
myFunction()

function myFunction2(){
    return("Mi funcion 2")
}
console.log(myFunction2())

// Array (lista)
console.log(separacion)

let myList = ["Bryan", "Alvitres", 19, "Brax"]
console.log(myList)
console.log(typeof myList)
console.log(myList[0])
console.log(myList[1])
console.log(myList[3][1])

// Set
console.log(separacion)

let mySet = new Set(["Bryan", "Alvitres", 19, "Brax", "Brax"])
mySet.add("Diego")
console.log(mySet)
console.log(typeof mySet)

// Diccionario (mapa)
console.log(separacion)

let myMap = new Map([["Bryan", 19], ["Diego", 21 ], ["Pau", 22]])
myMap.set("Paga", 1000)
console.log(myMap)
console.log(myMap.get("Diego"))

// Bucles
console.log(separacion)
let separacion2 = "   "

for ( const value of myList){
    console.log(value)
}

console.log(separacion2)

for ( const value of myMap){
    console.log(value)
}

console.log(separacion2)

for ( const value of mySet){
    console.log(value)
}

console.log(separacion2)

let myCont = 0
while (myCont <= myList.length){
    console.log(myList[myCont])
    myCont++
}

// Clases
console.log(separacion)

class MyClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Tekko", 30)
console.log(myClass)
console.log(myClass.name)

// Enum
console.log(separacion)

const MyEnum = {
    DART: "dart",
    PYTHON: "python",
    JAVA: "java",
    C: "C"
}

const myEnum = MyEnum.PYTHON
console.log(myEnum)

