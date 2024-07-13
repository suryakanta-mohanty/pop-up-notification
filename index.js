
const submitBtn = document.getElementById('submit-btn');
const OkBtn = document.getElementById('ok-btn');
let timmer;

submitBtn.addEventListener('click', ()=>{
  timmer = setInterval(popUp, 1000);
  // popUp();
  
});

function popUp(){
  document.getElementById('container').classList.add('container-popUp');
}

OkBtn.addEventListener('click', ()=>{
  document.getElementById('container').classList.remove('container-popUp');
  clearInterval(timmer);
});

