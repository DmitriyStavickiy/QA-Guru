import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/mainPage';
import { RegisterPage } from '../src/registerPage';
import { YourfeedPage } from '../src/yourfeedPage';
import { ARTICLE_TITLE, LOREM_LINES } from '../src/yourfeedPage';

const URL_UI = 'https://realworld.qa.guru/';


test.describe('Шаблон', () => {
  test.beforeEach(async ({page}) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    const yourfeedPage = new YourfeedPage(page);
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password({length: 10}),
      username: faker.person.firstName(),
      newPassword: faker.internet.password({length: 10})
    };

    await mainPage.open(URL_UI);
    await mainPage.gotoRegister();
    await registerPage.register(user.username, user.email, user.password);
    await expect(yourfeedPage.profileNameField).toBeVisible();
    await expect(yourfeedPage.profileNameField).toContainText(user.username);
  });

  test('Пользователь может опублиуковать статью', async ({page}) => {
    const yourfeedPage = new YourfeedPage(page);
    await yourfeedPage.createArticle();
    await expect(page.getByRole('heading')).toContainText(ARTICLE_TITLE);
  });

  test('Пользователь может оставить комментарий', async ({page}) => {
    const yourfeedPage = new YourfeedPage(page);
    await yourfeedPage.addComment();
    await expect(page.getByRole('main')).toContainText(LOREM_LINES);
  });

  test('Пользователь может сменить пароль', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.editPassword();
    await expect(page.getByRole('main')).toContainText(LOREM_LINES);
  });
});




