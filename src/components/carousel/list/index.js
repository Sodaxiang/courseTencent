import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';

export  default swiperData => {
    const lastSwiper = swiperData[0];
    return {
        name: 'CarouselList',
        tpl(){
            let list = '';
            swiperData.forEach(item => {
              list += tplReplace(tpl, {
                    courseId: item.course_id,
                    carItemImg: item.img,
                    carItemName: item.course_name
                });
            });

            list += tplReplace(tpl, {
                courseId: lastSwiper.course_id,
                carItemImg: lastSwiper.img,
                carItemName: lastSwiper.course_name
            });
            return list;
        }
    }
}