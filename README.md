# **Code Challenge:** `getNamesOfGreedyGnomes`

**Instructions**

1. Clone down this assignment to your `tip-challenges` directory in your environment.
2. Code your solution using JavaScript in `index.js`.
3. **Be sure to run and test your code thoroughly.**
4. By the end of class, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

---

## Problem

Write a function `getNamesOfGreedyGnomes(gnomes)` that takes in an array `gnomes` of garden gnome objects. Each gnome looks like this:

```js
{
  name: 'Garbeldel',
  gardenCount: 2,
  age: 407,
  stolenDecorations: ['chair', 'water fountain'],
}
```

A gnome is considered "greedy" if it has stolen *more than* one decoration.

You must return an array of only the *names* of each "greedy" garden gnome.

If the provided array of `gnomes` is empty, return an empty array.

Examples:

```js
const gnomes = [
  {
    name: 'Garbeldel',
    gardenCount: 2,
    age: 407,
    stolenDecorations: ['chair', 'fountain', 'statue'],
  },
  {
    name: 'Farbus',
    gardenCount: 3,
    age: 281,
    stolenDecorations: ['greek statue'],
  },
  {
    name: 'Peekle',
    gardenCount: 3,
    age: 101,
    stolenDecorations: [],
  },
  {
    name: 'Jorbles',
    gardenCount: 3,
    age: 900,
    stolenDecorations: ['wind chimes', 'mini golfer'],
  },
];

getNamesOfGreedyGnomes(gnomes); // Returns ['Garbeldel', 'Jorbles']

getNamesOfGreedyGnomes([]); // Returns []
```