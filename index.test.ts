import { Greeter } from "./greeterparent";
import { JavaScriptGreeter } from "./javascriptgreeter";
import { LoudGreeter } from "./loudgreeter";

describe("greeting", function () {
  test("greeting is set from params", () => {
    let greeter: Greeter = new Greeter("Hello world");
    expect(greeter.greeting).toBe("Hello world");
  });
  test("greet works when called and constructs string", () => {
    let greeter: Greeter = new Greeter("Hello");
    let greeting: string = greeter.greet("Nick");
    expect(greeting).toBe("Hello, Nick")
  });
  test("greet works when called and constructs string", () => {
    let greeter: Greeter = new Greeter("Sup yall it's me your boy");
    let greeting: string = greeter.greet("Asmongold");
    expect(greeting).toBe("Sup yall it's me your boy, Asmongold")
  });
  test("greet works when called and constructs string", () => {
    let greeter: Greeter = new Greeter("Hio");
    let greeting: string = greeter.greet("Jonathon");
    expect(greeting).toBe("Hio, Jonathon")
  });
  test("extender method", () => {
    let greeter: JavaScriptGreeter = new JavaScriptGreeter("Sup yall it's me your boy");
    let result: string = greeter.greet("Asmongold");
    expect(result).toBe("console.log(Sup yall it's me your boy, Asmongold)")
  });

  test("extra method", () => {
      let greeter: LoudGreeter = new LoudGreeter("Sup yall it's me your boy", "!");
      let result: string = greeter.greet("Asmongold")
      greeter.addVolume();
      expect(result).toBe("Sup yall it's me your boy, Asmongold!");

  })

  test("extra method", () => {
    let greeter: LoudGreeter = new LoudGreeter("Sup yall it's me your boy", "!");
    let result: string = greeter.greet("Asmongold")
    greeter.addVolume();
    greeter.addVolume();
    expect(result).toBe("Sup yall it's me your boy, Asmongold!!");

})
});
