class Particle {

  constructor(loc, fixed = false) {
    this.loc = loc;
    this.oldLoc = loc;
    this.fixed = fixed;
  }

  applyForce(f) {
    this.loc = Vector2d.add(this.loc, f);
  }

  update() {
    if (!this.fixed) {
      const currLoc = this.loc;
      const vel = Vector2d.subtract(currLoc, this.oldLoc);
      this.oldLoc = this.loc;
      this.loc = Vector2d.add(this.loc, vel);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }

}
