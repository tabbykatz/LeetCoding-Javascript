/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.list = []
    this.size = size
    this.total = 0;
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.list.length >= this.size) {
        this.total -= this.list.shift()
    }
    this.total += val
    this.list.push(val)
    return this.total / this.list.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */