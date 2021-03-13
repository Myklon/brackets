module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(element => element.join(''));
    let check = true;
    while (check) {
      check = false;
      for (let i = 0; i < bracketsConfig.length; i++ ) 
        if (str.includes(bracketsConfig[i])) {
            check = true;
            str = str.replace(bracketsConfig[i], '')
        }  
    }
    if (str == '') return true;
    else return false;
}
