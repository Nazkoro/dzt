function cutString(str, num){
	if(str.length > num) return str.slice(0,num) + '...'
	return str
}

function two(arr) {
	let map = new Map();
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		let count =0
		for (let j = 0; j < arr.length; j++) {
			if(arr[i] === arr[j]){
				count++
			}
		}
		set.add(count)
		map.set(arr[i], count)
	}
	map.forEach((value, key) => {
		if(value === Math.max(...set)){
			console.log('max count', key);
			return key
		}
	});
}
// fruitBasket.reduce((tally, fruit) => {
//   if (!tally[fruit]) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] = tally[fruit] + 1;
//   }
//   return tally;
// }, {});

function three(arr) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
		let result = {
			elementValue: arr[i],
			elementType: typeof arr[i],
			elementIndex: i
		}
		res.push(result)
	}
	return res
}

console.log(cutString('hello', 3))
console.log(two([1,1,1,2,2,2,2,3,4]));
console.log(three([1,'Hello', true]));


function rebuildUser(users){
	let women = []
	let men = []
	for (let i = 0; i < users.length; i++) {
		let user = users[i];
		if(user.gender === 'female'){
			let result = {
				id: user.id,
				fullName: `${user.first_name} ${user.last_name}`,
				email: user.email,
				gender: 'Female',
				ip_address: user.ip_address,
			}
			women.push(result)
		} else {
			let result = {
				id: user.id,
				fullName: `${user.first_name} ${user.last_name}`,
				email: user.email,
				gender: 'Male',
				ip_address: user.ip_address,
			}
			men.push(result)
		}
	}
const menAndWomen = { 'women' : women, 'men': men,}
	return menAndWomen
};



const users = [
	{
	id: 1,
	first_name: 'Jeanette',
	last_name: 'Penddreth',
	email: 'jpenddreth0@census.gov',
	gender: 'female',
	ip_address: '26.58.193.2',
	},
	{
	id: 2,
	first_name: 'Petr',
	last_name: 'Jackson',
	email: 'gfrediani1@senate.gov',
	gender: 'male',
	ip_address: '229.179.4.212',
	},
	{
	id: 3,
	first_name: 'Jeanette',
	last_name: 'Penddreth',
	email: 'jpenddreth0@census.gov',
	gender: 'female',
	ip_address: '26.58.193.2',
	},
	{
	id: 4,
	first_name: 'Petr',
	last_name: 'Jackson',
	email: 'gfrediani1@senate.gov',
	gender: 'male',
	ip_address: '229.179.4.212',
	},
];

console.log(rebuildUser(users))



function fromArrayToObject(videos){
	let obj = videos.reduce((total,amount) =>{
		total.push(`${amount.id} : ${amount.title}`)
		// total = total +(` ${JSON.stringify(amount.id)} : ${JSON.stringify(amount.title)}, `)
		return total
	}, [])
	return obj
}


const videos = [{
 id: 65432445,
 title: "The Chamber"
}, {
 id: 675465,
 title: "Fracture"
}, {
 id: 70111470,
 title: "Die Hard"
}, {
 id: 654356453,
 title: "Bad Boys"
}];
console.log(fromArrayToObject(videos)); 

function printIdWithRating5(newReleases){
	let arr = []
	for (let i = 0; i < newReleases.length; i++) {
		const elem = newReleases[i];
		if(elem.rating[0] === 5.0){
			arr.push(elem.id)
		}
		
	}
	return arr

}

const newReleases = [{
 id: 70111470,
 title: "Die Hard",
 boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [4.0],
 bookmark: []
}, {
 id: 654356453,
 title: "Bad Boys",
 boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [5.0],
 bookmark: [{ id: 432534, time: 65876586 }]
}, {
 id: 65432445,
 title: "The Chamber",
 boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [4.0],
 bookmark: []
}, {
 id: 675465,
 title: "Fracture",
 boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [5.0],
 bookmark: [{ id: 432534, time: 65876586 }]
}];

console.log(printIdWithRating5(newReleases));


function maxSquare(boxarts) {
	let colection = new Map();
	let arrMaxSquare = []
	boxarts.map( (item , i) =>{
		let square = item.width * item.height
		colection.set(i, square) 
		arrMaxSquare.push(square)
	})
	colection.forEach((value, key,) => {
		if(value === Math.max(...arrMaxSquare)){
			console.log('max square', value);
			console.log(boxarts[key].url);
			return boxarts[key].url
		}
	});
}



const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  }, 
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  }, 
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}, 
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
  }
];
console.log(maxSquare(boxarts)); 