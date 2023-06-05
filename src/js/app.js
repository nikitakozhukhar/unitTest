// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));


export default function checkHealth({ health }) {
	if (health >= 51) {
	  return 'healthy';
	}
	if (health >= 15 && health <= 50) {
		return 'wounded';
	} 
	if (health < 15) {
		return 'critical';
	}
  }

  export function sortCharacters(arr) {
	return arr.sort((prev, next) => next.health - prev.health)
  }
