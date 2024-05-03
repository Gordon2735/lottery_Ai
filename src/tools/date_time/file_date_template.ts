// Date & Time Functions and Formatters

'use strict';

// Get the current date and time
const currentDate = new Date();

// Extract individual date and time components
const year: number = currentDate.getFullYear();
const month: string = `0${currentDate.getMonth() + 1}`.slice(-2);
const day: string = `0${currentDate.getDate()}`.slice(-2);
const hours: string = `0${currentDate.getHours()}`.slice(-2);
const minutes: string = `0${currentDate.getMinutes()}`.slice(-2);
const seconds: string = `0${currentDate.getSeconds()}`.slice(-2);

// Format the date and time
const fileName_date_time: string = `${year}_${month}_${day}_${hours}_${minutes}_${seconds}`;

export default fileName_date_time;
