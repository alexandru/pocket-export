import * as utils from "./utils";
import * as fs from 'fs';
import * as process from 'process';
import * as net from 'net';

// utils.printHello("TypeScript");

// const isDone: boolean = true;
// const hex: number = 0xfff;

// const list: number[] = [1,2,3,4];
// const array: Array<number> = [1,2,3,4];
// const pula = "pizda";

// enum Color { Red, Green, Blue };
// const color: Color = Color.Green;

// let notSure = "";

const start = Date.now();

process.on('exit', () => {
  const timeTaken = Date.now() - start;
  console.error(`Time (s): ${timeTaken / 1000}`);
});

const server = net.createServer(socket => {
  socket.on("data", data => {
    socket.write(data);
  });
});

server.listen(8888);