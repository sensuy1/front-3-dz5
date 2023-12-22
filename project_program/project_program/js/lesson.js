// PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}



// TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}



// HOMEWORK 3 PART 1
const autoSlider = (index = 0) => {
    setInterval(() => {
        index++
        if (index > tabs.length - 1) {
            index = 0
        }
        hideTabContent()
        showTabContent(index)
    }, 3500)
}
autoSlider()



// CONVERTER
// const usd = document.querySelector('#usd')
// const som = document.querySelector('#som')
// const eur = document.querySelector('#eur')
//
// const converter = (element, targetElement, current) => {
//     element.oninput = () => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET','../data/converter.json')
//         xhr.setRequestHeader('Content-type', 'application/json')
//         xhr.send()
//
//         xhr.onload = () => {
//             const data = JSON.parse(xhr.response)
//
//             switch (current) {
//                 case 'som':
//                     targetElement.value = (element.value / data.usd).toFixed(2)
//                     break
//                 case 'usd':
//                     targetElement.value = (element.value * data.usd).toFixed(2)
//                     break
//                 case 'eur':
//                     targetElement.value = (element.value * data.eur).toFixed(2)
//                 default:
//                     break
//             }
//             if (element.value === '') {
//                 targetElement.value = ''
//             }
//         }
//     }
// }
//
// converter(som, usd, 'som')
// converter(usd, som, 'usd')
// converter(eur, som, 'eur')



// HOMEWORK 6 PART 1
const usd = document.querySelector('#usd')
const som = document.querySelector('#som')
const eur = document.querySelector('#eur')

const converter = (element, targetElement, targetElement2, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET','../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.usd2).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElement2.value = (element.value * data.usd2).toFixed(2)
                default:
                    break
            }
            if (element.value === '') {
                targetElement.value = ''
                targetElement2.value = ''
            }
        }
    }
}

converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd,'eur')
