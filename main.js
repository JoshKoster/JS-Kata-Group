// code worked with Tony Cain, Colin Stacheirodt
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
const documentBody = document.querySelector('body')
//const button1 = document.getElementById('katal1')
const mainElement = document.querySelector('main')
const kata1heading = document.createElement('h1')
kata1heading.append('Katat 1')
mainElement.append(kata1heading)

for (let index = 1; index <= 20; index++) {
    let coolText = document.createElement('p')
    coolText.append(index)
    coolText.className = "Kata 1"
    mainElement.append(coolText)
}

const kata2heading = document.createElement('h1')
kata2heading.append('Katat 2')
mainElement.append(kata2heading)

for (let index = 2; index <= 20; index += 2) {
    let evenText = document.createElement('p')
    evenText.append(index)
    evenText.className = "Kata 2"
    mainElement.append(evenText)
}

const kata3heading = document.createElement('h1')
kata3heading.append('Katat 3')
mainElement.append(kata3heading)

for (let index = 1; index <= 20; index += 2) {
    let evenText = document.createElement('p')
    evenText.append(index)
    evenText.className = "Kata 3"
    mainElement.append(evenText)
}
const kata4heading = document.createElement('h1')
kata4heading.append('Katat 4')
mainElement.append(kata4heading)

for (let index = 5; index <= 100; index += 5) {
    let countByFive = document.createElement('p')
    countByFive.append(index)
    countByFive.className = "Kata 4"
    mainElement.append(countByFive)
}

const kata5heading = document.createElement('h1')
kata5heading.append('Katat 5')
mainElement.append(kata5heading)

for (let index = 1; index <= 10; index ++) {
    let squarNumber = document.createElement('p')
    squarNumber.append(index ** 2)
    squarNumber.className = "Kata 5"
    mainElement.append(squarNumber)
}

const kata6heading = document.createElement('h1')
kata6heading.append('Katat 6')
mainElement.append(kata6heading)

for (let index = 20; index > 0; index--) {
    let backWard = document.createElement('p')
    backWard.append(index)
    backWard.className = "Kata 6"
    mainElement.append(backWard)
}

const kata7heading = document.createElement('h1')
kata7heading.append('Katat 7')
mainElement.append(kata7heading)

for (let index = 20; index > 0; index -= 2) {
    let evenBack = document.createElement('p')
    evenBack.append(index)
    evenBack.className = "Kata 7"
    mainElement.append(evenBack)
}

const kata8heading = document.createElement('h1')
kata8heading.append('Katat 8')
mainElement.append(kata8heading)

for (let index = 19; index > 0; index -= 2) {
    let oddBack = document.createElement('p')
    oddBack.append(index)
    oddBack.className = "Kata 8"
    mainElement.append(oddBack)
}

const kata9heading = document.createElement('h1')
kata9heading.append('Katat 9')
mainElement.append(kata9heading)

for (let index = 100; index > 5; index -= 5) {
    let downByFive = document.createElement('p')
    downByFive.append(index)
    downByFive.className = "Kata 9"
    mainElement.append(downByFive)
}

const kata10heading = document.createElement('h1')
kata10heading.append('Katat 10')
mainElement.append(kata10heading)

for (let index = 10; index > 0; index --) {
    let downSquarNumber = document.createElement('p')
    downSquarNumber.append(index ** 2)
    downSquarNumber.className = "Kata 10"
    mainElement.append(downSquarNumber)
}

const kata11heading = document.createElement('h1')
kata11heading.append('Katat 11')
mainElement.append(kata11heading)

for (let index = 0; index < sampleArray.length; index ++){
    let arrayList = document.createElement('p')
    arrayList.append(sampleArray[index])
    arrayList.className = "Kata 11"
    mainElement.append(arrayList)
}

const kata12heading = document.createElement('h1')
kata12heading.append('Katat 12')
mainElement.append(kata12heading)

for (let index = 0; index < sampleArray.length; index ++){
    if(sampleArray[index] % 2 === 0 ){
    let evenArrayList = document.createElement('p')
    evenArrayList.append(sampleArray[index])
    evenArrayList.className = "Kata 12"
    mainElement.append(evenArrayList)}
}

const kata13heading = document.createElement('h1')
kata13heading.append('Katat 13')
mainElement.append(kata13heading)

for (let index = 0; index < sampleArray.length; index ++){
    if(sampleArray[index] % 2 === 1 ){
    let oddArrayList = document.createElement('p')
    oddArrayList.append(sampleArray[index])
    oddArrayList.className = "Kata 13"
    mainElement.append(oddArrayList)}
}
const kata14heading = document.createElement('h1')
kata14heading.append('Katat 14')
mainElement.append(kata14heading)

for (let index = 0; index < sampleArray.length; index ++) {
    let arraySquarNumber = document.createElement('p')
    arraySquarNumber.append(sampleArray[index] ** 2)
    arraySquarNumber.className = "Kata 14"
    mainElement.append(arraySquarNumber)
}

const kata15heading = document.createElement('h1')
kata15heading.append('Katat 15')
mainElement.append(kata15heading)
    let sumNumber = 0
for (let index = 1; index <= 20; index ++) {
    let sumOfAll = document.createElement('p')
    sumNumber += index
    sumOfAll.append(sumNumber)
    sumOfAll.className = "Kata 15"
    mainElement.append(sumOfAll)
}

const kata16heading = document.createElement('h1')
kata16heading.append('Katat 16')
mainElement.append(kata16heading)

    let reduceArray = document.createElement('p')
    reduceArray.append(sampleArray.reduce((a, b) => a + b))  //all Collin
    reduceArray.className = "Kata 16"
    mainElement.append(reduceArray)

const kata17heading = document.createElement('h1')
kata17heading.append('Katat 17')
mainElement.append(kata17heading)
    
   for(item of sampleArray) {
    let minArray = Math.min(...sampleArray)
    let somNum = document.createElement('p')
    somNum.append(minArray)
    somNum.className = "Kata 17"
    mainElement.append(minArray)
   }

const kata18heading = document.createElement('h1')
kata18heading.append('Katat 18')
mainElement.append(kata18heading)
    
   for(item of sampleArray) {
    let maxArray = Math.max(...sampleArray)
    let somNum = document.createElement('p')
    somNum.append(maxArray)
    somNum.className = "Kata 18"
    mainElement.append(maxArray)
   }
