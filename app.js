let tugma = document.querySelector(`button`)
let input = document.getElementById(`id`)
let box = document.querySelector(`.box`)
let main = document.querySelector(`.main`)
let parol = document.getElementById(`parol`)


tugma.addEventListener(`click`,()=>{
    if (+input.value === 123456 && +parol.value === 78900) {
        alert(`parol tog'ri id ham tog'ri`)
        box.style.display = `none`
        main.style.display = `block`
        main.style.display = `none`
        main.style.display = `block`

    } else {
        alert(`parollingiz notog'ri yoki id notog'ri`)
        input.value = ``
    }
})