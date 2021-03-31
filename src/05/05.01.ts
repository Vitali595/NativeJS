export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => ({
        stack: ["cdd, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    })


const devs = [
    {
        stack: ["cdd, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["cdd, html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["cdd, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]

const dev3 = people.map(man => ({
    stack: ["cdd, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const  messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
   return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)

}