import { faker } from '@faker-js/faker';

export class UserBuilder {

     email = '';
     password = '';
     username = '';

    addEmail() {
        this.email = faker.internet.email();

    }

    addPassword(symbol = 10) {
        this.password = faker.internet.password({ length: symbol });

    }
    addUsername() {
        this.username = faker.person.firstName();

    }
    generate() {
        this.addEmail();
        this.addPassword();  // Можно передать сюда желаемую длину пароля
        this.addUsername();
        // return {
        //     email: this.email,
        //     password: this.password,
        //     username: this.username
        // };  // Возвращаем объект с данными
    }
}
