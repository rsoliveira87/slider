class Slider {

    constructor() {
        this.count = 0; 
        this.interval;
        this.sliderItems = document.querySelectorAll('.slider .items .item');
        this.sliderItemsLength = this.sliderItems.length;
        this.bullets = document.querySelectorAll('.bullets-wrapper .bullet');
    }

    onInit() {
        const self = this;
        self.initSlider();
        self.arrowsAction();
        self.bulletsAction();
    }
    
    addFadeIn() {
        const self = this;
        self.sliderItems[self.count].classList.remove('fade-out');
        self.sliderItems[self.count].classList.add('fade-in');
    }
    
    removeFadeIn() {
        const self = this;

        for(const item of self.sliderItems) {
            if(item.classList.contains('fade-in')) {
                item.classList.remove('fade-in');
                item.classList.add('fade-out');
                break;
            }
        }
    }
    
    moveRight() {
        const self = this;

        self.removeFadeIn();
        self.removeActiveBullet();
        
        if((self.count + 1) <= (self.sliderItemsLength - 1)) {
            self.count++;
        } else {
            self.count = 0;
        }
        
        self.addFadeIn();
        self.addActiveBullet();
    }
    
    moveLeft() {
        const self = this;

        self.removeFadeIn();
        self.removeActiveBullet();
        
        if(self.count === 0) {
            self.count = self.sliderItemsLength - 1;
        } else {
            self.count--;
        }
        
        self.addFadeIn();
        self.addActiveBullet();
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

    bulletsAction() {
        const self = this;

        self.bullets.forEach((bullet,index) => {
            bullet.onclick = e => {
                e.preventDefault();

                clearInterval(self.interval);

                self.removeActiveBullet();

                bullet.classList.add('active');

                self.count = index;
                self.removeFadeIn();
                self.addFadeIn();0
                self.addActiveBullet();
                self.initSlider();
            };
        });
    }

    removeActiveBullet() {
        for(const bullet of this.bullets) {
            if(bullet.classList.contains('active')) {
                bullet.classList.remove('active');
                break;
            }                
        }
    }

    addActiveBullet() {
        const self = this;
        self.bullets[self.count].classList.add('active');
    }
}

const slider = new Slider;

slider.onInit();
