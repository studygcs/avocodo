import { HistoryTick } from "../lib/common-types";
import * as moment from 'moment';

export class WeekMonthHandler {

    public getWeeks(historyTicks: HistoryTick[]): void {


        //  historyTicks.forEach(function(currentValue, index, arr), thisValue)
        let seDates = this.generateWeekDates(historyTicks[0].date, historyTicks[historyTicks.length - 1].date);

        this.getWeekHistoryTicks(seDates, historyTicks);

    }

    private generateWeekDates(firstDate: Date, lastDate: Date): StartEndDate[] {
        let arrStartEndDate: StartEndDate[] = [];
        try {
            let mFirstDate = moment(firstDate, 'DD-MMM-YYYY', 'en');
            let mLastDate = moment(lastDate, 'DD-MMM-YYYY', 'en');
            let startOfWeek = mFirstDate.clone().startOf('week').add(1, 'day');
            let endOfWeek = mFirstDate.clone().endOf('week').subtract(1, 'day');

            while (startOfWeek < mLastDate) {
                arrStartEndDate.push(new StartEndDate(startOfWeek, endOfWeek));
                startOfWeek = endOfWeek.clone().add(3, 'day');
                endOfWeek = startOfWeek.clone().endOf('week').subtract(1, 'day');
            }
        } catch (error) {

        }
        return arrStartEndDate;
    }

    private getWeekHistoryTicks(seDates: StartEndDate[], historyTicks: HistoryTick[]): DateTick[] {

        let dateTicks: DateTick[] = [];
        let hisTicks = [...historyTicks];
        seDates.forEach((dateItem, index, arr) => {
            let dateTick = new DateTick(dateItem.startDate);
            hisTicks.forEach((his, i, a) => {
                let tickDate = moment(his.date, 'DD-MMM-YYYY', 'en');
                if (tickDate.isSameOrAfter(dateItem.startDate, 'day') && tickDate.isSameOrBefore(dateItem.endDate, 'day')) {
                    dateTick.weekTicks.push(his);
                }
            });
            dateTicks.push(dateTick);

        });
        return dateTicks;
    }
}

export class StartEndDate {
    constructor(public startDate: moment.Moment,
        public endDate: moment.Moment) { }

}

export class DateTick {
    constructor(public date: moment.Moment) { }

    public weekTicks: HistoryTick[] = [];

}