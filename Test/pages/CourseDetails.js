"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("./BasePage");
const Locators = {
    duration: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//Duration"
    }
};
class CourseDetailsPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.duration = this.elementLocator(Locators.duration);
    }
    clickDuration() {
        this.duration.click();
    }
}
exports.CourseDetailsPage = CourseDetailsPage;
//# sourceMappingURL=CourseDetails.js.map