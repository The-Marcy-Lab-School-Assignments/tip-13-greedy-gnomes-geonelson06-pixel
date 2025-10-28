/**
 * Test suite for the getNamesOfGreedyGnomes problem
 *
 * Problem: Given an array of gnome objects, return an array of the names
 * of gnomes who have stolen more than one decoration.
 */

const { getNamesOfGreedyGnomes } = require('./index.js');

describe('getNamesOfGreedyGnomes', () => {
  describe('Example cases from README', () => {
    test('returns only names of gnomes with more than one stolen decoration', () => {
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

      expect(getNamesOfGreedyGnomes(gnomes)).toEqual(['Garbeldel', 'Jorbles']);
    });

    test('returns empty array when input is empty', () => {
      expect(getNamesOfGreedyGnomes([])).toEqual([]);
    });
  });

  describe('Edge cases', () => {
    test('excludes gnomes with exactly one stolen decoration', () => {
      const gnomes = [
        { name: 'Solo', gardenCount: 1, age: 10, stolenDecorations: ['hat'] },
        { name: 'Pair', gardenCount: 1, age: 11, stolenDecorations: ['hat', 'shoe'] },
      ];
      expect(getNamesOfGreedyGnomes(gnomes)).toEqual(['Pair']);
    });

    test('excludes gnomes with zero stolen decorations', () => {
      const gnomes = [
        { name: 'Clean', gardenCount: 2, age: 50, stolenDecorations: [] },
      ];
      expect(getNamesOfGreedyGnomes(gnomes)).toEqual([]);
    });

    test('does not mutate the input array or its objects', () => {
      const gnomes = [
        { name: 'A', gardenCount: 1, age: 10, stolenDecorations: ['a', 'b'] },
        { name: 'B', gardenCount: 1, age: 11, stolenDecorations: ['x'] },
      ];
      const before = JSON.parse(JSON.stringify(gnomes));
      getNamesOfGreedyGnomes(gnomes);
      expect(gnomes).toEqual(before);
    });
  });

  describe('Implementation constraints', () => {
    test('uses Array.prototype.filter and Array.prototype.map', () => {
      const filterSpy = jest.spyOn(Array.prototype, 'filter');
      const mapSpy = jest.spyOn(Array.prototype, 'map');

      const gnomes = [
        { name: 'A', gardenCount: 1, age: 10, stolenDecorations: ['a', 'b'] },
        { name: 'B', gardenCount: 2, age: 20, stolenDecorations: ['x'] },
        { name: 'C', gardenCount: 3, age: 30, stolenDecorations: ['y', 'z', 'w'] },
      ];

      const result = getNamesOfGreedyGnomes(gnomes);
      expect(result).toEqual(['A', 'C']);

      expect(filterSpy).toHaveBeenCalled();
      expect(mapSpy).toHaveBeenCalled();

      filterSpy.mockRestore();
      mapSpy.mockRestore();
    });
  });
});