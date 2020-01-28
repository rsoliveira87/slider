class Slider {

    constructor() {
        this.count = 0; 
        this.interval;
        this.sliderItems = document.querySelectorAll('.slider .items .item');
        this.sliderItemsLength = this.sliderItems.length;
        this.bullets = document.querySelectorAll('.bullets-wrapper .bullet');
    }

    /**
     * Método inicializador da classe
     *
     * @memberof Slider
     * @method onInit
     */
    onInit() {
        const self = this;
        self.initSlider();
        self.arrowsAction();
        self.bulletsAction();
    }
    
    /**
     * Método que adiciona a slide fade-in no item ativo
     *
     * @memberof Slider
     * @method addFadeIn
     */
    addFadeIn() {
        const self = this;
        self.sliderItems[self.count].classList.remove('fade-out');
        self.sliderItems[self.count].classList.add('fade-in');
    }
    
    /**
     * Método que remove a classe fade-in
     *
     * @memberof Slider
     * @method removeFadeIn
     */
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
    
    /**
     * Método que ativa o próximo item do slide
     *
     * @memberof Slider
     * @method moveRight
     */
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

    /**
     * Método que ativa o item anterior do slide
     *
     * @memberof Slider
     * @method moveLeft
     */    
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
    
    /**
     * Método que inicia o slide automaticamente
     *
     * @memberof Slider
     * @method initSlider
     */
    initSlider() {
        const self = this;

        self.interval = setInterval(() => {
            self.moveRight();
        }, 3000);
    }
    
    /**
     * Método que aplica ação nas setas direita e esquerda
     *
     * @memberof Slider
     * @method arrowsAction
     */
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

    /**
     * Método que aplica ação nos bullets
     *
     * @memberof Slider
     * @method bulletsAction
     */
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
                self.addFadeIn();
                self.addActiveBullet();
                self.initSlider();
            };
        });
    }

    /**
     * Método que remove a classe active do bullet ativo
     *
     * @memberof Slider
     * @method removeActiveBullet
     */
    removeActiveBullet() {
        const self = this;

        for(const bullet of self.bullets) {
            if(bullet.classList.contains('active')) {
                bullet.classList.remove('active');
                break;
            }                
        }
    }

    /**
     * Método que adiciona a classe active no bullet ativo
     *
     * @memberof Slider
     * @method addActiveBullet
     */
    addActiveBullet() {
        const self = this;
        self.bullets[self.count].classList.add('active');
    }
}

// Instância da classe
const slider = new Slider;

slider.onInit();
