
document.addEventListener('DomContentLoaded', () => {
    // defining variables 
    let counter = document.getElementById('counter')
    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let heartButton = document.getElementById('heart')
    let likesUl = document.getElementsByClassName('likes')
    let pause = document.getElementById('pause')
    let form = document.getElementById('form')
    let ul 
    

    // stand alone functions 
    const intervalHandler = setInterval( () => {
            counter.innerText++;
        }, 1000)
    

    plus.addEventListener('click', () => counter.innerText++)
    minus.addEventListener('click', () => counter.innerText--)
    
    heartButton.addEventListener('click', () => {
        if(document.getElementById(counter.innerText) === null){
            let li = document.createElement('li')
            li.id = counter.innerText
            li.data = 1 
            li.innerHTML = counter.innerText + 'has been liked' + li.data + 'times'
            likesUl.appendChild(li)
        } else {
            let li = document.getElementById(counter.innerText)
            li.data++
            li.innerHTML = counter.innerText + 'has been liked' + li.data + 'times'
        }
    })

    
    pause.data = false 
    pause.addEventListener('click', () =>{
        if(pause.data === false){
            pause.data = !pause.data 
            pause.innerText = 'resume'
            window.clearInterval(intervalHandler)
            plus.disabled = true 
            minus.disabled = true 
            heartButton.disabled = true 
        } else {
            pause.data = !pause.data 
            pause.innerText = 'pause'
            plus.disabled = false  
            minus.disabled = false
            heartButton.disabled = false 
        }
    })

    form.addEventListener('submit', e => {
        e.preventDefault()
        let input = e.target[0].value 
        let li = document.createElement('li')
        li.innerText = input 
        ul.appendChild(li)

        input.innerText = ''

    })



  
});