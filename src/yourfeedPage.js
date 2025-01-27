import { faker } from '@faker-js/faker';

export const ARTICLE_TITLE = faker.lorem.word(5);
export const LOREM_LINES = faker.lorem.lines(1);

export class YourfeedPage {
    constructor(page) {
        this.page = page;
        this.newArticleButton = page.getByRole('link', { name: 'New Article' });
        this.profileNameField = page.getByRole('navigation');
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.articleTitleField = page.getByRole('textbox', { name: 'Article Title' });
        this.articleDescriptionField = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleBodyField = page.getByRole('textbox', { name: 'Write your article (in' });
        this.articleCommentsField = page.getByRole('textbox', { name: 'Write a comment...' });
        this.articleCommentsPublishButton = page.getByRole('button', { name: 'Post Comment' });
        this.articleGlobalFeedButton = page.getByRole('button', { name: 'Global Feed' });
        this.previewLink = page.locator('.preview-link').first();


    }

    // todo naming
    async createArticle() {
        await this.newArticleButton.click();
        await this.articleTitleField.click();
        await this.articleTitleField.fill(ARTICLE_TITLE);
        await this.articleDescriptionField.click();
        await this.articleDescriptionField.fill('Test Description');
        await this.articleBodyField.click();
        await this.articleBodyField.fill('Test Body');
        await this.publishButton.click();
    }

    async addComment() {
        await this.articleGlobalFeedButton.click();
        await this.previewLink.click();
        await this.articleCommentsField.click();
        await this.articleCommentsField.fill(LOREM_LINES);
        await this.articleCommentsPublishButton.click();
    }
}