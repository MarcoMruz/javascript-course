"use strict";

function getLocalDay(date) {
  let day;

  day = date.getDay() == 0 ? 7 : date.getDay();

  return day;
}

console.log(getLocalDay(new Date(2012, 0, 3)));

function getDateAgo(date, dayAgo) {
  date.setDate(date.getDate() - dayAgo);

  return date.getDate();
}

console.log(getDateAgo(new Date(2015, 0, 4), 7));

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));

function formatDate(date) {
  let dateDifference = new Date() - date;

  if (dateDifference < 1000) return "right now";

  let sec = Math.floor(dateDifference / 1000);
  if (sec < 60) return sec + " sec. ago";

  let min = Math.floor(dateDifference / 60000);
  if (min < 60) return min + " min. ago";

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 56000000000)));
