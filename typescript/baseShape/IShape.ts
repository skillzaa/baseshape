import ArrayOfObjects from "../../../dist/ArrayOfObjects";

export default interface IShape {
    /**there is no ShapeAnimation here that has been moved to lower */
    attributes : ArrayOfObjects; //the name is also in the attributes
    
    update(a:number) :boolean
    // preUpdate():void;
    // postUpdate():void;

    draw():void;
    // preDraw():void;
    // postDraw():void;
    setAttr(attrName:string,attrValue:string|number|boolean):string|number|boolean;
    getAttr(attrName:string):string|number|boolean;

}