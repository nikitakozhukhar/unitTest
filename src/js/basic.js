// export default function sum(items) {
//   let result = 0;
//   for (const item of items) {
//     result += item;
//   }
//   return result;
// }

export function checkHealth({name, health}) {
  if (health >= 51) {
    console.log('healthy')
  }
  if (health >= 15 && health <= 50) {
    console.log('wounded')
  }
  else {
    console.log('critical')
  }
  return 
}

let character = {
  name: 'маг',
  health: 90,
}
checkHealth(character);
