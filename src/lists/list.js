'use strict' // @flow

import type {Iterator} from './iterator'

/**
 * https://docs.oracle.com/javase/8/docs/api/java/util/List.html
 */
interface List<T> {
  // Appends the specified element to the end of this list (optional operation).
  add(element: T): boolean;

  // Inserts the specified element at the specified position in this list (optional operation).
  addAtIndex(index: number, element: T): void;

  // Removes all of the elements from this list (optional operation).
  clear(): void;

  // Returns true if this list contains the specified element.
  contains(element: Object): boolean;

  // Compares the specified object with this list for equality.
  equals(element: Object): boolean;

  // Returns the element at the specified position in this list.
  get(index: number): T;

  // Returns true if this list contains no elements.
  isEmpty(): boolean;

  // Removes the element at the specified position in this list (optional operation).
  removeAtIndex(index: number): T;

  // Removes the first occurrence of the specified element from this list, if it is present (optional operation).
  removeElement(element: Object): boolean;

  // Replaces the element at the specified position in this list with the specified element (optional operation).
  set(index: number, element: T): T;

  // Returns the number of elements in this list.
  size(): number;

  // Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
  subList(fromIndex: number, toIndex: number): List<T>;

  // Returns an iterator over the elements in this list in proper sequence.
  iterator(): Iterator<T>;
}

export type {List}
