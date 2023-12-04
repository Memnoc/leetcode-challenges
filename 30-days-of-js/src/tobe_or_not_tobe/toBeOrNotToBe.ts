/*
 *
 Write a function expect that helps developers test their code. 
 It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".
 *
 * */


type ToBeOrNotToBe = {
  toBe: (val: any) => boolean | string;
  notToBe: (val: any) => boolean | string;
};

export function expect(val: any): ToBeOrNotToBe {
  const throwError = (errorStr: string) => { throw new Error(errorStr) };

  return {
    toBe: (e: any) => val === e ? true : throwError("Not Equal"),
    notToBe: (e: any) => val !== e ? true : throwError("Equal"),
  }
}


