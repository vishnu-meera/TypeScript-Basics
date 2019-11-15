"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var LinkNode = /** @class */ (function () {
    function LinkNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkNode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        _this.count = 0;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        this.count += 1;
        var newNode = new LinkNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var tail = this.head;
        while (tail.next)
            tail = tail.next;
        tail.next = newNode;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        if (!this.head)
            throw new Error("List is empty");
        var temp = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = temp;
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.count;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error("Index out of balance");
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter += 1;
            node = node.next;
        }
        throw new Error("Index out of balance");
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            throw new Error("List is empty");
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(sorter_1.Sorter));
exports.LinkedList = LinkedList;
