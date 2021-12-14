function fn(numbers){
	let onceNumberIn =[...new Set(numbers)] 
	return onceNumberIn
}

function oddNumber(numbers){
	let res = 0
	const numberCount = numbers.reduce((result, number) => {
		result[number] = (result[number] || 0) +1;
		return result
	}, {})
	 Object.values(numberCount).forEach((item)=> {
		if(item%2 !== 0){
			res = numberCount[item]
		}
	})
	return res
}

function sumNumber(number){
	// console.log(number);
	if (number < 10) return number
	return sumNumber(number % 10 + sumNumber(Math.floor(number / 10)))
}

console.log(fn([1,1,1,2,2,2,3,4,5,5,6]));  
console.log(oddNumber([1,1,2,3,3,4,4,4,4]));
console.log(sumNumber(942));
// console.log('942%10',942%10);
// console.log('94%10',94%10);
// console.log('9%10',9%10);

// console.log('942/10',942/10);
// console.log('94/10',94/10);
// console.log('9/10',9/10);

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}

Array.prototype.filter2 = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = O.length;

  let res = [];

  for (let i = 0; i < len; i++) {
    if (i in O) {
      let current = this[i];
      if (callback.call(context, current, i, O)) {
        res.push(current);
      }
    }
  }

  return res;
};

let prime = array.filter2(isPrime);

console.log(prime);


let array2 = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

Array.prototype.map2 = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }
  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = O.length;

  let newArray = [];

  let i = 0;

  while (i < len) {
    if (i in O) {
      newArray[i] = callback.call(context, this[i], i, O);
    }

    i++;
  }

  return newArray;
};

let increase1 = (num) => num + 1;
let mul2 = (num) => num * 2;

console.log([1,3,5,6].filter2((item) => item >5));
console.log(array2.filter2(isPrime).map2(mul2).map2(increase1));




//6========
async function getPokemons(){
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
	const pokemons = await response.json();
	console.log(pokemons);
	console.log(pokemons.results);
	return pokemons;
}
getPokemons()
//6==========end
//7=============================start
async function getPokemon(pokemonName){
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
	if (!response.ok) {
    throw new Error(`Покемон, по имени <${pokemonName}> не найден.`);
	}
	const pokemons = await response.json();
	console.log(pokemons);
	return pokemons;
}
getPokemon('venusaur')
//================================7 end
//==================== 8 start
async function getPokemons(){
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
	const pokemons = await response.json();
	let len = pokemons.results.length
	let arr = []
	for (let i = 1; i < len+1; i++) {
		let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
		let pokemon = await res.json();
		arr.push(pokemon)
	}
	console.log(arr);
	return pokemons;
}
getPokemons()


//=======================8 end
//==== 9 start
async function  getValue(str, ms){
 return new Promise(resolve => setTimeout(resolve(str), ms));
}
getValue('lolkek',2000).then(resolve => console.log(resolve));
//===== 9 end 
