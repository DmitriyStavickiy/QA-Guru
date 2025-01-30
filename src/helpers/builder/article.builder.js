import { faker } from '@faker-js/faker';

export class ArticleBuilder {

    articleTitle = '';
    articleDescription = '';
    articleBody = '';

    addTitle() {
        this.articleTitle = faker.lorem.word();
    }

    addDescription() {
        this.articleDescription = faker.lorem.lines(1);
    }

    addBody() {
        this.articleBody = faker.lorem.lines(1);
    }
    generate() {
        this.addTitle();
        this.addDescription();
        this.addBody();
    }
}

