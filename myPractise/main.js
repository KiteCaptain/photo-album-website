import {alpha1, alpha2} from "./classes_practise";
alpha1();
let myCars  = ["toyota", "isuzu", "mobius"];

 let indexOfIsuzu = myCars.indexOf("isuzu");
 let indexOfUnknown = myCars.indexOf("benz")
//  console.log(indexOfIsuzu, indexOfUnknown)
//  console.log(indexOfIsuzu - indexOfUnknown)

var mapLangCurve = new Map();

mapLangCurve.set('python', 'low');
mapLangCurve.set('java', 'medium');
mapLangCurve.set('c++', 'high');

// console.log(mapLangCurve.size);
// console.log(mapLangCurve.get('java'));
// console.log(mapLangCurve.has('c+++'));

function printMyMapKeys () {
    let myMapKeys = []
    for (let key of mapLangCurve.keys()) {
        myMapKeys.push(key);
    }
    console.log(myMapKeys);

}
// printMyMapKeys();

// for (let item of mapLangCurve.entries()) {
//     console.log(item);
// }

// var setSquaredIntegers = new Set();
// setSquaredIntegers.forEach(function(value){
//     setSquaredIntegers.add(Math.pow(value, 2));
// })
// console.log(setSquaredIntegers)

alpha1();
alpha2();