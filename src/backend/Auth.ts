export function auth_CheckAuth(path: string) {
    const email = Session.getActiveUser().getEmail();
    console.log(email);
    if (path === '/page3') return false;
    return true;
}