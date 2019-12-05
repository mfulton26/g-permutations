# g-permutations [![Node CI Status](https://github.com/mfulton26/g-permutations/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/mfulton26/g-permutations/actions?query=branch%3Amaster+workflow%3A%22Node+CI%22) [![codecov](https://codecov.io/gh/mfulton26/g-permutations/branch/master/graph/badge.svg)](https://codecov.io/gh/mfulton26/g-permutations)

> [Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) for iterating through all [permutations](https://en.wikipedia.org/wiki/Permutation) of an array.

Inspired by [`Guava`](https://github.com/google/guava), this is an implementation of the Plain Changes algorithm for permutations generation described in Knuth's "The Art of Computer Programming", Volume 4, Chapter 7, Section 7.2.1.2.

## Install

```sh
npm i g-permutations
```

## Usage

### [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)

```typescript
import permutations from "g-permutations";

for (const permutation of permutations(["a", "b", "c"])) {
  console.log(permutation);
}

// ["a", "b", "c"]
// ["a", "c", "b"]
// ["c", "a", "b"]
// ["c", "b", "a"]
// ["b", "c", "a"]
// ["b", "a", "c"]
```

### [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol)

```typescript
import permutations from "g-permutations";

const permutationsGenerator = permutations([1, 2]);
permutationsGenerator.next(); // { value: [1, 2], done: false };
permutationsGenerator.next(); // { value: [2, 1], done: false };
permutationsGenerator.next(); // { value: undefined, done: true };
```
