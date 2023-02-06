const steps =Array.from(document.querySelectorAll('.step'))
const cl =Array.from(document.querySelectorAll('.cl'))
const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
const Csteps = (cle,sts,theElm)=>{
    for(let i = 0 ; i<cl.length;i++){
        cle[i].classList.remove('activate')
        sts[i].classList.remove('sactivate')

  }
  theElm.classList.add('activate')
  sts[cle.indexOf(theElm)].classList.add('sactivate')

}
cl.forEach((telm)=>{
    telm.onclick=()=>{
        Csteps(cl,steps,telm)
    }
})

addEventListener('load',()=>{
    if(steps[0].classList.contains('sactivate')){
        btnBack.style.display="none"
        }else{
            btnBack.style.display="block"
        }

})
addEventListener('click',()=>{
    if(steps[0].classList.contains('sactivate')){
        btnBack.style.display="none"
        }else{
            btnBack.style.display="block"
        }

})
btnNext.onclick=()=>{
    const activateelm = document.querySelector('.sactivate')
     let index = steps.indexOf(activateelm)
     Csteps(cl,steps,cl[index+1<=3?index+1:index])
}
btnBack.onclick=()=>{
    const activateelm = document.querySelector('.sactivate')
     let index = steps.indexOf(activateelm)
     Csteps(cl,steps,cl[index-1])
}