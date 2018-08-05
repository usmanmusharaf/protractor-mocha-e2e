import { browser, ExpectedConditions } from 'protractor';
// import { expect } from "chai";

import * as elements from "./elements";

describe('My test', function () {
    this.timeout(10 * 1000);

    it('should add new todo', async function (done) {
        await browser.get(browser.baseUrl);
        await browser.wait(ExpectedConditions.visibilityOf(elements.inputs.todo), 50000);
        await elements.inputs.todo.sendKeys("My first todo");

        await elements.buttons.submit.click();
        done();
    });
});