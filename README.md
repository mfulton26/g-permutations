# gf-permutations [![Build Status](https://travis-ci.org/mfulton26/gf-permutations.svg?branch=master)](https://travis-ci.org/mfulton26/gf-permutations) [![codecov](https://codecov.io/gh/mfulton26/gf-permutations/branch/master/graph/badge.svg)](https://codecov.io/gh/mfulton26/gf-permutations)

> [Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) for iterating through all [permutations](https://en.wikipedia.org/wiki/Permutation) of an array.

Inspired by [`Guava`](https://github.com/google/guava), this is an implementation of the Plain Changes algorithm for permutations generation described in Knuth's "The Art of Computer Programming", Volume 4, Chapter 7, Section 7.2.1.2.

## Install

```sh
npm i gf-permutations
```

## Usage

### [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)

```typescript
import permutations from "gf-permutations";

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
import permutations from "gf-permutations";

const permutationsGenerator = permutations([1, 2]);
permutationsGenerator.next(); // { value: [1, 2], done: false };
permutationsGenerator.next(); // { value: [2, 1], done: false };
permutationsGenerator.next(); // { value: undefined, done: true };
```
