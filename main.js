// code worked with Tony Cain, Colin Stacheirodt
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
const documentBody = document.querySelector('body')
const mainElement = document


const kata1heading = document.createElement('h1')
kata1heading.append('Katat 1')
mainElement.append(kata2heading)

for (let index = 1; index <= 20; index++) {
    let coolText = document.createElement('p')
    coolText.append(index)
    coolText.className = "Kata 1"
    documentBody.append(cooltext)
}

const kata2heading = document.createElement('h1')
kata2heading.append('Katat 2')
mainElement.append(kata2heading)

for (let index = 2; index <= 20; index++) {
    let coolText = document.createElement('p')
    coolText.append(index)
    coolText.className = "Kata 2"
    documentBody.append(cooltext)
}
const kata2heading = document.createElement('h1')
kata3heading.append('Katat 3')
mainElement.append(kata3heading)

for (let index = 1; index <= 20; index += 2) {
    let coolText = document.createElement('p')
    coolText.append(index)
    coolText.className = "Kata 2"
    documentBody.append(cooltext)
}

const kata4heading = document.createElement('h1')
kata4heading.append('Katat 4')
mainElement.append(kata4heading)

for (let index = 5; index <= 100; index+= 5) {
    let countByFive = document.createElement('p')
    countByFive.append(index)
    countByFive.className = "Kata 4"
    documentBody.append(countByFive)
}
const kata5heading = document.createElement('h1')
kata5heading.append('Katat 5')
mainElement.append(squareNumber)

for (let index = 1; index <= 10; index ++) {
    let squareNumber= document.createElement('p')
    squareNumber.append(index ** 2)
    squareNumber.className = "Kata 5"
    documentBody.append(squareNumber)
}

const kata6heading = docunment.createElement(h1)
kate6heading.append('Katat 6')
mainElement.append(kata6heading)

for (let index = 20; index > 0; index--) {
    let backWard = document.creeteElement('p')
    backWard.append(index)
    backWard.className = "Kata 6"
    mainElement.append(backWard)
}

const kata7heading = docunment.createElement(h1)
kate7heading.append('Katat 7')
mainElement.append(kata7heading)

for (let index = 20; index > 0; index -= 2) {
    let evenBack = document.creeteElement('p')
    evenBack.append(index)
    evenBack.className = "Kata 7"
    mainElement.append(evenBack)
}

const kata8heading = docunment.createElement(h1)
kate8heading.append('Katat 8')
mainElement.append(kata8heading)

for (let index = 19; index > 0; index -= 2) {
    let oddBack = document.creeteElement('p')
    oddBack.append(index)
    oddBack.className = "Kata 8"
    mainElement.append(oddBack)
}

const kata9heading = docunment.createElement(h1)
kate9heading.append('Katat 9')
mainElement.append(kata9heading)

for (let index = 100; index >= 5; index -= 5) {
    let downByFive = document.creeteElement('p')
    downByFive.append(index)
    downByFive.className = "Kata 9"
    mainElement.append(downByFive)
}

const kata10heading = docunment.createElement(h1)
kate10heading.append('Katat 10')
mainElement.append(kata10heading)

for (let index = 10; index > 0; index--) {
    let downSquarNumber = document.creeteElement('p')
    downSquarNumber.append(index ** 2)
    downSquarNumber.className = "Kata 10"
    mainElement.append(squarNumber)
}

const kata11heading = docunment.createElement(h1)
kate10heading.append('Katat 11')
mainElement.append(kata11heading)

for (let index = 0; index < sampleArray.length; index++) {
    let arrayList = document.createElement('p')
    arrayList.append(sampleArray[index])
    arrayList.className = "Kata 11"
    mainElement.append(arrayList)
}

const kata12heading = docunment.createElement(h1)
kate12heading.append('Katat 12')
mainElement.append(kata12heading)

for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 === 0) {
        let evenArrayList = document.createElement('p')
        evenArrayList.append(sampleArray[index])
        evenArrayList.className = "Kata 12"
        mainElement.append(evenArrayList)
    }
}
const kata13heading = docunment.createElement(h1)
kate13heading.append('Katat 13')
mainElement.append(kata13heading)

for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 === 1)
        let oddArrayList = document.createElement('p')
    oddArrayList.append(sampleArray[index])
    oddArrayList.className = "Kata 13"
    mainElement.append(oddArrayList)
}
const kata14heading = docunment.createElement(h1)
kate14heading.append('Katat 14')
mainElement.append(kata14heading)

for (let index = 0; index < sampleArray.length; index++) {
    let squareSampleArrayList = document.createElement('p')
    squareSampleArrayList.append(index ** 2)
    squareSampleArrayList.className = "Kata 14"
    mainElement.append(squareSampleArrayList)
}

const kata15heading = docunment.createElement(h1)
kate15heading.append('Katat 15')
mainElement.append(kata15heading)
    let sumNumber = 0
for (let index = 1; index <= 20; index++) {
    let sumOfAll = document.createElement('p')
    sumNumber += index
    sumOfAll.append(sumNumber)
    sumOfAll.className = "Kata 15"
    mainElement.append(sumOfAll)
}

const kata16heading = docunment.createElement(h1)
kate16heading.append('Katat 16')
mainElement.append(kata16heading)
 
    let reduceArray = document.createElement('p')
    reduceArray.append(sampleArray.reduce((a, b) => a + b))
    reduceArray.className = "Kata 16"
    mainElement.append(reduceArray)


const kata17heading = docunment.createElement(h1)
kate17heading.append('Katat 17')
mainElement.append(kata17heading)
 
   
