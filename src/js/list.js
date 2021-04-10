import $ from 'jquery';
import '../scss/common.css';
import '../scss/iconfont.css';

import header from '../components/header';
import indexTitle from '../components/indexTitle';
import nav from '../components/nav';
import courseList from '../components/courseList';
import noCourse from '../components/noCourse';
import footer from '../components/footer';

import IndexModel from '../models/index';

import CourseTab from '../modules/CourseTab';

import { getUrlQueryValue } from '../utils/tools';
;(async $ => {
    const $app = $('#app'),
          $container = $('<div class="container">');

    const init = _ => {
        render();
        loadModules();
    }

    const queryField = getUrlQueryValue('field') || 'all';

    const indexModel = new IndexModel(),
          retFieldData = await indexModel.getCourseFields(),
          retCourseData = await indexModel.getCourses(queryField),
          fields = retFieldData.result,
          courses = retCourseData.result;
          

    
    const headerComponent = header(fields),
          indexTitleComponent = indexTitle(),
          navComponent = nav(fields, queryField),
          courseListComponent = courseList(),
          noCourseComponent = noCourse(),
          footerComponent = footer()

    function render(){
        console.log(getUrlQueryValue('field'))
        $container.append(headerComponent.tpl());
        $container.append(indexTitleComponent.tpl('全部课程', false));
        $container.append(navComponent.tpl());
        $container.append(courses.length ? courseListComponent.tpl(courses) : noCourseComponent.tpl());
        $container.append(footerComponent.tpl());
        $app.append($container)
    }

    function loadModules(){
        new CourseTab().init();
    }

    init();
})($)