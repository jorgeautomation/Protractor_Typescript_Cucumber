"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Xpath"] = 0] = "Xpath";
    IdentificationType[IdentificationType["Css"] = 1] = "Css";
    IdentificationType[IdentificationType["Id"] = 2] = "Id";
    IdentificationType[IdentificationType["Js"] = 3] = "Js";
    IdentificationType[IdentificationType["Name"] = 4] = "Name";
    IdentificationType[IdentificationType["PartialLinkText"] = 5] = "PartialLinkText";
    IdentificationType[IdentificationType["ClassName"] = 6] = "ClassName";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
class BasePage {
    elementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.ClassName(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            default:
                break;
        }
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map