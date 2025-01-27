export class MainPage {
    constructor(page) {
        this.page = page;
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
        this.profileButton = page.getByText(username);
        this.settingsButton = page.getByRole('link', { name: 'Settings' });
        this.settingsPasswordField = page.getByRole('textbox', { name: 'Password' });
        this.settingsUpdateButton = page.getByRole('button', { name: 'Update Settings' });
    }
    // todo
    async gotoRegister() {
        await this.signupButton.click();
    }
    async open(url) {
        await this.page.goto(url);
    }
    async editPassword() {
        await this.profileButton.click();
        await this.settingsButton.click();
        await this.settingsPasswordField.click();
        await this.settingsPasswordField.fill(newPassword);
        await this.settingsUpdateButton.click();
    }
}