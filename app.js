/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
canvas.width = 340;
canvas.height = 360;
const ctx = canvas.getContext('2d');

const particles = [];
const sticks = [];

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 30; j++) {
    const x = 10 + j * 8;
    const y = 40 + i * 8;
    const fixed = (j == 0);
    particles.push(new Particle(new Vector2d(x, y), fixed));
  }
}

for (let i = 0; i < 20; i++) {
  for (let j = 1; j < 30; j++) {
    let index = 30*i+j;
    sticks.push(new Stick(particles[(index - 1)], particles[index]));
    if(index>30){
      let vi = index-30;
      sticks.push(new Stick(particles[vi-1], particles[index-1]));
    }
    
  }
}

const f = new Vector2d(0.05, 0);
const g = new Vector2d(0, 0.1)

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const particle of particles) {
    particle.applyForce(f);
    particle.applyForce(g);
    particle.update();
    particle.draw(ctx);
  }

  for (const stick of sticks) {
    stick.update();
    stick.draw(ctx);
  }
  requestAnimationFrame(animate);
}

animate();
