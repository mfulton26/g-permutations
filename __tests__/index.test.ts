/**
 * Adapted from https://github.com/google/guava/blob/f4b3f611c4e49ecaded58dcb49262f55e56a3322/guava-tests/test/com/google/common/collect/Collections2Test.java
 */

import permutations from "../src";

test("0 elements", () => expect(Array.from(permutations([]))).toEqual([[]]));
test("1 element", () => expect(Array.from(permutations([1]))).toEqual([[1]]));
test("2 elements", () =>
  expect(Array.from(permutations([1, 2]))).toEqual([
    [1, 2],
    [2, 1]
  ]));
test("3 elements", () =>
  expect(Array.from(permutations([1, 2, 3]))).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [3, 1, 2],
    [3, 2, 1],
    [2, 3, 1],
    [2, 1, 3]
  ]));
test("3 out-of-order elements", () =>
  expect(Array.from(permutations([3, 2, 1]))).toEqual([
    [3, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [1, 2, 3],
    [2, 1, 3],
    [2, 3, 1]
  ]));
test("3 repeated elements", () =>
  expect(Array.from(permutations([1, 1, 2]))).toEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
    [2, 1, 1],
    [1, 2, 1],
    [1, 1, 2]
  ]));
test("4 elements", () =>
  expect(Array.from(permutations([1, 2, 3, 4]))).toEqual([
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 4, 2, 3],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [1, 4, 3, 2],
    [1, 3, 4, 2],
    [1, 3, 2, 4],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 4, 1, 2],
    [4, 3, 1, 2],
    [4, 3, 2, 1],
    [3, 4, 2, 1],
    [3, 2, 4, 1],
    [3, 2, 1, 4],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 3, 1],
    [4, 2, 3, 1],
    [4, 2, 1, 3],
    [2, 4, 1, 3],
    [2, 1, 4, 3],
    [2, 1, 3, 4]
  ]));
