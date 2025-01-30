import { test, expect } from '@playwright/test';
import { MainPage } from '../src/mainPage';
import { ArticlePage } from '../src/articlePage';
import {URL_UI} from '../src/url.const';
import {UserBuilder} from "../src/helpers/builder/user.builder";
import {ArticleBuilder} from "../src/helpers/builder/article.builder";
import { SignUpPage } from "../src/singUpPage";

const userBuilder = new UserBuilder();
userBuilder.generate();

const articleBuilder = new ArticleBuilder();
articleBuilder.generate();


test.describe('Шаблон', () => {
  test.describe('Статьи', () => {
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

      const articlePage = new ArticlePage(page, articleBuilder.articleTitle, articleBuilder.articleDescription, articleBuilder.articleBody);

      await articlePage.createArticle(articleBuilder.articleTitle, articleBuilder.articleDescription, articleBuilder.articleBody);
      await expect(page.getByRole('heading')).toContainText(articleBuilder.articleTitle);
    });
  });
});










