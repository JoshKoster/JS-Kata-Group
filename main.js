// code worked with Tony Cain, Colin Stacheirodt
const mainElement = document.querySelector('main')

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const kata1heading = document.createElement('h1')
const kata1UL = document.createElement('ul')
kata1heading.append('Kata 1')
mainElement.append(kata1heading)
mainElement.append(kata1UL)


  for(let counter = 1; counter <= 20; counter += 1 ){
    kata1LI = document.createElement('li')

      kata1LI.append(counter)

    kata1UL.append(kata1LI);

  }
const kata2heading = document.createElement('h1')
const kata2UL= document.createElement('ul')
kata2heading.append('Kata 2')
mainElement.append(kata2heading)
mainElement.append(kata2UL)


for (counter2 = 1; counter2 <= 20; counter2++) {
    if (counter2 % 2 === 0) {
    //   console.log(counter2);
    kata2LI = document.createElement('li')

    kata2LI.append(counter2)

  kata2UL.append(kata2LI);
    }


  }

const kata3heading = document.createElement('h1')
const kata3UL= document.createElement('ul')
kata3heading.append('Kata 3')
mainElement.append(kata3heading)
mainElement.append(kata3UL)


  for (let counter3 = 1; counter3 <=20; counter3 +=2) {
    kata3LI = document.createElement('li')

    kata3LI.append(counter3)

  kata3UL.append(kata3LI);
  }

const kata4heading = document.createElement('h1')
const kata4UL= document.createElement('ul')
kata4heading.append('Kata 4')
mainElement.append(kata4heading)
mainElement.append(kata4UL)
for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
    kata4LI = document.createElement('li')

    kata4LI.append(counter4)

  kata4UL.append(kata4LI);
  }

const kata5heading = document.createElement('h1')
const kata5UL= document.createElement('ul')
kata5heading.append('Kata 5')
mainElement.append(kata5heading)
mainElement.append(kata5UL)
for (let counter5 = 1; counter5 <= 100; counter5 +=1) {
  const isSquare = Number.isInteger(Math.sqrt(counter5));
  if (isSquare) {
    kata5LI = document.createElement('li')

    kata5LI.append(counter5)

  kata5UL.append(kata5LI);
  }
}


const kata6heading = document.createElement('h1')
const kata6UL= document.createElement('ul')
kata6heading.append('Kata 6')
mainElement.append(kata6heading)
mainElement.append(kata6UL)
for(let counter6 = 20; counter6>= 1; counter6-- ){
    kata6LI = document.createElement('li')

    kata6LI.append(counter6)

  kata6UL.append(kata6LI);

  }
const kata7heading = document.createElement('h1')
const kata7UL= document.createElement('ul')
kata7heading.append('Kata 7')
mainElement.append(kata7heading)
mainElement.append(kata7UL)
for (counter7 = 20; counter7 >= 1; counter7--) {
    if (counter7 % 2 === 0) {
    //   console.log(counter2);
    kata7LI = document.createElement('li')

    kata7LI.append(counter7)

  kata7UL.append(kata7LI);
    }

  }

const kata8heading = document.createElement('h1')
const kata8UL= document.createElement('ul')
kata8heading.append('Kata 8')
mainElement.append(kata8heading)
mainElement.append(kata8UL)

for (let counter8 = 19; counter8 >= 1; counter8 -= 2) {
  kata8LI = document. createElement('li')
  kata8LI.append(counter8)
  kata8UL.append(kata8LI)
}


const kata9heading = document.createElement('h1')
const kata9UL= document.createElement('ul')
kata9heading.append('Kata 9')
mainElement.append(kata9heading)
mainElement.append(kata9UL)
for (let counter9 = 100; counter9 >= 5; counter9 -= 5) {
    kata9LI = document.createElement('li')

    kata9LI.append(counter9)

  kata9UL.append(kata9LI);
  }

const kata10heading = document.createElement('h1')
const kata10UL= document.createElement('ul')
kata10heading.append('Kata 10')
mainElement.append(kata10heading)
mainElement.append(kata10UL)

for (let counter10 = 100; counter10 >= 1; counter10 -=1) {
    const isSquare = Number.isInteger(Math.sqrt(counter10));
    if (isSquare) {
      kata10LI = document.createElement('li')

      kata10LI.append(counter10)

    kata10UL.append(kata10LI);
    }
  }



const kata11heading = document.createElement('h1')
const kata11UL= document.createElement('ul')
kata11heading.append('Kata 11')
mainElement.append(kata11heading)
mainElement.append(kata11UL)
for(counter11=0; counter11<sampleArray.length; counter11++){
    kata11LI = document.createElement('li')

    kata11LI.append(sampleArray[counter11])

  kata11UL.append(kata11LI);
}

const kata12heading = document.createElement('h1')
const kata12UL= document.createElement('ul')
kata12heading.append('Kata 12')
mainElement.append(kata12heading)
mainElement.append(kata12UL)
for(counter12=0; counter12<sampleArray.length; counter12++){
    if(sampleArray[counter12]% 2 === 0){
    kata12LI = document.createElement('li')

    kata12LI.append(sampleArray[counter12])

  kata12UL.append(kata12LI);}
}

const kata13heading = document.createElement('h1')
const kata13UL= document.createElement('ul')
kata13heading.append('Kata 13')
mainElement.append(kata13heading)
mainElement.append(kata13UL)

for(counter13=0; counter13<sampleArray.length; counter13++){
    if((sampleArray[counter13]% 2)!== 0){
    kata13LI = document.createElement('li')

    kata13LI.append(sampleArray[counter13])

  kata13UL.append(kata13LI);}

}

const kata14heading = document.createElement('h1')
const kata14UL= document.createElement('ul')
kata14heading.append('Kata 14')
mainElement.append(kata14heading)
mainElement.append(kata14UL)

for (let counter14 = 0; counter14 < sampleArray.length; counter14 +=1) {
  // const isSquare = Number.isInteger(Math.pow(sampleArray[counter14], 2));
  // if (isSquare) {

    kata14LI = document.createElement('li')

    kata14LI.append(Math.pow(sampleArray[counter14],2))

  kata14UL.append(kata14LI);


  // }
// console.log(Math.pow(sampleArray[counter14], 2))
}



const kata15heading = document.createElement('h1')
const kata15UL= document.createElement('ul')
kata15heading.append('Kata 15')
mainElement.append(kata15heading)
mainElement.append(kata15UL)
const numbersThru20Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let result= 0
for(let counter15 = 0; counter15 < numbersThru20Array.length; counter15 += 1 ){

result +=numbersThru20Array[counter15]
}
kata15LI = document.createElement('li')

  kata15LI.append(result)

kata15UL.append(kata15LI);

const kata16heading = document.createElement('h1')
const kata16UL= document.createElement('ul')
kata16heading.append('Kata 16')
mainElement.append(kata16heading)
mainElement.append(kata16UL)

let result2= 0
for(let counter16 = 0; counter16 < sampleArray.length; counter16 += 1 ){

result2 +=sampleArray[counter16]
}
kata16LI = document.createElement('li')

  kata16LI.append(result2)

kata16UL.append(kata16LI);


const kata17heading = document.createElement('h1')
const kata17UL= document.createElement('ul')
kata17heading.append('Kata 17')
mainElement.append(kata17heading)
mainElement.append(kata17UL)


kata17LI = document.createElement('li')
  kata17LI.append(Math.min(...sampleArray))
kata17UL.append(kata17LI);

const kata18heading = document.createElement('h1')
const kata18UL= document.createElement('ul')
kata18heading.append('Kata 18')
mainElement.append(kata18heading)
mainElement.append(kata18UL)

kata18LI = document.createElement('li')
  kata18LI.append(Math.max(...sampleArray))
kata18UL.append(kata18LI);
