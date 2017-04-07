
export function sayHello(name: string): string {
  return `Hello from ${name}!`
}

export function printHello(name: string): void {
  console.log(sayHello(name));
}