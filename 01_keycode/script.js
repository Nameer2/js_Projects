const key = document.querySelector('.key')
const keyCode= document.querySelector('.keyCode')
const unicode = document.querySelector('.unicode')

window.addEventListener('keydown',(e)=>{
    key.innerHTML=`key= ${e.key}`
    keyCode.innerHTML=`key code = ${e.code}`
    unicode.innerHTML=`Unicode = ${e.key.charCodeAt(0)}`
    if(e.key==='F5'){
        e.preventDefault()
      }
      if(key.innerHTML=e.key===' '? "Space": e.key){
         }
        
})