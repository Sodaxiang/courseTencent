import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../../utils/tools'; 

export default (data, queryField) => {
    return {
        name: 'TabList',
        tpl(){
            let list = '';
            list += tplReplace(tpl, {
                tabItemClass: queryField =='all' ? 'tab-item current' : 'tab-item',
                tabField: 'all',
                tabItem: '全部'
            });
            data.forEach((item, index) => {
                list += tplReplace(tpl, {
                    tabItemClass: (queryField !='all') ? (queryField == index) ? 'tab-item current' : 'tab-item' : 'tab-item',
                    tabField: item.field,
                    tabItem: item.field_name
                })
            })
            return list;
        }
    }
}