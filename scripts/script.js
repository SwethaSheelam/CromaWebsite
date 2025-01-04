const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');
let n=0;
function changeSlide(){
  for(let i=0;i<imgs.clientHeight;i++){
     imgs[i].style.display='none';
  }
  imgs[n].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }

})