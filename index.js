/**
 * Write a function `getNamesOfGreedyGnomes(gnomes)` that takes in an array of
 * garden gnome objects and returns an array of the names of gnomes who have
 * stolen more than one decoration.
 *
 * A gnome looks like:
 * {
 *   name: 'Garbeldel',
 *   gardenCount: 2,
 *   age: 407,
 *   stolenDecorations: ['chair', 'water fountain']
 * }
 *
 * Rules:
 * - A gnome is "greedy" if it has stolen more than one decoration.
 * - Return only the names of greedy gnomes.
 * - If the input array is empty, return an empty array.
 *
 * Example:
 * const gnomes = [
 *   { name: 'Garbeldel', gardenCount: 2, age: 407, stolenDecorations: ['chair', 'fountain', 'statue'] },
 *   { name: 'Farbus', gardenCount: 3, age: 281, stolenDecorations: ['greek statue'] },
 *   { name: 'Peekle', gardenCount: 3, age: 101, stolenDecorations: [] },
 *   { name: 'Jorbles', gardenCount: 3, age: 900, stolenDecorations: ['wind chimes', 'mini golfer'] },
 * ];
 * getNamesOfGreedyGnomes(gnomes); // ['Garbeldel', 'Jorbles']
 */

const getNamesOfGreedyGnomes = (gnomes) => {
  //write your code here
};

module.exports = { getNamesOfGreedyGnomes };