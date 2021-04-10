import tpl from './index.tpl';
import './index.scss';

import { tplReplace } from '../../../utils/tools';

export default _ => {
    return {
        name: 'RecomCourseList',
        tpl(courseDatas){
            let list = '';
            courseDatas.forEach(item => {
                list += tplReplace(tpl, {
                    courseId: item.course_id,
                    courseImg: item.course_img,
                    courseName: item.course_name,
                    courseDescription: item.description,
                    coursePrice: item.price,
                    teacherImg: item.teacher_img,
                    teacherName: item.teacher_name
                });
            });
            return list;
        }
    }
}