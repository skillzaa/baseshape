import BaseShape from "../baseShape/BaseShape.js";
export default class Shape extends BaseShape {
    private shapeData;
    constructor(shapeData?: {});
    draw(metal: any): void;
    drawShape(metal: any): void;
    setAttr(attrName: string, attrValue: string | number | boolean): string | number | boolean;
    getAttr(attrName: string): any;
    getShapeData(): {};
    private offsetX;
    private offsetY;
    offsetShapeData(shapeData: any): any;
    getLeftPoint(): number;
    getRightPoint(): number;
    getTopPoint(): number;
    getBottomPoint(): number;
    getMiddlePoint(): {};
    drawBoundingRectangle(metal: any): void;
    markPoint(metal: any, point: object): void;
}
