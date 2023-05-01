const email: string = "test@test.com";

//check if email has @ and . to validate the email 
// sophicated email vlaidation can be done using regex

let atposition: number = email.indexOf('@');
let dotposition: number = email.indexOf('.');

if (atposition === -1 || dotposition === -1) {
    console.log(`Email is Invalid : ${email}`);
} 
else {
    console.log(`Email is Valid : ${email}`);
}