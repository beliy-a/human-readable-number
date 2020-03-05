module.exports = function toReadable(number) {
    const numbersInWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    let numberToStr = String(number);
    let result = '';


    if (numberToStr >= 0 && numberToStr < 20) {
        result = numbersInWords[numberToStr];
    } else if (number >= 20 && number < 100) {
        result = (numbersInWords[numberToStr] || `${numbersInWords[numberToStr[0] + 0]} ${numbersInWords[numberToStr[1]]}`);
    } else if (numberToStr >= 100 && numberToStr < 1000) {
        if (numberToStr[1] == 0) {
            result = `${numbersInWords[numberToStr[0]]} ` + (numbersInWords[numberToStr[2]] == 'zero' ? 'hundred' : `hundred ${numbersInWords[numberToStr[2]]}`);
        } else {
            result = `${numbersInWords[numberToStr[0]]} hundred ` + (numbersInWords[numberToStr[1] + numberToStr[2]] || `${numbersInWords[numberToStr[1] + 0]} ${numbersInWords[numberToStr[2]]}`);
        }
    } else {
        throw Error('Enter a number from 0 to 999');
    }


    return result;
}
