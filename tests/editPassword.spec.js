import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/mainPage';
import { SignUpPage } from '../src/singUpPage';
import { URL_UI } from '../src/url.const';
import { SettingsPage } from "../src/settingsPage";
import { LoginPage } from "../src/loginPage";
import { UserBuilder } from "../src/helpers/builder/user.builder";

const userBuilder = new UserBuilder();
userBuilder.generate();

const newPassword = faker.internet.password({length: 10}); // todo может вынести это в userbuilder?


test.describe('Редактирование пароля', () => {
  test.beforeEach(async ({page}) => {
    const mainPage = new MainPage(page, userBuilder.username);
    const singUpPage = new SignUpPage(page);
    await mainPage.open(URL_UI);
    await mainPage.gotoRegister();
    await singUpPage.register(userBuilder.username, userBuilder.email, userBuilder.password);
    await expect(mainPage.profileNameField).toBeVisible();
    await expect(mainPage.profileNameField).toContainText(userBuilder.username);
  });

  test('Пользователь может сменить пароль', async ({page}) => {
    const mainPage = new MainPage(page, userBuilder.username);
    const settingsPage = new SettingsPage(page);
    const loginPage = new LoginPage(page);


      await mainPage.gotoSettings(userBuilder.username);
      await settingsPage.editPassword(newPassword);
      await mainPage.logout();
      await mainPage.gotoLogin();
      await loginPage.login(userBuilder.email, newPassword);
      await expect(mainPage.profileNameField).toContainText(userBuilder.username);


  });
});




