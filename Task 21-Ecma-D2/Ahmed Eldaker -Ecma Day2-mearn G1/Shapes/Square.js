import { Shape } from "./Shape.js";
export default class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
  }
  area() {
    return this.width * this.width;
  }
  perimeter() {
    return 4 * this.width;
  }
}
