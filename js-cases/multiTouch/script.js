const addCircleElem = (x, y, isRed, label) => {
    const circleElemMarkup = `
<div 
  class="circle ${isRed ? 'red' : ''}"
  style="
  top: ${y}px;
  left: ${x}px;
  "
  >
  <span class="circle__label">${label}</span>
</div>
`;

    document.body.insertAdjacentHTML('beforeend', circleElemMarkup);
};

document.addEventListener('pointerdown', (event) => {
    console.log(event);

    const { x, y, isPrimary, pointerId } = event;
    addCircleElem(x, y, isPrimary, pointerId);
});