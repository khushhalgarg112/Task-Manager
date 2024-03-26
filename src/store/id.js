import { atom } from 'recoil';

// Define an atom representing an id
export const myIdState = atom({
  key: 'myIdState', // Unique identifier for the state
  default: 1, // Initial value is this state
});