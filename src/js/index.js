import $ from 'jquery';
import '../scss/common.css';
import '../scss/iconfont.css';

import header from '../components/header';
import carousel from '../components/carousel';
import footer from '../components/footer';
import indexTitle from '../components/indexTitle';
import recomBoard from '../components/recomBoard';
import courseList from '../components/courseList';

import Carousel from '../modules/Carousel';

import { CAROUSEL } from '../utils/config';

import { filterCourseData } from '../lib';
import IndexModel from '../models/index';

;(async $ => {
    const $app = $('#app'),
          $container = $('<div class="container">');

    const indexModel = new IndexModel(),
          retData = await indexModel.getCourseDatas(),
          {swipers, recomCourses, fields, courses} = retData.result;

    const headerComponent = header(fields),
          footerComponent = footer(),
          carouselComponent = carousel(swipers),
          indexTitleComponent = indexTitle(),
          recomBoardComponent = recomBoard(recomCourses),
          courseListComponent = courseList();

    const init = _ => {
        render();
        loadModules();// 模块加载
    }

    function render(){
        $container.append(headerComponent.tpl());
        $container.append(carouselComponent.tpl());
        $container.append(indexTitleComponent.tpl('JS++深度前端', true));
        $container.append(recomBoardComponent.tpl());
        $container.append(indexTitleComponent.tpl('前端高薪就业', true));
        $container.append(courseListComponent.tpl(filterCourseData(courses, "0", 5)));
        $container.append(indexTitleComponent.tpl('精品小课', true));
        $container.append(courseListComponent.tpl(filterCourseData(courses, "1", 5)));
        $container.append(indexTitleComponent.tpl('前端基础', true));
        $container.append(courseListComponent.tpl(filterCourseData(courses, "2", 5)));
        $container.append(indexTitleComponent.tpl('全修班体验课', true));
        $container.append(courseListComponent.tpl(filterCourseData(courses, "3", 5)));
        $container.append(footerComponent.tpl());
        $app.append($container);
    }

    function loadModules() {
        new Carousel(CAROUSEL).init();
    }
    init();
})($)