function alternatingSums(a) {
    let sum1 =0 , sum2 = 0
    // let n = prompt('Nhập số người: ')
    let n = []
    for (let i = 0; i < a; i++){
        let k = Number(prompt(`Nhập cân nặng của người thứ ${i+1}: `));
        n[i] = k;
    }
    console.log(n)
    for (let i = 0; i < a; i+=2){
        sum1+= n[i]
    }
    for (let i = 1; i < a; i+=2){
        sum2+= n[i]
    }
    console.log(`[${sum1},${sum2}]`)    
}
alternatingSums(5)


