// Reverses a String
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

function emailParts(email) {
    let processedContent = email.toLowerCase();   
    let parts = processedContent.split("@");
   return parts;
}