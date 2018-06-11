'use strict' // @flow

/**
 * https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
 */
interface Iterator<T> {
  // Returns true if the iteration has more elements.
  hasNext(): boolean;

  // Returns the next element in the iteration.
  next(): T;

  // Removes from the underlying collection the last element returned by this iterator (optional operation).
  remove(): void;
}

export type {Iterator}
