// Essa função não é de autoria do grupo, e só foi incluída para corrigir o problema de reconhecimento dos cookies

// Link:
// https://daily-dev-tips.com/posts/vanilla-javascript-cookies-%F0%9F%8D%AA/
export function getCookie(name) {
    // Add the = sign
    name = name + '=';

    // Get the decoded cookie
    const decodedCookie = decodeURIComponent(document.cookie);

    // Get all cookies, split on ; sign
    const cookies = decodedCookie.split(';');

    // Loop over the cookies
    for (let i = 0; i < cookies.length; i++) {
        // Define the single cookie, and remove whitespace
        const cookie = cookies[i].trim();

        // If this cookie has the name of what we are searching
        if (cookie.indexOf(name) == 0) {
        // Return everything after the cookies name
        return cookie.substring(name.length, cookie.length);
        }
    }
}