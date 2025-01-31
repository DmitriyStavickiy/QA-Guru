import { faker } from '@faker-js/faker';

export class ArticleBuilder {

    articleTitle = '';
    articleDescription = '';
    articleBody = '';

    addTitle() {
        this.articleTitle = faker.lorem.word(3);
    }

    addDescription() {
        this.articleDescription = faker.lorem.word(3);
    }

    addBody() {
        this.articleBody = faker.lorem.word(5);
    }
    generate() {
        this.addTitle();
        this.addDescription();
        this.addBody();
    }
}
