import { atom } from 'recoil';

// Define an atom representing an empty list
export const myListState = atom({
  key: 'myListState', // Unique identifier for the state
  default: [], // Initial value is an empty array
});