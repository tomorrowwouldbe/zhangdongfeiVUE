/**
 * navigator帮助类
 */

class dateUtil {

    /**
     *  计算某一天星期几
     * @param year
     * @param month
     * @returns {number}
     */
    static getWeekDay = (year, month, day) => {
        month = month - 1;
        let d = new Date(year, month, day);
        return d.getDay();
    }

    /**
     * 获取当前日期
     * @returns {{year: number, month: number, day: number}}
     */
    static getNowDate = () => {
        const mydate = new Date();//实例化时间类
        return {year: mydate.getFullYear(), month:(mydate.getMonth() + 1), day: mydate.getDate()};
    }

    /**
     * 星期转成字符串
     * @param weekday
     * @returns {*}
     */
    static getWeekDayToString = (year, month, day) => {
        month = month - 1;
        let d = new Date(year, month, day);
        let weekday = d.getDay();
        switch (weekday){
            case 0:
                return "日";
                break;
            case 1:
                return "一";
                break;
            case 2:
                return "二";
                break;
            case 3:
                return "三";
                break;
            case 4:
                return "四";
                break;
            case 5:
                return "五";
                break;
            case 6:
                return "六";
                break;
        }
    }

    /**
     *
     * @param num
     * @returns {string}
     */
    static numtwo = (num) => {
        var num = String(num);
        if(num.length < 2){
            return "0"+num;
        }else{
            return num;
        }
    }

    /**
     * 获取下一天
     * @param date
     * @returns {string}
     */
    static getNextDay(date){
        let d = new Date(date);
        d = +d + 1000*60*60*24;
        d = new Date(d);
        return {year:d.getFullYear(), month:(d.getMonth()+1), day: d.getDate()};
    }

    /**
     * 获取上一天
     * @param date
     * @returns {string}
     */
    static getUpDay(date){
        let d = new Date(date);
        d = +d - 1000*60*60*24;
        d = new Date(d);
        return {year:d.getFullYear(), month:(d.getMonth()+1), day: d.getDate()};
    }

    /**
     * 获取两个日期之间差个几天
     * @param date1
     * @param date2
     * @returns {number}
     */
    static getDayToDayNumber(date1, date2){
        let d1 = new Date(date1);
        let d2 = date2 ? new Date(date2) : new Date(dateUtil.formatJsonDataToStaring(dateUtil.getNowDate()));
        let num = (+d1 - (+d2)) / (1000*60*60*24);
        return num;
    }

    /**
     * 格式化日期
     * @param date
     * @returns {string}
     */
    static formatJsonDataToStaring(date){
        return date.year + "-" + dateUtil.numtwo(date.month) + "-" + dateUtil.numtwo(date.day);
    }

    /**
     * 格式化日期
     * @param date
     * @returns {{year: *, month: Number, day: Number}}
     */
    static formatStaringDataToJson(date){
        let dateArr = date.split("-");
        return {year:dateArr[0], month:parseInt(dateArr[1]), day: parseInt(dateArr[2])};
    }

    /**
     * 分钟格式化
     * @param minute
     * @returns {string}
     */
    static formatMinuteToString(minute){
        let h = parseInt(minute / 60);
        let f = parseInt(minute % 60);
        return h + "时" + dateUtil.numtwo(f) + "分";
    }

}

export default dateUtil;
