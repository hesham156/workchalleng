const steps =Array.from(document.querySelectorAll('.step'))
const cl =Array.from(document.querySelectorAll('.cl'))
console.log(cl)
cl.forEach((elm)=>{
    elm.onclick=()=>{
        for(let i = 0 ; i<cl.length;i++){
              cl[i].classList.remove('activate')
        }
        elm.classList.add('activate')

    }
})
