const removeCaroselBtn = document.querySelector('#removeCaroselBtn')
removeCaroselBtn.classList.add('hidden')

const congratulationsArray = [
    {
        id: 1,
        text: '111'
    },
    {
        id: 2,
        text: '222'
    },
    {
        id: 3,
        text: '333'
    },
    {
        id: 4,
        text: '444'
    },
    {
        id: 5,
        text: '555'
    },
    {
        id: 6,
        text: '666'
    },
    {
        id: 7,
        text: '777'
    },
    {
        id: 8,
        text: '888'
    },
    {
        id: 9,
        text: '999'
    },
    {
        id: 10,
        text: '10'
    },
    {
        id: 11,
        text: '11'
    }
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomText = ''

for (let i = 0; i < 15; i++) {

    let randomNum = getRandomInt(1, 11)
    
    congratulationsArray.forEach(el => {
        if(el.id == randomNum) {
            randomText = el.text
        }
    })

    const element = {
        id: randomNum,
        text: randomText
    }

    if(i == 0) {
        document.querySelector('.carousel-inner').innerHTML += `
            <div id="${element.id}" class="carousel-item" data-bs-interval="100000000000000000000">
                <div class="contentItem">
                    <p style="font-size: 2rem; padding-inline: 2rem">охуенный год был, да? а я тебе тут упущенного наверстала. бахай в кнопку и получай предсказание на следующий год от татарской ведьмы</p>
                </div>
            </div>
    `
    } 
    else if(i == 14) {
        document.querySelector('.carousel-inner').innerHTML += `
            <div id="${element.id}" class="carousel-item" data-bs-interval="100000000000000000000">
                <div class="contentItem">
                    <img src="/images/${element.id}.jpg"></img>
                </div>
            </div>
    `
    } 
    else {
        document.querySelector('.carousel-inner').innerHTML += `
            <div id="${element.id}" class="carousel-item" data-bs-interval="100">
                <div class="contentItem">
                <img src="/images/${element.id}.jpg"></img>
                </div>
                
            </div>
    `
    }
}

const carouselItems = document.querySelectorAll('.carousel-item')
const activeItem = carouselItems[0]
activeItem.classList.add('active')

function startCarosel() {
    const carouselExampleAutoplaying = document.querySelector('#carouselExampleAutoplaying')
    carouselExampleAutoplaying.classList.add('slide')
    
    activeItem.setAttribute('data-bs-interval', '100')

    const startCaroselBtn = document.querySelector('#startCaroselBtn')
    startCaroselBtn.classList.add('hidden')

    // без щепотки кринжа не заводится
    const eventOut = new MouseEvent('mouseout', {})
    carouselExampleAutoplaying.dispatchEvent(eventOut)

    setTimeout(() => {
        // const content = document.querySelector('#content')
        // content.classList.add('hidden')
        // content.classList.remove('content')
        const hiddenText = document.querySelector('#hiddenText')
        hiddenText.innerHTML = randomText
        hiddenText.classList.remove('hidden')
        removeCaroselBtn.classList.remove('hidden')
    }, 10000);
}


function removeCarosel() {
    window.location.reload()
}

// с сессион стораже записать константу, которая через нескоторое количество кликов выдаст пасхалку со ссылкой на гитхаб