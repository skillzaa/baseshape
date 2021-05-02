import Animations from "../../../animation/Generators.js";
//import ITextAnimations from "./ITextAnimations.js";
export default class TextAnimations extends Animations {
    constructor() {
        super();
        this.scale = (fromSecond, toSecond, fromWidth, toWidth, fromHeight, toHeight) => {
            const w = this.getLinear({ attributeToAnimateName: "width", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: fromWidth, to: toWidth });
            this.data.push(w);
            //----------------------------
            const h = this.getLinear({ attributeToAnimateName: "height", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: fromHeight, to: toHeight });
            this.data.push(h);
            return true;
        };
    }
    rotate(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const w = this.getLinear({ attributeToAnimateName: "currentRotateAngle", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(w);
        return w;
    }
    bla(tf = true) {
        return tf;
    }
}
