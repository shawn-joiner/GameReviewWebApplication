
export function dateConvert(input) {
        let month = ["Empty", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   
        let inYear = input.substring(0, 4);
        let inMonth = month[parseInt(input.substring(5,7))];
        let inDay = input.substring(8,10);
        return inMonth + " " + inDay + ", " + inYear;
    }