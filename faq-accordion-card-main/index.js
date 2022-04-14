let acc = document.getElementsByClassName("accordion");
let i;
let box = document.querySelector(".boxImg");
console.log(box);
// box.style.marginLeft = "-120px";

// this is to add the drop down functionality for the accordion
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// this adds slide down animation when the accordion item is clicked
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
        let active = document.querySelectorAll(".accordion.active");
        console.log(active);
        for (let j = 0; j < active.length; j++) {
            active[j].classList.remove("active");
            active[j].nextElementSibling.style.maxHeight = null;
        }
        this.classList.toggle("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
  acc[i].addEventListener("mouseover", moveBox);
  acc[i].addEventListener("mouseout", returnBox);
}

function moveBox() {
  box.style.marginLeft = "-125px";
}

function returnBox() {
  box.style.marginLeft = "-92px";
}