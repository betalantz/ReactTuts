let knightPosition = [1, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}
// expose moveKnight method which can change internal state
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

// logic to apply movement restrictions of chess rules
export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;
  
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}