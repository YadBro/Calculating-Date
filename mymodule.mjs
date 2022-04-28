
import moment from "moment";

/**
 * A function for to find out the time distance, By Yadi Arpriyadi.
 * @param {Date} startDate The date
 * @param {Date} endDate The date
 * @param {boolean} wDetails (with details) default is true
 */
export function calculateDate(startDate, endDate, wDetails = true){
    const date1 = moment(startDate);
    const date2 = moment(endDate);
    let dayDiff = date2.diff(date1, "days"); // perbedaan hari
    let monthDiff = date2.diff(date1, "month"); // perbedaan bulan
    let yearDiff = date2.diff(date1, "year");
    const daysInMonth = new Date(moment().month() + 1,moment().year(), 0).getDate();
    const yearCount = 12;
    if (wDetails === true){
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
    else if(wDetails === false){
        if(dayDiff > daysInMonth){
            if(yearDiff > 0){
                dayDiff -= (monthDiff * daysInMonth);
                monthDiff -= (yearCount * yearDiff);
                const DMY = [{dayDiff,monthDiff,yearDiff}];
                return DMY;
            }
            dayDiff -= (monthDiff * daysInMonth);
            return [{dayDiff, monthDiff}];
        }else{
            dayDiff -= (monthDiff * daysInMonth);
            return [{dayDiff}];
        }
        
    }
}

