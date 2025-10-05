const buttons = document.querySelectorAll('.button');
const bod = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});




// by using switch case

const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener("click", (e) => {
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id
    // }

    let x = e.target.id
    console.log(x)

    switch (x) {
      case "grey":
        body.style.backgroundColor = e.target.id
        break;
      case "white":
        body.style.backgroundColor = e.target.id
        break;
      case "blue":
        body.style.backgroundColor = e.target.id
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id
        break;
      
      default:
        console.log("Click on the color box")
        break;
    }
  })
})
