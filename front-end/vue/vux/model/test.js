let num = 0;
Object.defineProperty(window,'a',{
  get () {
    num++;
    return num
  }
})
console.log((a===1 && a===2 && a===3) === true)
