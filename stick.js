class Stick {

  constructor(particleA, particleB) {
    this.particleA = particleA;
    this.particleB = particleB;
    this.len = Vector2d.distance(particleA.loc, particleB.loc);
  }

  update() {
    const diff = Vector2d.subtract(this.particleA.loc, this.particleB.loc);
    const curLen = Vector2d.distance(this.particleA.loc, this.particleB.loc);
    const norm = diff.normalise();
    const delta = curLen - this.len;

    if (this.particleA.fixed) {
      this.particleB.loc = Vector2d.add(this.particleB.loc, norm.scale(delta));
    } else if (this.particleB.fixed) {
      this.particleA.loc = Vector2d.add(this.particleA.loc, norm.scale(-delta));
    } else {
      this.particleA.loc = Vector2d.add(this.particleA.loc, norm.scale(-delta * 0.5));
      this.particleB.loc = Vector2d.add(this.particleB.loc, norm.scale(delta * 0.5));
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.particleA.loc.x, this.particleA.loc.y)
    ctx.lineTo(this.particleB.loc.x, this.particleB.loc.y);
    ctx.strokeStyle = "red";
    ctx.stroke();
  }
}
