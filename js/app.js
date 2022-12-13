const btnNextSoft = document.querySelector('.hero .main button')
btnNextSoft.addEventListener('click', btnNextSoftClick)
function btnNextSoftClick() {
   window.scrollTo(0, 1000)
}

// const root = document.querySelector(':root')
// root.style.setProperty('primary-color-')


// document.body.style.background = "#000 !important"
// document.body.style.color = "#fff"
// console.log('se');
document.querySelectorAll('.tabs .tab').forEach(el1 => {
   el1.onclick = function () {
      document.querySelectorAll('.box2  > div').forEach((el2, el2Id) => {
         if (el2Id == el1.dataset.id) {
            el2.classList.remove('d-none')
         } else {
            el2.classList.add('d-none')
         }
      })
      document.querySelectorAll('.tabs .tab').forEach(p => {
         if (p == el1) {
            p.classList.add('active')
         } else {
            p.classList.remove('active')
         }
      })
   }
})
