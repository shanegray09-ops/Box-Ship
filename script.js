document.addEventListener("DOMContentLoaded", () => {
  const calcBtn = document.getElementById("calculate");

  calcBtn.addEventListener("click", () => {
    const L = parseFloat(document.getElementById("largeL").value);
    const W = parseFloat(document.getElementById("largeW").value);
    const H = parseFloat(document.getElementById("largeH").value);

    const l = parseFloat(document.getElementById("smallL").value);
    const w = parseFloat(document.getElementById("smallW").value);
    const h = parseFloat(document.getElementById("smallH").value);

    if ([L,W,H,l,w,h].some(isNaN)) {
      document.getElementById("result").innerText = "Please enter all dimensions.";
      return;
    }

    const rotations = [
      [l,w,h],[l,h,w],
      [w,l,h],[w,h,l],
      [h,l,w],[h,w,l]
    ];

    let maxFit = 0;

    rotations.forEach(r => {
      const fit =
        Math.floor(L / r[0]) *
        Math.floor(W / r[1]) *
        Math.floor(H / r[2]);
      if (fit > maxFit) maxFit = fit;
    });

    document.getElementById("result").innerText =
      `Maximum boxes that fit: ${maxFit}`;
  });
});