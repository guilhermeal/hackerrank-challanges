'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main(inputLines);
});

function readLine(): string {
    return inputLines[currentLine++];
}

function SolveMeFirst(a: number, b: number) {
    return a+b;
}

function main(inputLines: string[]) {
    const a = parseInt(readLine());
    const b = parseInt(readLine());
    
    const res = SolveMeFirst(a,b);
    
    console.log(res);
    return res;   
}