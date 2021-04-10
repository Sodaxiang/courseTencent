import tpl from './index.tpl';
import './index.scss';

import list from './list';

import { tplReplace } from '../../utils/tools';

export default _ => {
    const listComponent = list()
    return {
        name: 'courseList',
        tpl(data){
            return tplReplace(tpl, {
                courseList: listComponent.tpl(data)
            })
        }
    }
}