import Arc from './arc/Arc.js';
export default class Primtives {
    constructor() {
        this.data = [];
    }
    addArc() {
        const arc = new Arc();
        this.data.push(arc);
        return arc;
    }
}
