const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const getNow = () => {
    return new Date();
}

//Accepts any format including the following elements [DD, MM, YYYY, month, mon, day, hh, mm, ss]
export const formatDate = (date, format) => {
    let formattedDate = format;

    //Date Numbers
    formattedDate = formattedDate.replace(/YYYY/g, new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date));
    formattedDate = formattedDate.replace(/MM/g, new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date));
    formattedDate = formattedDate.replace(/DD/g, new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date));

    //Date Text
    formattedDate = formattedDate.replace(/month/g, new Intl.DateTimeFormat('en', { month: 'long' }).format(date));
    formattedDate = formattedDate.replace(/mon/g, new Intl.DateTimeFormat('en', { month: 'short' }).format(date));
    formattedDate = formattedDate.replace(/day/g, days[date.getDay()]);

    //Time
    formattedDate = formattedDate.replace(/hh/g, new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(date));
    formattedDate = formattedDate.replace(/mm/g, new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(date));
    formattedDate = formattedDate.replace(/ss/g, new Intl.DateTimeFormat('en', { second: 'numeric' }).format(date));

    return formattedDate;
}

export const dateDifference = (date1, date2) => {
    const millisecDiff = Math.abs(date2 - date1);
    const secDiff = millisecDiff / 1000;
    const minDiff = Math.floor(secDiff / 60);
    const hourDiff = Math.floor(minDiff / 60);
    const dayDiff = Math.floor(hourDiff / 24);
    
    return {
        seconds: secDiff,
        minutes: minDiff,
        hours: hourDiff,
        days: dayDiff
    };
}