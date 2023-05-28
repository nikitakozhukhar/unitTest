import sum from '../basic';

import checkHealth from '../basic'

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('check health', () => {
  const healthState = checkHealth({name, health});

  expect(healthState).toBe('healthy')
})


// export default function sum(items) {
//   let result = 0;
//   for (const item of items) {
//     result += item;
//   }
//   return result;
// }