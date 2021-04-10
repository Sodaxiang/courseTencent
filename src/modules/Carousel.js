import $, { contains } from 'jquery';

export default class Carousel {
    constructor(options) {
        this.autoplay = options.autoplay;
        this.duration = options.duration;

        this.$carousel = $('.J_carousel');
        this.$carList = this.$carousel.find('.car-list');
        this.$carItems = this.$carList.find('.car-item');
        this.$indicatorItems = this.$carousel.find('.indicator-item');

        this.curIdx = 0;

    }

    init() {
        this.autoplay && this.autoPlay();
        this.bindEvent();
    }

    autoPlay() {
        this.timer = setInterval(_ => this.run(), this.duration);
    }
    
    bindEvent() {
        this.$carousel.on('mouseover', _ => this.mouseInOut());
        this.$carousel.on('mouseout', _ => this.mouseInOut());
        this.$carousel.on('click', _ => this.onCarouselClick());
    }

    mouseInOut(ev){
        const e = ev || window.event,
              eventType = e.type;
        switch (eventType) {
            case 'mouseover':
                clearTimeout(this.timer);
                this.timer = null;
                break;
            case 'mouseout':
                this.autoplay && this.autoPlay();
                break;
            default:
                break;
        }
    }

    onCarouselClick(ev) {
        const e = ev || window.event,
              tar = e.target || e.srcElement,
              className = tar.className.trim();
        if(className === 'indicator-item'){
            this.curIdx = $(tar).index();
            this.setSlider(this.curIdx, '', false);
        }
    }

    run() {
        this.sliderAction('next');
    }

    sliderAction(dir) {
        let t = null;
        
        switch (dir) {
            case 'next':
                if(this.curIdx === this.$carItems.length - 1){
                    this.curIdx = 1;
                    this.setSlider(this.curIdx, dir, true);

                    // 对于transform需要延迟
                    t = setTimeout(() => {
                        this.setSlider(this.curIdx, dir, false);
                        clearTimeout(t);
                          });
                }else {
                    this.curIdx ++;
                    this.setSlider(this.curIdx, dir, false)
                }
                break;
            case 'prev':
                if(this.curIdx === 0) {
                    this.curIdx = this.$carItems.length -1;
                    this.setSlider(this.curIdx, dir, true);

                    t = setTimeout(() => {
                        this.setSlider(this.curIdx, dir, false);
                        clearTimeout(t);
                    }, 100);
                }else {
                    this.curIdx --;
                    this.setSlider(this.curIdx, dir, false);
                }
                break;
            default:
                break;
        }
    }

    // 在更改轮播图的时候也要设置indicator
    setSlider(index, dir, isInitial) {
        this.$carList.css({
            transform: `translateX(${isInitial ? (dir === 'next' ? 0 : -(this.$carItems.length - 1) * 1200) : -1200 * index}px)`,
            transitionDuration: `${isInitial ? 'initial' : '.5s'}`
        });
        this.setIndicator((index === this.$carItems.length - 1 || index === 0) ? 0 : index);
    }

    setIndicator(index){
        this.$indicatorItems
            .eq(index)
          .addClass('current')
          .siblings('.indicator-item')
          .removeClass('current');
    }

}