const steps =Array.from(document.querySelectorAll('.step'))
const cl =Array.from(document.querySelectorAll('.cl'))
console.log(cl)
cl.forEach((elm)=>{
    elm.onclick=()=>{
        for(let i = 0 ; i<cl.length;i++){
              cl[i].classList.remove('activate')
              steps[i].classList.remove('sactivate')

        }
        elm.classList.add('activate')
        steps[cl.indexOf(elm)].classList.add('sactivate')
    }
})
