function updateMask() {
  const backdrop = document.querySelector('.backdrop');
  const blurLayer = document.querySelector('.background::before') 
    || document.querySelector('.background').firstElementChild;

  if (!backdrop || !blurLayer) return;

  const rect = backdrop.getBoundingClientRect();
  const { top, left, width, height } = rect;

  // Build mask using CSS `inset()` with matching size
  const mask = `inset(${top}px calc(100% - ${left + width}px) calc(100% - ${top + height}px) ${left}px round 15px)`;

  blurLayer.style.webkitMask = mask;
  blurLayer.style.mask = mask;
}

// Run on load + resize
window.addEventListener('load', updateMask);
window.addEventListener('resize', updateMask);
