import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/mainPage';
import { ArticlePage } from '../src/articlePage';
import { ARTICLE_TITLE, LOREM_LINES } from '../src/articlePage';
import {URL_UI} from '../src/url.const';
import {SignUpPage} from "../src/singUpPage";
import {UserBuilder} from "../src/helpers/builder/user.builder";

const userBuilder = new UserBuilder();
userBuilder.generate();


test.describe('Создание статьи', () => {
  test.beforeEach(async ({page}) => {
    const mainPage = new MainPage(page, userBuilder.username);
    const singUpPage = new SignUpPage(page);
    await mainPage.open(URL_UI);
    await mainPage.gotoRegister();
    await singUpPage.register(userBuilder.username, userBuilder.email, userBuilder.password);
    await expect(mainPage.profileNameField).toBeVisible();
    await expect(mainPage.profileNameField).toContainText(userBuilder.username);
  });

  test('Пользователь может опублиуковать статью', async ({page}) => {
    const articlePage = new ArticlePage(page);
    await articlePage.createArticle();
    await expect(page.getByRole('heading')).toContainText(ARTICLE_TITLE);
  });

});




