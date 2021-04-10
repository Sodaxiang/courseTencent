import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';


export default _ => {
    return {
        name: 'List',
        tpl(data){
            let list = '';
            data.forEach( item => {
                list += tplReplace(tpl,  {
                    ourseId: item.id,
                    courseImg: item.img,
                    courseName: item.course_name,
                    coursePriceClass:  Number(item.price/100) ? '' : 'free',
                    coursePrice: Number(item.price/100) ? `￥${Number(item.price/100).toFixed(2)}` : '免费'  
                })
            });
            return list;
        }
    }
}