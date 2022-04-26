
import moment from "moment";

/**
 * A function for to find out the time distance, By Yadi Arpriyadi.
 * @param {Date} startDate The date
 * @param {Date} endDate The date
 */
export function calculateDate(startDate, endDate){
    const date1 = moment(startDate);
    const date2 = moment(endDate);

    let dayDiff = date2.diff(date1, "days"); // perbedaan hari
    let monthDiff = date2.diff(date1, "month"); // perbedaan bulan
    let yearDiff = date2.diff(date1, "year");
    const daysInMonth = new Date(moment().month() + 1,moment().year(), 0).getDate();
    const yearCount = 12;
    if(dayDiff > daysInMonth){
        if(yearDiff > 0){
            dayDiff -= (monthDiff * daysInMonth); // 1315(hasil perbedaan hari) - 1290(hasil perbedaan bulan di kali ) = 25 day
            monthDiff -= (yearCount * yearDiff);
            const DMY = [{dayDiff: `${dayDiff} Day`,monthDiff: `${monthDiff} Month`,yearDiff: `${yearDiff} Year`}];
            return DMY;
        }
        dayDiff -= (monthDiff * daysInMonth);
        return [{dayDiff: `${dayDiff} Day`, monthDiff: `${monthDiff} Month`}];
    }else{
        dayDiff -= (monthDiff * daysInMonth);
        return [{dayDiff: `${dayDiff} Day`}];
    }
}

