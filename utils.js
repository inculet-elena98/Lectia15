// const year = 365;
// const month = 30;
// const week = 7;
// const message = 'Timpul pana la finalizarea productiei:'
// const responseFromBe = 562;

// if (responseFromBe / year >= 1) {
//   const isMultipleY = Math.floor(responseFromBe / year) > 1 ? 'years' : 'year'
//   const isMultipleM = Math.floor(responseFromBe % year / month) > 1 ? 'months' : 'month'
//   console.log(`${message} ${Math.floor(responseFromBe / year)}${isMultipleY}${Math.floor(responseFromBe % year / month)}${isMultipleY}`)
// } else if (responseFromBe / mont >= 1) {
//   const isMultipleM = Math.floor(responseFromBe / month) > 1 ? 'months' : 'month'
//   const isMultipleW = Math.floor(responseFromBe / month % week) > 1 ? 'weeks' : 'week'
//   console.log(`${message} ${Math.floor(responseFromBe / month)}${isMultipleM}${Math.floor(responseFromBe % month / week)}${isMultipleY}`)
// } else if (responseFromBe / week >= 1) {
//   const isMultipleW = Math.floor(responseFromBe / week) > 1 ? 'weeks' : 'week'
//   const isMultipleD = Math.floor(responseFromBe / month % day) > 1 ? 'days' : 'day'
//   console.log(`${message} ${Math.floor(responseFromBe / week)}${isMultipleW}${Math.floor(responseFromBe % month / week)}${isMultipleY}`)
// } else {
//   console.log('mai putin de o saptamina')
// }


// const conditie = true;
// const str = !conditie ? 'string adevarat' : 'string false'

// console.log(str)


// const obj1 = {
//   nume: 'Alex',
//   hobby: 'swiming'
// }
// const obj2 = {
//   nume: 'Victor',
//   hobby: 'reading'
// }
// const obj3 = {
//   nume: 'Vasile',
//   hobby: 'cycling'
// }
// const nume = 'Vasile'
// if (nume === obj1.nume) console.log(obj1.hobby)
// if (nume === obj2.nume) console.log(obj2.hobby)
// if (nume === obj3.nume) console.log(obj3.hobby)


// const anotimp = 'iarna'
// switch (anotimp) {
//   case 'vara':
//     console.log('text despre vara');
//     break;
//   case 'iarna':
//     console.log('text despre iarna');
//     break;
//   case 'primavara':
//     console.log('text despre primavara');
//     break;
//   case 'toamna':
//     console.log('text despre toamna');
//     break;
//   default:
//     console.log('Nu este denumire de anotimp')
// }


// class Animal {
//   constructor(options) {
//     this.legs = options.legs
//     this.hasTrail = options.hasTrail
//   }
// }
// class Lion extends Animal {
//   constructor(options) {
//     super(options)
//     this.specifacation = 'Is the king of jungle'
//   }
// }
// class Zebra extends Animal {
//   constructor(options) {
//     super(options)
//     this.specifacation = 'Afraid of Lions'
//   }
// }
// const simba = new Lion({ legs: 4, hasTrail: true })
// const martin = new Zebra({ legs: 4, hasTrail: true })

// console.log('simba', simba)
// console.log('martin', martin)


// const arr = [{
//   ke: 'test',
// }, {
//   ke: 'test',
// }, {
//   ke: 'test',
// }, {
//   ke: 'test',
// }, {
//   ke: 'test',
// }, {
//   ke: 'test',
// }]
// console.log('simba', simba)

// var nume
// var hobby
// var hair
// console.log(hair1)
// var nume = 'Elena'
// var hobby = 'dance'
// let hair = 'noir'

// console.log(hair)


// var nume
// nume = 'Alex'
// console.log(nume)
// nume = 'Alex'


// console.log(nume)

// let nume
// nume = 'Alex'



// sumFunc(4, 5)

// function sumFunc(number1, number2) {
//   console.log(number1 + number2)
// }
// var someFunc = function (arguments) {
//   console.log(arguments)
// }


// let i
// function sumFunc(number1, number2 = 3, number3) {
//   if (number1 > 3) i = 'mai mare ca 3'
//   if (number1 < 3) i = 'mai mic ca 3'
// }
// sumFunc(10)
// console.log(i)



export const showSeasonsDetails = function (season) {
  switch (season) {
    case 'vara':
      return 'text despre vara';
    case 'toamna':
      return 'text despre toamna';
    case 'iarna':
      return 'text despre iarna';
    case 'primavara':
      return 'text despre primavara';
    default:
      return 'nu este denumire de anotimp'
  }
}

// const numar = '00000000005'
// console.log(numar.split(''))

// export const formateNumber = function (number) {
//   return number.split('').filter(item => item !== '0').join('')
// }
// const arr = [1, 2, 3]
// console.log(arr.filter((item) => {
//   return item >= 2;
// }))



// const arr = [{
//   name: 'Iulian'
// }, {
//   name: 'san'
// }]
// console.log(arr.filter((item, index, arr) => {
//   console.log(item.name.slice(0, 1))
//   return item.name.slice(0, 1).toLowerCase() === 'i';
// }))