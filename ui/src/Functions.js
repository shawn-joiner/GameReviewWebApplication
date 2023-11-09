
export function dateConvert(input) {
        var month = ["Empty", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   
        var inYear = input.substring(0, 4);
        var inMonth = month[parseInt(input.substring(5,7))];
        var inDay = input.substring(8,10);
        return inMonth + " " + inDay + ", " + inYear;
    }