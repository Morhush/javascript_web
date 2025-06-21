console.log('Start!')

class MainMenu {
    constructor(triggierSelector, containerSelector){
        this.triggier = document.querySelector(triggierSelector)
        this.container = document.querySelector(containerSelector)
        this.init()
    }
    init(){
        this.triggier.addEventListener('click', (e) => {
            this.container.classList.toggle('menuOpened')
        })
    }
}

new MainMenu('.menuTriggier', '.menuContainer')


