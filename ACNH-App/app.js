//pseudo code

//step 1: need to create event listeners that listen for clicks on the villagers "amibo"
//step 2: need to be able to change the background of the body when "amibo" is clicked 
//step 3: also, when "amibo" is clicked, the animal crossing 3d "amibo" comes up for specific villager
//step 4: other villager cards are hidden when not clicked
//step 5: when you click the "reset" button, the background changes back to the animal crossing game cover image and "amibo" card is hidden

//Movement Animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Animate Items
const title = document.querySelector('.title');
const villager = document.querySelector('.villager img');
const reset = document.querySelector('.reset');
const description = document.querySelector('.info p');



//Moving Animation Event

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight/ 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //Popout
  title.style.transform = 'translateZ(150px)';
  villager.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  description.style.transform = 'translateZ(125px)';
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = 'translateZ(0px)';
  villager.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
});

//Villager Change

document.getElementById('pekoeAmibo').onclick = pekoeAmibo
document.getElementById('azaleaAmibo').onclick = azaleaAmibo
document.getElementById('cocoAmibo').onclick = cocoAmibo
document.getElementById('deirdreAmibo').onclick = deirdreAmibo
document.querySelector('button').onclick = resetAll

//Pekoe Amibo

function pekoeAmibo() {
  document.querySelector('.card').style.backgroundImage = 'url(Assets/asia.jpeg)'
  card.style.backgroundRepeat = 'no-repeat'
  card.style.backgroundSize = 'cover'
  card.style.color = 'white'

  document.querySelector('.villagerAvi').src = 'Assets/pekoe.webp'
  document.querySelector('h2').textContent = 'Pekoe Island'
  document.querySelector('button').style.backgroundColor = '#ff872c'
  document.querySelector('p').style.backgroundColor = 'rgba(255, 161, 44, 0.8)'

  document.querySelector('.circle').style.background = 'linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(255, 161, 44))'
}

//Azalea Amibo


function azaleaAmibo() {
  document.querySelector('.card').style.backgroundImage = 'url(Assets/tropical.jpeg)'
  card.style.backgroundRepeat = 'no-repeat'
  card.style.backgroundSize = 'cover'
  card.style.color = 'white'

  document.querySelector('.villagerAvi').src = 'Assets/azalea.png'
  document.querySelector('h2').textContent = 'Azalea Island'
  document.querySelector('button').style.backgroundColor = '#ff872c'
  document.querySelector('p').style.backgroundColor = 'rgba(255, 161, 44, 0.8)'

   document.querySelector('.circle').style.background = 'linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(255, 161, 44))'
}

//Coco Amibo

function cocoAmibo() {
  document.querySelector('.card').style.backgroundImage = 'url(Assets/boho.jpeg)'

  card.style.backgroundRepeat = 'no-repeat'
  card.style.backgroundSize = 'cover'
  card.style.color = 'white'

  document.querySelector('.villagerAvi').src = 'Assets/coco.png'
  document.querySelector('h2').textContent = 'Coco Island'
  document.querySelector('button').style.backgroundColor = '#ff872c'
  document.querySelector('p').style.backgroundColor = 'rgba(255, 161, 44, 0.8)'

  document.querySelector('.circle').style.background = 'linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(255, 161, 44))'
}

//Deirdre Amibo

function deirdreAmibo() {
  document.querySelector('.card').style.backgroundImage = 'url(Assets/fall.jpeg)'

  card.style.backgroundRepeat = 'no-repeat'
  card.style.backgroundSize = 'cover'
  card.style.color = 'white'

  document.querySelector('.villagerAvi').src = 'Assets/deirdre.png'
  document.querySelector('h2').textContent = 'Deirdre Island'
  document.querySelector('button').style.backgroundColor = '#ff872c'

  document.querySelector('.circle').style.background = 'linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(255, 161, 44))'
  document.querySelector('p').style.backgroundColor = 'rgba(255, 161, 44, 0.8)'
}

//Reset Button

function resetAll() {
  document.querySelector('.card').style.backgroundImage = 'url(Assets/acnhBackground.webp)'

  card.style.backgroundRepeat = 'no-repeat'
  card.style.backgroundSize = 'cover'
  card.style.color = 'white'

  document.querySelector('.villagerAvi').src = 'Assets/acnhLogo.webp'
  document.querySelector('button').style.backgroundColor = '#2fe0cb'
  document.querySelector('h2').textContent = 'Welcome Home!'
  document.querySelector('p').style.backgroundColor = 'rgba(255, 161, 44, 0.8)'
  document.querySelector('p').style.backgroundColor = 'rgba(47, 224, 203, 0.8)'
  document.querySelector('.circle').style.background = 'linear-gradient(to right, rgba(47, 244, 203, 0.75), rgba(28, 128, 121))'
}

