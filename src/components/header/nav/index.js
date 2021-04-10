import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';
export default _ => {
    return {
        name: 'Nav',
        tpl(fieldData){
            let list = '';
            fieldData.forEach(item => {
                list += tplReplace(tpl, {
                    field: item.field,
                    fieldName: item.field_name
                }); 
            });
            list = `<ul class="nav-list clearfix">${list}</ul>`;
            return list;
        }
    }
}