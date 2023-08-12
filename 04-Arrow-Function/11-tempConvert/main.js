//ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius
//C = (°F - 32) × 5/9|  f = c/5 * 9 +32

let farenheitParseToCelsius = (f) => (f-32)*5/9;

console.log(farenheitParseToCelsius(32));