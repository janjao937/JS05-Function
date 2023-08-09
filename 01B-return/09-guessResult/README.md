บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * ไม่เข้าfunction
console.log(sayHi(10)); // ** undifined
```

<!-- ```js
function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** undifind alert HI John
console.log(sayHi()); // **** Who are you
``` -->
