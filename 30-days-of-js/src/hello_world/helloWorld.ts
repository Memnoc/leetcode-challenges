type helloWorldFunction = () => string;


export function createHelloWorld(): helloWorldFunction {
  return () => "Hello World";
}
