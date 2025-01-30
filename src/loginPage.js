
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.getByRole('button', {name: 'Login'});

        this.emailInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
    }

    async login(email, newPassword) {
        await this.loginBtn.click();
        await this.emailInput.click();
        await this.emailInput.fill(email);
        await this.passwordInput.click();
        await this.passwordInput.fill(newPassword);
        await this.loginBtn.click();
    }

    async open(url) {
        await this.page.goto(url);
    }
}




