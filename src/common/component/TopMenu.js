"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var antd_1 = require("antd");
var TopMenu = (function (_super) {
    __extends(TopMenu, _super);
    function TopMenu() {
        return _super.call(this) || this;
    }
    TopMenu.prototype.render = function () {
        return (React.createElement(antd_1.Row, { style: { background: "rgb(64,64,64)" } },
            React.createElement(antd_1.Col, { span: 12, offset: 6 }, "\u9876\u90E8\u83DC\u5355")));
    };
    return TopMenu;
}(React.Component));
exports.TopMenu = TopMenu;
//# sourceMappingURL=TopMenu.js.map