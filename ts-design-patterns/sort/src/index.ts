import { Sorter } from "./components/sorter";
import { NumbersCollection } from "./components/numberCollection";
import { CharacterCollection } from "./components/characterCollection";

const collection = new NumbersCollection([11, 0, -1, 7, 6, 11, 10, 6, -3, 9]);
collection.sort();
console.log(collection.data);

const str = new CharacterCollection("vishnu");
str.sort();
console.log(str.data);

const str2 = new CharacterCollection("ayaan");
str2.sort();
console.log(str2.data);
