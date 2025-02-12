input = prompt("число");

simpleNumbers:
    for (i = 2; i <= +input; i++ ) {

    for (j = 2; j < i; j++) {
        if(i % j == 0 ) {
            continue simpleNumbers;
        }
    }
    alert(i);
}
