
const submitBtn = document.getElementById('submit-btn');
const OkBtn = document.getElementById('ok-btn');
let timmer;

submitBtn.addEventListener('click', ()=>{
  document.getElementById('text').classList.add('p-show');
  timmer = setInterval(popUp, 3000);
  // popUp();
  
});

function popUp(){

  document.getElementById('container').classList.add('container-popUp');
}

OkBtn.addEventListener('click', ()=>{
  document.getElementById('text').classList.remove('p-show');
  document.getElementById('container').classList.remove('container-popUp');
  clearInterval(timmer);
});

