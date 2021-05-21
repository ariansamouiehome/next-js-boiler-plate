import { getNow, formatDate, dateDifference } from "./dateUtils";

describe("getNow Test Suite", function() {
    it("Returns a defined date", function() {
        const date = getNow();

        expect(date).toBeDefined();
    });
});

describe("FormatDate Test Suite", function() {
    it("Returns the year from the date", function() {
        const date = new Date('01-05-2020');

        const formattedDate = formatDate(date, 'YYYY');

        expect(formattedDate).toBe('2020');
    });

    it("Returns the month from the date", function() {
        const date = new Date('01-05-2020');

        const formattedDate = formatDate(date, 'MM');

        expect(formattedDate).toBe('01');
    });

    it("Returns the day from the date", function() {
        const date = new Date('01-05-2020');

        const formattedDate = formatDate(date, 'DD');

        expect(formattedDate).toBe('05');
    });

    it("Returns a date formatted with date and month", function() {
        const date = new Date('01-05-2020');

        const formattedDate = formatDate(date, 'DD-MM');

        expect(formattedDate).toBe('05-01');
    });

    it("Returns a full date formatted as expected", function() {
        const date = new Date('01-05-2020');

        const formattedDate = formatDate(date, 'DD/MM/YYYY');

        expect(formattedDate).toBe('05/01/2020');
    });

    it("Returns a full date with time formatted as expected", function() {
        const date = new Date('12-25-2021 10:34:23');

        const formattedDate = formatDate(date, 'DD/MM/YYYY hh-mm-ss');

        expect(formattedDate).toBe('25/12/2021 10-34-23');
    });

    it("Returns a full date with time formatted as expected", function() {
        const date = new Date('02-01-2019 19:10:59');

        const formattedDate = formatDate(date, 'DD/MM/YYYY hh:mm:ss');

        expect(formattedDate).toBe('01/02/2019 19:10:59');
    });

    it("Returns a date with text formatted as expected", function() {
        const date = new Date('02-01-2019');

        const formattedDate = formatDate(date, 'day month YYYY');

        expect(formattedDate).toBe('Friday February 2019');
    });

    it("Returns a shortened date with text formatted as expected", function() {
        const date = new Date('03-01-2019');

        const formattedDate = formatDate(date, 'day mon YYYY');

        expect(formattedDate).toBe('Friday Mar 2019');
    });

    it("Returns a duplicated date element formatted as expected", function() {
        const date = new Date('03-01-2019');

        const formattedDate = formatDate(date, 'YYYY/YYYY MM-MM');

        expect(formattedDate).toBe('2019/2019 03-03');
    });

    it("Returns a duplicated date element formatted as expected", function() {
        const date = new Date('03-01-2019');

        const formattedDate = formatDate(date, 'YYYY/YYYY MM-MM');

        expect(formattedDate).toBe('2019/2019 03-03');
    });
});

describe("DateDifference Test Suite", function() {
    it("Returns a difference in seconds", function() {
        const date1 = new Date('03-01-2019 10:50:04');
        const date2 = new Date('03-01-2019 10:51:05');

        const dateDiff = dateDifference(date1, date2);

        expect(dateDiff.seconds).toBe(61);
    });

    it("Returns a difference in minutes", function() {
        const date1 = new Date('03-01-2019 10:50:04');
        const date2 = new Date('03-01-2019 10:56:33');

        const dateDiff = dateDifference(date1, date2);

        expect(dateDiff.minutes).toBe(6);
    });

    it("Returns a difference in hours", function() {
        const date1 = new Date('03-01-2019 10:50:04');
        const date2 = new Date('03-01-2019 15:45:51');

        const dateDiff = dateDifference(date1, date2);

        expect(dateDiff.hours).toBe(4);
    });

    it("Returns a difference in days", function() {
        const date1 = new Date('03-01-2019');
        const date2 = new Date('03-04-2019');

        const dateDiff = dateDifference(date1, date2);

        expect(dateDiff.days).toBe(3);
    });

    it("Returns a collective difference in all date components", function() {
        const date1 = new Date('07-12-2020 12:50:04');
        const date2 = new Date('07-13-2020 18:34:10');

        const dateDiff = dateDifference(date1, date2);

        expect(dateDiff.seconds).toBe(107046);
        expect(dateDiff.minutes).toBe(1784);
        expect(dateDiff.hours).toBe(29);
        expect(dateDiff.days).toBe(1);
    });

    it("Returns a positive difference in days no matter the order of date parameters", function() {
        const date1 = new Date('05-01-2021');
        const date2 = new Date('05-07-2021');

        const dateDiff1 = dateDifference(date1, date2);
        const dateDiff2 = dateDifference(date2, date1);

        expect(dateDiff1.days).toBe(6);
        expect(dateDiff2.days).toBe(6);
    });
});