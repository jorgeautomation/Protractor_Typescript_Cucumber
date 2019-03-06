"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excel = require("ts-xlsx");
class ExcelUtil {
    static ReadExcelSheet(filepath) {
        let file = excel.readFile(filepath);
        let sheet = file.Sheets["Sheet1"];
        return excel.utils.sheet_to_json(sheet)[0];
    }
}
exports.ExcelUtil = ExcelUtil;
//# sourceMappingURL=ExcelUtil.js.map