"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateStringToDate = function (date) {
    var dateArr = date.split("/").map(function (item) { return parseInt(item); });
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
