"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("./BasePage");
const Locators = {
    duration: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//Duration"
    },
    courseHeading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//h2"
    }
};
class CourseDetailsPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.duration = this.elementLocator(Locators.duration);
        this.courseHeading = this.elementLocator(Locators.courseHeading);
    }
    clickDuration() {
        this.duration.click();
    }
    async gerCourseHeading() {
        await this.courseHeading;
    }
}
exports.CourseDetailsPage = CourseDetailsPage;
//# sourceMappingURL=CourseDetails.js.map