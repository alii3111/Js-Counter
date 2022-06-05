var add = document.querySelector('.add')
var start = document.querySelector('.start')
var resetBtn = document.getElementById('reset')
var newNum = document.getElementById('content')
var targetValue = document.getElementById('target')
var targetBtn = document.getElementById('target-btn')
var targetSelected = document.querySelector('.target-selected')
var noTarget = document.querySelector('.no-target')
var pop = document.querySelector('.pop')

    

start.addEventListener('click', () =>{
    
    newNum.innerHTML++
    
    
    if(newNum.innerHTML ==currentValue){
        alert('You Have Riched Your Target')
    }
    if(newNum.innerHTML > 0){
        add.classList.add('incr')
        start.classList.remove('incr')
    }
})


add.addEventListener('click', () =>{
    
    newNum.innerHTML++
    
    
    if(newNum.innerHTML ==currentValue){
        alert('You Have Riched Your Target')
        pop.classList.add('pop-up')

    }

    if(newNum.innerHTML > currentValue){
        newNum.classList.add('big')


    }
    if(currentValue ==''){
        newNum.classList.remove('big')

    }
    

})

resetBtn.addEventListener('click', () =>{
if(newNum.innerHTML > 0){
   let result = confirm('Are you sure you wanna reset ?')

    if(result ===true){
        newNum.innerHTML = 0
    }else{
        newNum.innerHTML === newNum.innerHTML
    }
    if(newNum.innerHTML == 0){
        add.classList.remove('incr')
        start.classList.add('incr')
    }
    newNum.classList.remove('big')
    pop.classList.remove('pop-up')


}


})


var currentValue = ''

targetValue.addEventListener('input', (e) =>{
    currentValue = e.target.value
})

targetBtn.addEventListener('click', () =>{
 
if(targetValue.value !=='' && targetValue.value !==null && targetValue.value !==undefined){
    targetSelected.innerHTML = 'Target is ' +  currentValue
    if(noTarget.classList.contains('active')){
        targetSelected.classList.add('active')
        noTarget.classList.remove('active')

    }

    targetValue.value=''
}else{
    alert('please enter a valid target')
}
   

    })
    
