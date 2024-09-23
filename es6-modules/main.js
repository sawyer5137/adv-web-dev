import doIt from "./modules/function.js";
import Person from "./modules/class.js";
import { sayHello, sayGoodBye } from "./modules/functions.js";

doIt();
const p = new Person("Lu");
p.sayHello();

sayHello();
sayGoodBye();
