var correctword = "tools";
var guessword = "stool";

// Green
var correct = (guessword, correctword) => {
    var correct_index = [];
    for (let i = 0; i < 5; i++) {
        if (correctword[i] === guessword[i]) {
            correct_index = correct_index + i;
        }
    }
    return correct_index;
};

// Yellow
var present = (guessword, correctword) => {
    var present_index = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (correctword[j] === guessword[i]) {
                present_index = present_index + i;
            }
        }
    }
    return present_index;
};
// console.log(caseyellow(guessword,correctword))

// Gray

function tile_state(guessword, correctword) {
    // Arrays of index with green and yellow
    var green = correct(guessword, correctword); //returns arrays of index green
    var yellow = present(guessword, correctword); //returns arrays of index yellow
    return green, yellow;
}
//t o o l s
//s m a r t

export function getArray(guess) {
    if (guess !== ("" || null || undefined)) {
        return guess.split("");
    } else {
        return ["", "", "", "", ""];
    }
}
