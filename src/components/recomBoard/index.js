import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../utils/tools';

import recomCourseList from './list';

export default recomCoureDatas => {
    const recomCourseListComponent = recomCourseList();
    return {
        name: 'RecomBoard',
        tpl(){
            return tplReplace(tpl, {
                list: recomCourseListComponent.tpl(recomCoureDatas)
            })
        }
    }
}