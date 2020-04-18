/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count=0;
    for(let i=0;i<m.length;i++){
        for (let j = 0; j < n.length; j++){
            console.log(i, j);
            // console.log("sj",i,sum(i),j,sum(j));
            // if(sum(i)+sum(j)>k){
            //     continue;
            // }
            // count++;
        }
    }
    return count;
};

const sum=(num)=>{
    return num.split("").reduce((prev,curr)=> {return prev+curr});
}

movingCount(1, 2, 1);