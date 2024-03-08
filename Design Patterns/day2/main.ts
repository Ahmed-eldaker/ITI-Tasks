interface Shape {
  draw(): void;
}

class Rectangle implements Shape {
  draw(): void {
    console.log("Drawing a Rectangle");
  }
}

class Circle implements Shape {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

abstract class ShapeDecorator implements Shape {
  protected decoratedShape: Shape;

  constructor(decoratedShape: Shape) {
    this.decoratedShape = decoratedShape;
  }

  draw(): void {
    this.decoratedShape.draw();
  }
}

class RedShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape: Shape) {
    super(decoratedShape);
  }

  draw(): void {
    this.decoratedShape.draw();
    this.setRedBorder();
  }

  private setRedBorder(): void {
    console.log("Applying red border");
  }
}


class TransparentShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape: Shape) {
    super(decoratedShape);
  }

  draw(): void {
    this.decoratedShape.draw();
    this.setTransparency();
  }

  private setTransparency(): void {
    console.log("Applying transparency");
  }
}

class DecoratorPatternDemo {
  static main(): void {
    const circle: Shape = new Circle();
    const redCircle: Shape = new RedShapeDecorator(new Circle());
    const redRectangle: Shape = new RedShapeDecorator(new Rectangle());

    const transparentCircle: Shape = new TransparentShapeDecorator(new Circle());

    console.log("Circle with normal border");
    circle.draw();

    console.log("Circle of red border");
    redCircle.draw();

    console.log("Rectangle of red border");
    redRectangle.draw();

    console.log("Circle with transparency");
    transparentCircle.draw();
  }
}

DecoratorPatternDemo.main();
