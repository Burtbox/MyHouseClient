export function checkUserLoginToken(token: string): boolean {
    let isLoggedIn = false;
    if (token) {
        isLoggedIn = true; // May need to replace this check with a proper login check?
    } 
    return isLoggedIn;
}
