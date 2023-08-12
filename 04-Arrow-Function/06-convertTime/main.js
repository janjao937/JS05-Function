const DayToSecound = (day)=>
{
    const hourInday = 24;//
    const minInOneHour = 60;//1hr
    let secInOneHour = 60;//1min
    let secoundInDay = 0;

    secoundInDay += (secInOneHour*minInOneHour)*hourInday
    return secoundInDay *day;
}
console.log(DayToSecound(1));