

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

let allcom = 0;


let music = false
prompt.addEventListener('submit', handleSubmit);

print('gang holo bang, print help for help)');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}


function print(message) {
    let li = document.createElement('li');

    li.textContent = message;
    allcom++
    output.appendChild(li);
    console.log("print");
}

function clr() {
  while (output.firstChild) {
      output.firstChild.remove();
  }
  console.log("clear");
}

let audio = new Audio('music/1.mp3');



function processInput(input) {
    if (allcom == 1) output.firstChild.remove();
    if (!input) return;
    if (input == "clr") {
      print(input);
      clr();
      return;
    } else if (input == "help") {
      print(input);
      clr();
      print("привет, чтобы все стереть напиши clr а дальше сам");
      allcom = 1;
      return;
    } else if (input == "1.0") {
        window.location.href="./1/rezume.html";
      return;
    }else if (input == "free" || "porno") {
        print(input)
        print("отправте 2 что бы остановить");
        music = true
        console.log("music t");
        audio.play()
        return;
      }else if (input == 2){
        print(input);
        if (music == true){
          audio.pause();
          audio.currentTime = 0;
          music = false
          console.log("music f");
          return;
        }
        return;


      return;
    }

    print(input);

    }
