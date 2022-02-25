console.log('javascript loaded')

colorBtn = document.getElementById('color')
placeBtn = document.getElementById('place')
ritualBtn = document.getElementById('ritual')

colorBtn.addEventListener('click',(event =>{
    event.preventDefault()
    alert('I like all the colors')
}))
placeBtn.addEventListener('click',(event =>{
    event.preventDefault()
    alert('DevMountain')
}))
ritualBtn.addEventListener('click',(event =>{
    event.preventDefault()
    alert('sunday long run')
}))