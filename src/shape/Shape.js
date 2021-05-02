import BaseShape from "../baseShape/BaseShape.js";
export default class Shape extends BaseShape {
    constructor(shapeData = {}) {
        super();
        this.shapeData = this.offsetShapeData(shapeData);
    }
    draw(metal) {
        metal.saveCtx();
        metal.getCtxValues(this.attributes);
        //if (this.attributes.getProperty("currentRotateAngle") > 0) {
        metal.translateCanvas(this.attributes);
        metal.rotateCanvas(this.attributes);
        metal.unTranslateCanvas(this.attributes);
        //}  
        this.drawShape(metal);
        if (this.attributes.getAttr("drawBoundingRectangle") == true) {
            this.drawBoundingRectangle(metal);
        } //draw ends
    } //draw fn ends
    drawShape(metal) {
        metal.ctx.beginPath();
        metal.ctx.moveTo(this.getAttr("x"), this.getAttr("y")); //-----
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            const item = this.shapeData[idx];
            const drawX = (item.x) + this.getAttr("x");
            const drawY = (item.y) + this.getAttr("y");
            if (item.cmd === "moveTo") {
                metal.ctx.moveTo(drawX, drawY);
            }
            else if (item.cmd === "lineTo") {
                metal.ctx.lineTo(drawX + this.getAttr("width"), drawY);
            }
        }
        metal.ctx.strokeStyle = this.getAttr("color");
        metal.ctx.stroke();
    }
    setAttr(attrName, attrValue) {
        return Number(this.attributes.setProperty(attrName, attrValue));
    }
    getAttr(attrName) {
        return (this.attributes.getProperty(attrName));
    }
    getShapeData() {
        const shapeData = {};
        //--x = 100 , y= 100
        shapeData.data = [
            { sortOrder: 1, x: this.offsetX(200), y: this.offsetY(100), cmd: "lineTo" },
            { sortOrder: 2, x: this.offsetX(200), y: this.offsetY(200), cmd: "lineTo" },
            { sortOrder: 3, x: this.offsetX(100), y: this.offsetY(200), cmd: "lineTo" },
            { sortOrder: 3, x: this.offsetX(100), y: this.offsetY(100), cmd: "lineTo" }
        ];
        return shapeData;
    }
    offsetX(no) {
        return no - this.getAttr("x");
    }
    offsetY(no) {
        return no - this.getAttr("y");
    }
    offsetShapeData(shapeData) {
        for (let idx = 0; idx < shapeData.length; idx++) {
            const item = shapeData[idx];
            const x = this.offsetX(item.x);
            if (x > 0) {
                item.x = x;
            }
            else {
                item.x = 0;
            }
            const y = this.offsetY(item.y);
            if (y > 0) {
                item.y = y;
            }
            else {
                item.y = 0;
            }
        }
        return shapeData;
    }
    getLeftPoint() {
        let finalLeftPoint = 5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].x < finalLeftPoint) {
                finalLeftPoint = this.shapeData[idx].x;
            }
        }
        //  console.log("finalLeftPoint",) 
        return finalLeftPoint;
    }
    getRightPoint() {
        let finalRightPoint = -5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].x > finalRightPoint) {
                finalRightPoint = this.shapeData[idx].x;
            }
        }
        //  console.log("finalLeftPoint",) 
        return finalRightPoint;
    }
    getTopPoint() {
        let finalTopPoint = 5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].y < finalTopPoint) {
                finalTopPoint = this.shapeData[idx].y;
            }
        }
        return finalTopPoint;
    }
    getBottomPoint() {
        let finalBottomPoint = -5000;
        for (let idx = 0; idx < this.shapeData.length; idx++) {
            if (this.shapeData[idx].y > finalBottomPoint) {
                finalBottomPoint = this.shapeData[idx].y;
            }
        }
        //  console.log("finalLeftPoint",) 
        return finalBottomPoint;
    }
    getMiddlePoint() {
        const p = {};
        p.x = (this.getLeftPoint() + this.getAttr("x")) + ((this.getRightPoint() - this.getLeftPoint()) / 2);
        p.y = (this.getTopPoint() + this.getAttr("y")) + ((this.getBottomPoint() - this.getTopPoint()) / 2);
        return p;
    }
    drawBoundingRectangle(metal) {
        metal.ctx.beginPath();
        metal.ctx.rect(
        //x
        ((this.getLeftPoint() + this.getAttr("x")) - this.getAttr("boundingRectanglePadding")), 
        //y
        ((this.getTopPoint() + this.getAttr("y")) - this.getAttr("boundingRectanglePadding")), 
        //width
        ((this.getRightPoint() - this.getLeftPoint()) + this.getAttr("width")) + (this.getAttr("boundingRectanglePadding") * 2), 
        //height
        ((this.getBottomPoint() - this.getTopPoint()) + this.getAttr("height")) + (this.getAttr("boundingRectanglePadding") * 2));
        metal.ctx.strokeStyle = this.getAttr("boundingRectangleColor");
        metal.ctx.stroke();
    }
    markPoint(metal, point) {
        metal.ctx.beginPath();
        metal.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        metal.ctx.strokeStyle = "yellow";
        metal.ctx.fillStyle = "yellow";
        metal.ctx.font = "18px serif";
        metal.ctx.stroke();
        metal.ctx.fillText(`(${point.x},${point.y})`, point.x - 10, point.y - 10);
    }
}
