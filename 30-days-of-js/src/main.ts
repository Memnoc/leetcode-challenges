import './style.css'
import { createHelloWorld } from './hello_world/helloWorld'
import { expect } from './tobe_or_not_tobe/toBeOrNotToBe';

const hello = createHelloWorld();
console.log(hello)

console.log(expect(5).toBe(null)); // true
console.log(expect(5).notToBe(null)); // throws "Equal"


