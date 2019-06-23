import { HistoryTick } from "../lib/common-types";
import * as moment from 'moment';

export class WeekMonthHandler {

    public getWeeks(historyTicks: HistoryTick[]): void {


        //  historyTicks.forEach(function(currentValue, index, arr), thisValue)
        this.generateWeekDates(historyTicks[0].date, historyTicks[historyTicks.length - 1].date);

    }

    private generateWeekDates(firstDate: Date, lastDate: Date) : StartEndDate[] {
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

}

export class StartEndDate {
    constructor(public startDate: any,
        public endDate: any) { }

}