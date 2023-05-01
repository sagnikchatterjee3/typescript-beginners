const test_password: string = "Test@123";

//croiteria of the password is that the first character should be cpaital
//ascii comparision
if (test_password.charCodeAt(0) >= 65 && test_password.charCodeAt(0) <= 90) {
    console.log(`Valid password ${test_password}`);
}
else {
    console.log(`Invalid password ${test_password}`);
}