import {UserBuilder} from "./helpers/builder/user.builder";


export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.settingsPasswordField = page.getByRole('textbox', { name: 'Password' });
        this.settingsUpdateButton = page.getByRole('button', { name: 'Update Settings' });
    }
    // todo

    async open(url) {
        await this.page.goto(url);
    }
    async editPassword(newPassword) {
        await this.settingsPasswordField.click();
        await this.settingsPasswordField.fill(newPassword);
        await this.settingsUpdateButton.click();
    }
}