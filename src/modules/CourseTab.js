import $ from 'jquery';

import courseList from '../components/courseList';

import IndexModel from '../models/index';

export default class CourseTab {
    constructor(){
        this.$tab = $('.J_tab');
        this.$courseList = $('.J_course_list');
        this.$courseList.css('min-height', '500px');

        this.courseListComponent = courseList();

        this.courseDataCache = [];
    }

    init(){
        this.bindEvent();
    }

    bindEvent(){
        this.$tab.on('click', _ => this.onTabClick())
    }

    onTabClick(ev){
        const e = ev || window.event,
              tar = e.target || e.srcElement,
              className = tar.className;
        if(className === 'tab-item'){
            const $tar = $(tar),
                  field = $tar.attr('data-field');
            this.tabChange($tar);

            history.pushState(null, '',`./list.html?field=${field}`);

            this.courseChange(field);
        }
    }

    tabChange(target){
        target.addClass('current')
              .parent()
              .siblings()
              .children('.tab-item')
              .removeClass('current');
        
    }

    async courseChange(field){
        if(!this.courseDataCache[field]){
            const indexModel = new IndexModel();
            await indexModel.getCourses(field).then( res => {
                this.courseDataCache[field] = res.result;
            });
        }
        this.$courseList.html(this.courseListComponent.tpl(this.courseDataCache[field]));
    }

}