function filterCourseData(data, field, limit){
    const filterData = data.filter( item => item.field === field);

    return filterData.slice(0, limit);
}

export {
    filterCourseData
}