class Vector2d {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector2d(this.x + v.x, this.y + v.y);
  }

  static add(v1, v2) {
    return new Vector2d(v1.x + v2.x, v1.y + v2.y);
  }

  subtract(v) {
    return new Vector2d(this.x - v.x, this.y - v.y);
  }

  static subtract(v1, v2) {
    return new Vector2d(v1.x - v2.x, v1.y - v2.y);
  }

  mult(n) {
    return new Vector2d(this.x * n, this.y * n);
  }

  scale(n) {
    return new Vector2d(this.x * n, this.y * n);
  }

  mag() {
    return Math.hypot(this.x, this.y);
  }

  normalise() {
    return new Vector2d(this.x / this.mag(), this.y / this.mag());
  }

  static distance(v1, v2) {
    const diff = Vector2d.subtract(v1, v2);
    return diff.mag();
  }
}
