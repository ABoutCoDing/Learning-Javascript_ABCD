const email = null; // 이런..

try {
    const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.log(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validateEmail}`);
    }
} catch(err) {
    console.error(`Error: ${err.message}`);
}