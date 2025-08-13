let myDiv = document.getElementById("my-div");

// Detect touch device
function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  let x, y; // Declare outside try
  try {
    x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (err) {
    return; // exit if touch coords fail
  }
  
  myDiv.style.left = x + "px";
  myDiv.style.top = y + "px";
};

// For mouse
document.addEventListener("mousemove", move);

// For touch
document.addEventListener("touchmove", move);
