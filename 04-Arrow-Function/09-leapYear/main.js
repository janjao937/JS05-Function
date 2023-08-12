/*
ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
- leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
- ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว
*/


let isLeapYear = (yearInput) =>{

    // if(yearInput%400===0) return true;
    // else if(yearInput%100 === 0) return false;
    // else if(yearInput%4=== 0) return true;
    //return false

    return (yearInput%400===0)?true:(yearInput%100 === 0)?false:(yearInput%4=== 0)?true:false;
}

console.log(isLeapYear(1700));


//Teacher///
let TeacherLeapYear = (year)=>{

    if(year%100===0)
    {
        return year%400==0;
    }
    return year %4 ===0;
}

console.log(TeacherLeapYear(5024));

const TeacherLeapYear2= (year)=>(year%100===0?year%400===0:year%4===0);
console.log(TeacherLeapYear2(5024));