/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"]
    let map = {}
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            map[board[i].charAt(j)] = [i,j]
          // console.log(map[board[i].charAt(j)])
          // console.log(Object.keys(map))
        }
    }

    let curr = [0,0]
    let res = ''
    
    for(let i = 0; i < target.length; i++){
        let ele = target[i]
        let col = map[ele][1] - curr[1]
        let row = map[ele][0] - curr[0]
        let count = 0
        for(let j = 0; j < Math.abs(row); j++){
            if(map[ele][0] == 5 && map[ele][1] == 0 && count == row - 1){
                break;
            }
            if(row < 0){
               res += 'U' 
            } else {
                res += 'D'
            }
            count++
        }
        for(let j = 0;j < Math.abs(col); j++){
            
            if(col < 0){
               res += 'L' 
            } else {
                res += 'R'
            }
        }
        if(count < Math.abs(row)){
            for(let j = 0; j < Math.abs(row) - count; j++){
            if(row < 0){
               res += 'U' 
            }else{
                res += 'D'
            }
            count++
        }
        }
        res += '!'
        curr = map[ele]
    }
    return res
};