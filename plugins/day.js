import Vue from 'vue';
import day from 'dayjs'

Vue.filter('date', (value, format = 'MMM DD, YYYY') => {
    return day(value).format(format)
})
