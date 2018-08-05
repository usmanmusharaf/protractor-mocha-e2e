import { element, by } from "protractor";

const inputs = {
    todo: element(by.css('input'))
};

const buttons = {
    submit: element(by.css('button[type="submit"]'))
}

export { inputs, buttons }