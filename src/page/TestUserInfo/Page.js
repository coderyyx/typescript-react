"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var antd_1 = require("antd");
var TopMenu_1 = require("../../common/component/TopMenu");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        return _super.call(this, props) || this;
    }
    Page.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(TopMenu_1.TopMenu, null),
            React.createElement(antd_1.Button, { type: "primary" }, "\u65B0\u5EFA222")));
    };
    return Page;
}(React.Component));
exports.Page = Page;
//# sourceMappingURL=Page.js.map