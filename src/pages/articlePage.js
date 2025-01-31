export class ArticlePage {
    constructor(page, articleBody) {
        this.page = page;
        this.newArticleButton = page.getByRole('link', { name: 'New Article' })
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.articleTitleField = page.getByRole('textbox', { name: 'Article Title' });
        this.articleDescriptionField = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleBodyField = page.getByRole('textbox', { name: 'Write your article (in' });
        this.articleCommentsField = page.getByRole('textbox', { name: 'Write a comment...' });
        this.articleCommentsPublishButton = page.getByRole('button', { name: 'Post Comment' });
        this.articleGlobalFeedButton = page.getByRole('button', { name: 'Global Feed' });
        this.previewLink = page.locator('.preview-link').first();
        this.checkCommentaryPublish = page.getByText(articleBody);


    }

    // todo naming
    async createArticle(articleTitle, articleDescription, articleBody) {
        await this.newArticleButton.click();
        await this.articleTitleField.click();
        await this.articleTitleField.fill(articleTitle);
        await this.articleDescriptionField.click();
        await this.articleDescriptionField.fill(articleDescription);
        await this.articleBodyField.click();
        await this.articleBodyField.fill(articleBody);
        await this.publishButton.click();
    }

    async addComment(articleBody) {
        await this.articleGlobalFeedButton.click();
        await this.previewLink.click();
        await this.articleCommentsField.click();
        await this.articleCommentsField.fill(articleBody);
        await this.articleCommentsPublishButton.click();
    }
}
