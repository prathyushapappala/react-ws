// const arr1 = [1, 2]
//
// const x = arr1[0]
// const y = arr1[1]
//
//
// const [a, b] = arr1
//
//
// const getData = (initialData) => {
//     let x = initialData
//     const setX = (value) => {
//         x = value
//     }
//
//     return [x, setX]
// }
//
//
// const [abc, setAbc] = getData(1)
//
// setAbc(2)
//
// console.log(abc)


const contacts = [
    {
        id: 1,
        fname: 'John',
        lname: 'John',
        city: 'Dallas'
    },
    {
        id: 2,
        fname: 'John',
        lname: 'John',
        city: 'Dallas'
    },
    {
        id: 3,
        fname: 'John',
        lname: 'John',
        city: 'Dallas'
    },
]


const formattedContacts = contacts.map((contact) => {
    contact.name = contact.fname + ' ' + contact.lname
    delete contact.fname
    delete contact.lname
    return contact.name + ' ' + contact.id + ' ' + contact.city
})

console.log(formattedContacts)

//
// [
//     'John 1 Dallas',
//         'John 2 Dallas',
//         'John 2 Dallas',
//         'John 2 Dallas'
// ]
//
// for (let i=0; i<contacts.length; i++) {
//     const curr = contacts[i]
//     console.log(curr.id + ' ' +  curr.name +  ' ' + curr.city)
// }
//
// contacts.forEach(processEachContact)
//
//
//
//
// const person = {
//     id: 1,
//     name: 'John',
//     city: 'Dallas'
// }

/*
const id = person.id
const name = person.name
*/

 // const {id: idNumber, name} = person