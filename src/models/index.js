import $ from 'jquery';

import { API } from '../utils/config';

export default class IndexModel {
    getCourseDatas() {
       return $.ajax({
            url: API.getCourseDatas,
            type: 'GET',
            dataType: 'JSONP'
        });        
    }

    getCourses(field) {
      return $.ajax({
          url: `${API.getCourses}${field}`,
          type: 'GET',
          dataType: 'JSONP'
      });  
    }

    getCourseFields() {
        return $.ajax({
            url: API.getCourseFields,
            type: 'GET',
            dataType: 'JSONP'
        });
    }
}