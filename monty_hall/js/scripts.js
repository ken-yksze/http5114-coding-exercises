const pageReady = () => {
  let stayCounter = 0;
  let switchCounter = 0;

  for (let i = 0; i < 1000; i++) {
    const car = Math.ceil(Math.random() * 3);
    const choice = Math.ceil(Math.random() * 3);

    let remove;

    do {
      remove = Math.ceil(Math.random() * 3);
    } while (remove === car || remove === choice);

    if (choice === car) {
      stayCounter++;
    } else {
      switchCounter++;
    }
  }

  const stayPercent = Math.round((stayCounter / 1000) * 100);
  const switchPercent = Math.round((switchCounter / 1000) * 100);

  document.getElementById("stay-percent").innerText = stayPercent;
  document.getElementById("stay-counter").innerText = stayCounter;

  document.getElementById("switch-percent").innerText = switchPercent;
  document.getElementById("switch-counter").innerText = switchCounter;
};

window.onload = pageReady;
