import { HistoryTick } from "../lib/common-types";
import moment from 'moment';
import { TickBL } from "./tick-bl";

export class WeekMonthHandler {

    public getWeeks(historyTicks: HistoryTick[]): HistoryTick[] {

        let seDates = this.generateWeekDates(historyTicks[0].date, historyTicks[historyTicks.length - 1].date);
        let dateTicks = this.getStartEndDateHistoryTicks(seDates, historyTicks);

        return this.generateDateTicks(dateTicks);
    }

    public getMonths(historyTicks: HistoryTick[]): HistoryTick[] {

        let seDates = this.generateMonthDates(historyTicks[0].date, historyTicks[historyTicks.length - 1].date);
        let dateTicks = this.getStartEndDateHistoryTicks(seDates, historyTicks);

        return this.generateDateTicks(dateTicks);

    }

    private generateMonthDates(firstDate: Date, lastDate: Date): StartEndDate[] {
        let arrStartEndDate: StartEndDate[] = [];
        try {
            let mFirstDate = moment(firstDate, 'DD-MMM-YYYY', 'en');
            let mLastDate = moment(lastDate, 'DD-MMM-YYYY', 'en');
            let startOfMonth = mFirstDate.clone().startOf('month');
            let endOfMonth = mFirstDate.clone().endOf('month');

            while (startOfMonth < mLastDate) {
                arrStartEndDate.push(new StartEndDate(startOfMonth, endOfMonth));
                startOfMonth = startOfMonth.clone().add(1, 'month');
                endOfMonth = startOfMonth.clone().endOf('month');
            }
        } catch (error) {
            console.log(error);
        }
        return arrStartEndDate;
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

    private getStartEndDateHistoryTicks(seDates: StartEndDate[], historyTicks: HistoryTick[]): DateTick[] {

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

    private generateDateTicks(arrDateTick: DateTick[]): HistoryTick[] {
        let weekHisTicks: HistoryTick[] = [];
        arrDateTick.forEach((dateTick, index, arr) => {
            let historyTick = new HistoryTick();
            historyTick.date = new Date(dateTick.date.format('DD-MMM-YYYY'));
            historyTick.high = TickBL.max(dateTick.weekTicks, 'high');
            historyTick.low = TickBL.min(dateTick.weekTicks, 'low');
            historyTick.open = dateTick.weekTicks[0].open;
            historyTick.close = dateTick.weekTicks[dateTick.weekTicks.length - 1].close;
            weekHisTicks.push(historyTick);
        });

        return weekHisTicks;

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