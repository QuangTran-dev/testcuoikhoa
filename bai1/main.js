let n = Number(prompt('Nhập số người: '))
let max
let a = []
let b = []
for (let i = 0; i < n; i++){
    let k = String(prompt(`Nhập tên của người thứ ${i+1}: `));
        a[i] = k;
    }
console.log(a)
max = a[0]
for (let i = 0; i < n; i++){
    if (a[i].length > max.length){
        max = a[i]
    }    
}
console.log(max)
for (let i = 0; i < n; i++){
    if (a[i].length == max.length){
        b.push(a[i])
    }
}
console.log(b)