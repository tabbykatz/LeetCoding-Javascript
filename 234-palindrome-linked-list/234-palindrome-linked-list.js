const isPalindrome = head => {
    let values = '';
    while (head) {
        values += head.val;
        head = head.next;
    }
    let len = Math.floor(values.length);
    for (let i = 0; i < len; i++)
        if (values[i] != values[len - 1 - i])
            return false;
    return true;
};