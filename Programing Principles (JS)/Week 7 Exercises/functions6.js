// 1. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

let list = [1, 2, 3, 4, 5, 6];
let n = list.length;
let d = 2; //number of times rotating the array

function rotateList(list, d, n) {
    //Initializing array temp with size n
    var temp = new Array(n);

    let k = 0;

    // Storing the n - d elements of
    // array list[] to the front of temp[]
    for (let i = d; i < n; i++) {
        temp[k] = list[i];
        k++;
    }

    // Storing the first d elements of array list[]
    //  into temp
    for (let i = 0; i < d; i++) {
        temp[k] = list[i];
        k++;
    }
    return console.log(temp);
}

rotateList(list, d, n);

// 2. Write a function that takes a number and returns array of its digits.

const number = 31;
const digits = String(number).split("").map(Number);

console.log(digits);

// 3. Write a program that prints a multiplication table for numbers up to 12.

// 4. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

// 5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

// 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
// poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
// broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).

// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

// 8. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

// 9. Write a function to find all the numbers greater than the average.

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40

// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:
// For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
// printed as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********