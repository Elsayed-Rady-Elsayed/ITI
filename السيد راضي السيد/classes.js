export class shape {
  constructor(_width, _height) {
    this.width = _width;
    this.height = _height;
    if (this.constructor == shape) {
      throw "abstract class cant be obj";
    }
  }
  calcPerimeter() {}
  calcArea() {}
}
export class rectangle extends shape {
  constructor(_shapeName, _width, _height) {
    super(_width, _height);
    this.shapeName = _shapeName;
  }
  calcPerimeter() {
    return (_width + _height) * 2;
  }
  calcArea() {
    return _width * _height;
  }
}
export class square extends shape {
  constructor(_shapeName, _side) {
    this.side = _side;
    this.shapeName = _shapeName;
  }
  calcPerimeter() {
    return _side * 4;
  }
  calcArea() {
    return _side * _side;
  }
}
