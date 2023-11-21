// dz1
// function duplicate (arr) {
//    return new Set(arr)
// }
// let array = [1, 2, 2, 1, 2, 3, 4, 5, 4, 3, 5, 4,6 , 6 ,7]
// let resultArray = duplicate(array)
// console.log(resultArray)

// dz2
// const booksArray = ['Учебник истории', 'Анна Каренина', 'Война и Мир', '1939', 'Учебник математики', 'Раннии Журавли', 'Жамиля']
// function filterBooks(books){
//    const booksWithU =  books.filter(book => book.toLowerCase().includes('у'))
//    const booksWithOutU = books.filter(book => !book.toLowerCase().includes('у'))
//    const mapBooks = booksWithU.map(book => `${book} - книга с буквой 'у'`)
//    console.log('Книги с буквой "у":')
//    console.log(mapBooks.join('\n'))
//    console.log('\nОстальные книги:');
//    console.log(booksWithOutU.join('\n'))
// }
// filterBooks(booksArray)

// dz3
const users = [
   { name: 'Alice', age: 25 },
   { name: 'Bob', age: 30 },
   { name: 'Charlie', age: 22 },
   { name: 'David', age: 40 },
   { name: 'Eva', age: 35 },
   { name: 'Frank', age: 28 },
   { name: 'Grace', age: 32 },
   { name: 'Hank', age: 50 },
]

let youngestUser = users[0]
let oldestUser = users[0]
for (let i = 1; i < users.length; i++) {
   if(users[i].age < youngestUser.age) {
      youngestUser = users[i]
   }if(users[i].age > oldestUser.age) {
      oldestUser = users[i]
   }
}

const ageDifference = Math.abs(oldestUser.age - youngestUser.age);
console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`);