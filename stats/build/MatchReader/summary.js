"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchSummary = /** @class */ (function () {
    function MatchSummary(analyser, report) {
        this.analyser = analyser;
        this.report = report;
    }
    MatchSummary.prototype.buildAndReport = function (data) {
        var result = this.analyser.run(data);
        this.report.print(result);
    };
    return MatchSummary;
}());
exports.MatchSummary = MatchSummary;
