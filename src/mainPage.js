export class MainPage {
    constructor(page) {
        this.page = page;
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
    }
    // todo
    async gotoRegister() {
        await this.signupButton.click();
    }
    async open(url) {
        await this.page.goto(url);
    }
}