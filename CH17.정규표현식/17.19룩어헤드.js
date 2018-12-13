function validPassword(p) {
    return /[A-Z]/.test(p) &&
        /[a-z]/.test(p) &&
        /[0-9]/.test(p) &&
        !/[^a-zA-Z0-9]/.test(p);
}


function validPassword(p) {
    return /[A-Z].*[0-9][a-z]/.test(p);
}


function validPassword(p) {
    return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}