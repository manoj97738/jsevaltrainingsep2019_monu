let variabelname: string;
variabelname = "100";
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let fullName: string = `Bob Bobbington`; // es6 feature
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}..`;
let list: number[] = [1, 2, 3];
let lists: string[] = ["Dasd", "asdad"];

let listO: Array<{ age: string, name: string }> = [
    { age: "dasd", name: "asdsa" },
    { age: "dasd", name: "asdsa" },
];

class User {
    public name: string;
    public name4: string;
    protected name3: string;
    private name2: string;
    /**
     * thios is mye dfsdfj
     */
    constructor() {
        this.name = "sd";
        this.name2 = "sd";
        this.name4 = "sd";
        this.name3 = "sd";
    }
    public getStr(p1: string, p2: string): string {
        this.getNu();
        return p1 + p1;
    }
    public getNu(): void {

    }
}
const u1 = new User();
u1.getNu();
u1.getStr("asd", "ASd");

//mmmm
//    matchMedia
  

