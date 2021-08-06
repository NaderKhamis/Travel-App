// CALCULATE COUNTDOWN
export const getCountdown = (startDate) => {

    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    today = year + '-' + month + '-' + day;
    const remainder = datesDiff(today, startDate);
    return remainder;
}

// CALCULATE THE DIFFERENCE BETWEEN TWO DATES
export const datesDiff = (dateOne, dateTwo) => {
    const date1 = Date.parse(dateOne);
    const date2 = Date.parse(dateTwo);
    const difference = date2 - date1;
    const oneDay = 24 * 60 * 60 * 1000;
    const result = Math.ceil(difference / oneDay);
    return result;
}