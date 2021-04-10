import tpl from './index.tpl';
import './index.scss';
import list from './components/list';

import { tplReplace } from '../../utils/tools';

export default (fields, queryField) => {
    const navlistComponent = list(fields, queryField);
    return {
        name: 'Nav',
        tpl(){
            return tplReplace(tpl, {
                list: navlistComponent.tpl()
            });
        }
    }
}