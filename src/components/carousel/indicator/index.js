import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';
export default swiperData => {
    return {
        name: 'Indicator',
        tpl(){
            let list = '';
            for(let i = 0; i < swiperData.length; i++){
                list += tplReplace(tpl, {
                    current: !i ? 'current' : ''
                });
            }
            return list;
        }
    }
}