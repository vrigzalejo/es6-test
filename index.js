/**
 * Created by vrigzlinuxmint13 on 1/11/16.
 */
"use strict";
/*
let type = 'grizzly';

while(true) {
	let type = 'polar';
	console.log(type);
	break;
}

console.log(type);
*/

/*const PI = Math.PI
PI = 123*/



/*
class Bear {
	constructor() {
		this.type = "bear"
	}
	says(say){
		console.log(this.type + ' says ' + say)
	}
}

class Grizzly extends Bear {
	constructor() {
		super()
		this.type = 'grizzly'
	}
}

let bear = new Grizzly()
bear.says('growl')
*/

/*
let bears = ['polar', 'koala'].filter((bear) => bear !== 'koala')
console.log(bears)
*/

/*let bears = ['polar', 'koala'].filter((bear) => {
	return bear !== 'koala'
})
console.log(bears)*/


/*
class Bear {
	constructor() {
		this.type = "bear"
	}
	says(say){
		*/
/*//*
/var self = this;
		setTimeout(function() {
			//console.log(self.type + ' says ' + say)
			console.log(this.type + ' says ' + say)
		//}, 1000)
		}.bind(this), 1000)*//*


		setTimeout(() => {
			console.log(this.type + ' says ' + say)
		}, 1000)
	}
}
var bear = new Bear()
bear.says('Vrigz')
*/


/*let bears = `
grizzly
polar
`;
console.log(bears);*/


/*let bears = 'grizzly';
let says = 'growl';
console.log(`The ${bears} says ${says}`);*/

/*
let bear = 'grizzly';
let says = 'growl';
let zoo = { bear,  says };
//console.log(zoo);
let grizzly = { type: 'grizzly', many: 2 };
let { type, many } = grizzly;
console.log(many, type);
*/

/*
function bear(type = 'grizzly') {
	console.log(type);
}
*/

/*
function bears(...types) {
	console.log(types);
}
bears('polar', 'grizzly');
*/

