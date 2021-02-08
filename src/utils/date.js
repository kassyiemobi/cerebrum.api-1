exports.addDays = (dateObj, numDays)=> {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
}