import { Greeter } from "./greeterparent";

export class LoudGreeter extends Greeter {
    extra: string;
    constructor(greeting: string, extra: string) {
        super(greeting)
        this.extra = extra
    }

    addVolume(): void {
        this.extra += "!"
    }

    greet (name: string): string {
        return `${this.greeting}, ${name}${this.extra}`
    }
}