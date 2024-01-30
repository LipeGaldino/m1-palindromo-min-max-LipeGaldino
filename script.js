function isPalindrome(str){
    let phrase = str.toLowerCase();

    for(i = 0; i < phrase.length; i++){
        splitReverseJoinString = phrase.split("").reverse().join("");

        palindrome = splitReverseJoinString.replace(/\s/g, '');

        if(palindrome == phrase.replace(/\s/g, '')){
            return true;
        }
        return false;
    }
}

function arrayMaxMin(arr){
    for(i = 0; i < arr.length; i++){
        let bigger = Math.max.apply(null, arr);
        let smaller = Math.min.apply(null, arr);

        return [smaller, bigger];
    }
}

