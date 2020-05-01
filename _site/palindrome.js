// Reverses a String (works with emojis)
function reverse(string) {
    return Array.from(string).reverse().join("");
};

// Returns true for a palindrome, false otherwise
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
};

// Returns an array of the username and domain for a standard email address
function emailParts(email) {
    return email.toLowerCase().split("@");
};
