import tpl from './index.tpl';
import moreTpl from './more.tpl';
import './index.scss';

import { tplReplace } from '../../utils/tools';

export default _ => {
    return {
        name: 'IndexTitle',
        tpl(titleText, showMore) {
            return tplReplace(tpl, {
                titleText,
                more: showMore ? moreTpl() : ''
            });
        }
    }
}