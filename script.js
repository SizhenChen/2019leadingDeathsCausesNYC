//new array for selecting profile images and comments
let dropArray = [
  {
    "fullName": "Diseases of Heart (I00-I09, I11, I13, I20-I51)",
    "name": "Diseases of Heart",
    "image": "imgs/心脏病.png",
    "comment": `Heart disease remains the top cause of death. 
                Afterall, you die when your heart stops beating, right? <br>
                <br>
                My chest is empty so I wouldn't know how that feels, and I
                don't know how love can raise your heart beat. <br>
                <br>
                Hearts are very important for humans, huh.`
  },

  {
    "fullName": "Malignant Neoplasms (Cancer: C00-C97)",
    "name": "Malignant Neoplasm (Cancer)",
    "image": "imgs/癌症.png",
    "comment": `Cancer is one of the best employees, but I hate it because more death just means more work for me. <br>
               <br>
               But seriously, why do I call these diseases "employees" when I am cleaning their businesses. <br>
               <br>
               They should be paying me!`
  },

  {
    "fullName": "Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)",
    "name": "Mental and Behavioral Disorders due to Accidental Poisoning",
    "image": "imgs/毒.png",
    "comment": `Mental and behavioral disorders due to accidental poisoning? I don't even know what that is!<br>
              <br>
              Cancer's autographs are piled next to the trashcan by the way.`
  },

  {
    "fullName": "Diabetes Mellitus (E10-E14)",
    "name": "Diabetes Mellitus",
    "image": "imgs/糖尿病.png",
    "comment": `Ah, diabetes, you thought one of the most common diseases won't be a life threat. <br>
               <br>
               I am definitely quitting carbs. Wait, I don't even have a body.`
  },

  {
    "fullName": "Influenza (Flu) and Pneumonia (J09-J18)",
    "name": "Influenza (Flu) and Pneumonia",
    "image": "imgs/流感.png",
    "comment": `It is the post-pandemic era now so people might be super familiar to this disease right now. <br>
               <br>
               This guy is getting cocky, which is bad for our workplace. It's good to let humans suppress it a little.`
  },

  {
    "fullName": "Cerebrovascular Disease (Stroke: I60-I69)",
    "name": "Cerebrovascular Disease (Stroke)",
    "image": "imgs/脑血管疾病.png",
    "comment": `For elders, having a stroke once is unbelievably detrimental. Once my grandpa had a stroke and 
               his brain functions never recovered...<br>
               <br>
               Hold on, whose memory is this?`
  },


  {
    "fullName": "Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)",
    "name": "Accidents Except Drug Poisoning",
    "image": "imgs/意外.png",
    "comment": `This is a cause of death that is not under my surveillance. It's not a surprise that most of them are products of modernization.<br>
              <br>
              For me, it just means more work.`
  },

  {
    "fullName": "Chronic Liver Disease and Cirrhosis (K70, K73-K74)",
    "name": "Chronic Liver Disease and Cirrhosis",
    "image": "imgs/肝硬化.png",
    "comment": `Ugh, I googled this guy's portfolio and those are the grossest images I've ever seen ...
               not really, I'm literally THE DEATH and I've seen enough, but you certainly should quit drinking alcohol if it does that to your liver.`
  },

  {
    "fullName": "Chronic Lower Respiratory Diseases (J40-J47)",
    "name": "Chronic Lower Respiratory Diseases",
    "image": "imgs/慢性阻塞肺病.png",
    "comment": `Yeah, smoking can actually kill you. It is a known fact but some people are just in denial ... or do they wish to be killed?<br>
               <br>
               Since you can't ban it, why don't you just be the clever guy and let the others die for it instead?`
  },

  {
    "fullName": "Essential Hypertension and Renal Diseases (I10, I12)",
    "name": "Essential Hypertension and Renal Disease",
    "image": "imgs/高血压性肾病.png",
    "comment": `You know what, for someone who is not a doctor, this is a learning experience for me. This is the first time I've even heard of this disease!`
  },

  {
    "fullName": "Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)",
    "name": "Intentional Self-Harm",
    "image": "imgs/自残.png",
    "comment": `Ugh, I hate this guy. I have issues dealing with it. <br>
               <br>
               It just keeps neglecting all the good things I've done and nagging about my failures ... <br> 
               <br>
               No, I mean you deserve to be loved!`
  },

  {
    "fullName": "Alzheimer's Disease (G30)",
    "name": "Alzheimer's Disease",
    "image": "imgs/阿兹海默.png",
    "comment": `A lot of books and films were based on this disease, but nothing can compare to its reality. 
               Is it crueler to have me take a life away, or watch them live but no better than dead? Who knows.`
  },

  {
    "fullName": "Assault (Homicide: U01-U02, Y87.1, X85-Y09)",
    "name": "Assault (Homicide)",
    "image": "imgs/谋杀.png",
    "comment": `People hate and fear me, but to my defense, they are the major cause of their species' demise. <br>
              <br>
               I am always amazed of their inventions on how to torture each other.`
  },

  {
    "fullName": "All Other Causes",
    "name": "All Other Causes",
    "image": "imgs/其它原因.png",
    "comment": `Although there are tons of causes we haven't mentioned, they also deserve a place on this site.<br>
               <br>
               So yeah, this is like a consolation prize for them. Good job losers!`
  },
]

//first canvas in back ground, using instance mode to create more than one ps.j5 drawings on webpage
var sketch1 = function (f1) {
  f1.randomHeight = [];
  f1.randomSpeed = [];
  f1.startHeight = [];

  f1.setup = function () {
    f1.createCanvas(f1.windowWidth, f1.windowHeight + 350);
    let c1 = f1.color(255);
    let c2 = f1.color(223, 230, 247);

    for (let y = 0; y < f1.windowHeight + 350; y++) {
      let n = f1.map(y, 0, f1.windowHeight + 350, 0, 1);
      let newc = f1.lerpColor(c1, c2, n);
      f1.stroke(newc);
      f1.line(0, y, f1.windowWidth, y);
    }

    for (let i = 0; i < 26; i++) {
      f1.randomHeight[i] = f1.random(-200, f1.windowHeight + 350 / 1.01);
      f1.startHeight[i] = f1.random(-200, 0);
    }
  }

  f1.draw = function () {
    for (let j = 0; j < 26; j++) {
      f1.randomSpeed[j] = f1.random(0, 1.5);

      let w = 0;
      f1.noStroke();

      f1.mappedRed = f1.map(f1.startHeight[j], 0, f1.windowHeight / 2, 245, 218)
      f1.mappedGreen = f1.map(f1.startHeight[j], 0, f1.windowHeight / 2, 133, 63)
      f1.mappedBlue = f1.map(f1.startHeight[j], 0, f1.windowHeight / 2, 160, 101)
      f1.fill(f1.mappedRed, f1.mappedGreen, f1.mappedBlue);

      if (f1.startHeight[j] < f1.randomHeight[j]) {
        f1.startHeight[j] = f1.startHeight[j] + f1.randomSpeed[j];
        f1.circle(w + (f1.width / 25) * j, f1.startHeight[j], f1.width / 21);
      }
    }
    // console.log("drawn")
  }
}

var bgCanvas = new p5(sketch1, "bg")


// // The reference to the section in our HTML
// let parentElement = document.getElementById("profiles")

// //This is some of the JQUERY code that will easily let use use this API. 
// $.ajax({
//     url: "https://data.cityofnewyork.us/resource/jb7j-dtam.json",
//     type: "GET",
//     data: {
//         "$limit": 5000,
//         "$$app_token": "qImrmYf9aasT8PRfyXl6hUOTm"
//     }
// }).done(function (data) {
//     console.log(data[0].leading_cause)

// });

//after selecting the drop menu on left, show corresponding image and name of the cause, and comment of reaper
let diseasesDrop = document.getElementById("diseasesDropdown")
diseasesDrop.addEventListener('change', getData)
console.log(diseasesDrop.value)

function getData() {
  let Name = document.getElementById("Name")
  Name.innerHTML = `<div>${diseasesDrop.options[this.selectedIndex].text}</div>`
  for (let i = 0; i < dropArray.length; i++) {
    let Image = document.getElementById("Image")
    let Comment = document.getElementById("comment")
    if (dropArray[i].fullName == diseasesDrop.value) {
      Image.src = dropArray[i].image
      Comment.innerHTML = dropArray[i].comment
      console.log(Image.src)
    }
  }
}

//toggle (hide and show) the drop menu when clicking drop buttons
function causesDrop() {
  document.getElementById("diseasesDropdown").classList.toggle("show");
}

function sexDrop() {
  document.getElementById("sexDropdown").classList.toggle("show");
}

function raceDrop() {
  document.getElementById("raceDropdown").classList.toggle("show");
}

//retrieve data to form the moving image
let allDeathCounts; //all deaths of the chosen disease in year 2019

let raceDeathCounts; //deaths of the chosen race in the chosen disease in 2019

let sexDeathCounts; //deaths of the chosen sex in the chosen disease in 2019

let SexAndRaceDeathCounts; // the amount of death after three parameters are selected

//get the death data after choosing the disease
let causeDropdown = document.getElementById("diseasesDropdown");
// causeDropdown.addEventListener("change", retrieveData);

//get the race death data after choosing the race
let raceDropdown = document.getElementById("raceDropdown");
// raceDropdown.addEventListener("change", retrieveData);

let sexDropdown = document.getElementById("sexDropdown");
// sexDropdown.addEventListener("change", retrieveData);

function retrieveData() {
  fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json") //原链接：https://data.cityofnewyork.us/resource/jb7j-dtam.json
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      allDeathCounts = 0;

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].year == 2019 &&
          data[i].leading_cause ==
          causeDropdown.value
        ) {
          // console.log(data[i].deaths);
          allDeathCounts = allDeathCounts + parseInt(data[i].deaths);
        }
      }

      console.log(causeDropdown.value);

      // document.getElementById("total").append(allDeathCounts);
      console.log("all: " + allDeathCounts);

      sexDeathCounts = 0;

      for (let k = 0; k < data.length; k++) {
        if (
          data[k].year == 2019 &&
          data[k].leading_cause ==
          causeDropdown.value &&
          data[k].sex == sexDropdown.value
        ) {
          sexDeathCounts = sexDeathCounts + parseInt(data[k].deaths);
        }
      }

      console.log("sex: " + sexDeathCounts);

      raceDeathCounts = 0;

      for (let j = 0; j < data.length; j++) {
        if (
          data[j].year == 2019 &&
          data[j].leading_cause ==
          causeDropdown.value &&
          data[j].race_ethnicity == raceDropdown.value
        ) {
          raceDeathCounts = raceDeathCounts + parseInt(data[j].deaths);
        }
      }

      console.log("race: " + raceDeathCounts);


      SexAndRaceDeathCounts = 0

      for (let l = 0; l < data.length; l++) {
        if (
          data[l].year == 2019 &&
          data[l].leading_cause ==
          causeDropdown.value &&
          data[l].race_ethnicity == raceDropdown.value &&
          data[l].sex == sexDropdown.value
        ) {
          SexAndRaceDeathCounts = SexAndRaceDeathCounts + parseInt(data[l].deaths);
        }
      }
      console.log("sex and race: " + SexAndRaceDeathCounts);


      let generateTotal = document.getElementById("generateTotal")
      generateTotal.innerHTML = `Total Deaths: ${allDeathCounts} `

      let sexDrop = document.getElementById("sexDropdown")
      let generateSex = document.getElementById("generateSex")
      generateSex.innerHTML = `${sexDrop.value}: ${sexDeathCounts} `

      let raceDrop = document.getElementById("raceDropdown")
      let generateRace = document.getElementById("generateRace")
      generateRace.innerHTML = `${raceDrop.value}: ${raceDeathCounts} `

      let generateSexAndRace = document.getElementById("generateSexAndRace")
      generateSexAndRace.innerHTML = `${sexDrop.value} and ${raceDrop.value}: ${raceDeathCounts + sexDeathCounts}`

      console.log('data retrieved')

      // document.getElementById("Map").clear()

      drawMap()


    });
}


//new instance for the another canvas in #mapContainer, make the canvas only created once
var sketch2 = function (f2) {

  f2.setup = function () {
    // remove()

    if (f2.windowWidth < 400) {
      f2.createCanvas(300, 300);
    } else {
      f2.createCanvas(420, 440);
    }

    // f2.createCanvas(420, 440);

  }
}

//make what is inside the canvas another function, and call it everytime when the retrieve data function runs (clicking generate button)
function drawMap() {
  console.log(canvas)

  canvas.background(255)

  canvas.xArray = []
  canvas.yArray = []
  canvas.sizeArray = []

  for (let i = 0; i < parseInt(allDeathCounts / 10); i++) {

    canvas.randomX = canvas.random(canvas.width / 8, (canvas.width / 8) * 7);
    canvas.randomY = canvas.random(canvas.height / 8, (canvas.height / 8) * 7);
    canvas.randomSize = canvas.random(canvas.width / 40, canvas.width / 8)

    canvas.xArray.push(canvas.randomX)
    canvas.yArray.push(canvas.randomY)
    canvas.sizeArray.push(canvas.randomSize)
  }

  canvas.draw = function () {
    // f2.background(255, 0)

    canvas.frameRate(18)
    // console.log("all Death reasure: "+allDeathCounts/10)

    for (let i = 0; i < parseInt(allDeathCounts / 10); i++) {

      if (i < allDeathCounts / 10 - SexAndRaceDeathCounts / 10) {
        canvas.strokeWeight(3)
        canvas.fill(255)
      } else {
        canvas.strokeWeight(6)
        canvas.fill(223, 225, 247)
      }

      canvas.smooth()

      canvas.circle(canvas.xArray[i] + canvas.random(0, 2), canvas.yArray[i] + canvas.random(0, 3), canvas.sizeArray[i] + canvas.random(0, 5));
      // console.log('firing')

    }
  }

}

let canvas = new p5(sketch2, "Map")
// canvas.parent("Map")


function showsInstructions() {
  let comment = document.getElementById("comment")
  comment.innerHTML = `Feeling lost again? Fine, I'll repeat the instructions. <br>
   <br>First, choose the cause of death that you're interested in on the left. Then go 
   the right to choose the victims' sex and race. Click on the "Generate" button 
   to see the moving image.<br>
   <br>
   The amount and area that the white circles take represent the total deaths that this employee caused.
   The amount and area of the blue circles on top represent deaths of people of the sex and race that you filtered.
   The moving image only represents the rough idea, so don't focus on accuracy.<br>
   <br>
   What? Why does the sex options only have female and male? Uhhh perhaps our statistician died 
   like 50 years ago so the system is behind.<br>
   <br>
   We have limited resources so don't ask me these questions!`
}




