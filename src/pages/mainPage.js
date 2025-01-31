

export class MainPage {
    constructor(page, username) {
        this.page = page;
        this.profileButton = page.getByText(username);
        this.signupLink = page.getByRole('link', {name: 'Sign up'});
        this.loginLink = page.getByRole('link', {name: 'Login'});
        this.homeLink = page.getByRole('link', {name: 'Home'});
        this.settingsBtn = page.getByRole('link', {name: 'Settings'})
        this.logoutLink = page.getByRole('link', {name: 'Logout'});
        this.profileNameField = page.getByRole('navigation');
    }

    // todo
    async gotoRegister() {
        await this.signupLink.click();
    }
    async gotoLogin() {
        await this.loginLink.click();
    }

    async logout() {
        await this.profileButton.click();
        await this.logoutLink.click();
    }

    async gotoSettings() {
        await this.profileButton.click();
        await this.profileNameField.click();
        await this.settingsBtn.click();
    }

    async gotoHome() {
        await this.homeLink.click();
    }
    async open(url) {
        await this.page.goto(url);
    }
}