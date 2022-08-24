const person = {
    name: 'Peter',
    age: 23,
    gender: 'male',

    eating: function(){
        return 'yes eating something'
    }
}

console.log(`the person's name is ${person.name} and his/her age is ${person.age} and he/her can ${person.eating()}`)

const students = [
    {
        name: 'Peter',
        age: 23,
        gender: 'male',
    
        tellUsYourname: function(){
            return 'Peter'
        }
    },
    {
        name: 'Alice',
        age: 20,
        gender: 'female',
    
        tellUsYourname: function(){
            return 'Alice'
        }
    },

    {
        name: 'Paradise',
        age: 40,
        gender: 'male',
    
        tellUsYourname: function(){
            return 'Paradise'
        }
    }
]

// const {name, age, gender}  = person

students.forEach(student => console.log(student.name, student.age))

const filteredStudents = students.filter(student => student.age > 30)
console.log(filteredStudents)

const modifiedStudents = students.map(student =>{
    return {...student, level: '100'}
})

modifiedStudents.forEach(student => console.log(student.name, student.age, student.level-))
