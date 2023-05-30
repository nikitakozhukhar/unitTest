import sum from '../basic';

import checkHealth from '../app';
import { sortCharacters } from '../app'

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

// export default function sum(items) {
//   let result = 0;
//   for (const item of items) {
//     result += item;
//   }
//   return result;
// }

test('check health', () => {
  const character = {
    name: 'маг',
    health: 90,
    };
  
  const healthState = checkHealth(character);

  expect(healthState).toBe('healthy');
});

test('sort characters', () => {
  let characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    ];

  let sortChar = sortCharacters(characters);

  expect(sortChar).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ])
 
})

