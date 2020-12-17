function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert(unique(values));

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sortedWord = word.toLowerCase().split('').sort().join('');
        map.set(sortedWord, word);
    }

    return Array.from(map.values());
}

let arr = ["pan", "nap", "are", "cheaters", "ear", "teachers", "era"];

alert( aclean(arr) );
