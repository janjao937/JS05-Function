//ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

const matchPoint =(win,draw)=>{
const winScore = 3;
const drawScore = 1;

return (winScore*win) + draw;

}

console.log(matchPoint(28,5));