"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var TotalWin = /** @class */ (function () {
    function TotalWin(team) {
        this.team = team;
    }
    TotalWin.prototype.run = function (data) {
        var _this = this;
        var man_united_wins = 0;
        data.forEach(function (match) {
            if ((match[1] === _this.team && match[5] === utils_1.MatchResult.HomeWin) ||
                (match[2] === _this.team && match[5] === utils_1.MatchResult.AwayWin)) {
                man_united_wins += 1;
            }
        });
        return "Man United win count = " + man_united_wins;
    };
    return TotalWin;
}());
exports.TotalWin = TotalWin;
