import tpl from './index.tpl';
import './index.scss';

import list from './list';
import indicator from './indicator';

import { tplReplace } from '../../utils/tools'
export default swiperData => {
    const courselListComponent = list(swiperData);
    const indicatorComponent = indicator(swiperData);
    return {
        name: 'Carousel',
        tpl(){
            return tplReplace(tpl, {
                carouselList: courselListComponent.tpl(),
                carouselListWidth: `${(swiperData.length+1) * 1200}px` ,
                indicatorList: indicatorComponent.tpl()
            })
        }
    }
}