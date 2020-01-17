class Slider {

    constructor() {
        this.count = 0; 
        this.interval;
        this.sliderItems = document.querySelectorAll('.slider .items .item');
        this.sliderItemsLength = this.sliderItems.length;
    }
    
    addFadeIn() {
        const self = this;
        self.sliderItems[self.count].classList.remove('fade-out');
        self.sliderItems[self.count].classList.add('fade-in');
    }
    
    removeFadeIn() {
        const self = this;

        for(const item of self.sliderItems) {
            item.classList.remove('fade-in');
            item.classList.add('fade-out');
        }
    }
    
    moveRight() {
        const self = this;

        self.removeFadeIn();
        
        if((self.count + 1) <= (self.sliderItemsLength - 1)) {
            self.count++;
        } else {
            self.count = 0;
        }
        
        self.addFadeIn();
    }
    
    moveLeft() {
        const self = this;

        self.removeFadeIn();
        
        if(self.count === 0) {
            self.count = self.sliderItemsLength - 1;
        } else {
            self.count--;
        }
        
        self.addFadeIn();
    }
    
    initSlider() {
        const self = this;

        self.interval = setInterval(() => {
            self.moveRight();
        }, 3000);
    }
    
    arrowsAction() {
        const arrows = document.querySelectorAll('.slider .arrow'), self = this;

        for(const arrow of arrows) {
            arrow.onclick = e => {
                e.preventDefault();
    
                clearInterval(self.interval);
                
                if(arrow.classList.contains('next')) {
                    self.moveRight();
                } else {
                    self.moveLeft();
                }
    
                self.initSlider();    
            };
        }
    }
}

const slider = new Slider;

slider.initSlider();
slider.arrowsAction();
