// -   Parameter ตัวแรกเป็น 'Do you agree?'
// -   Parameter ตัวที่สองเป็นฟังก์ชันท่ีเมื่อทำงานแล้วจะ alert คำว่า “I’m agree with you ?”
// -   Parameter ตัวที่สามเป็นฟังก์ชันที่เมื่อทำงานแล้วจะ alert คำว่า “whyyyyyyy !”


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

//call functiom
ask( 'Do you agree?', function () {alert("I’m agree with you ?"); }, function () {alert("“whyyyyyyy !");});