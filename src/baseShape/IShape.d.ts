import ArrayOfObjects from "../../../dist/ArrayOfObjects";
export default interface IShape {
    /**there is no ShapeAnimation here that has been moved to lower */
    attributes: ArrayOfObjects;
    update(a: number): boolean;
    draw(): void;
    setAttr(attrName: string, attrValue: string | number | boolean): string | number | boolean;
    getAttr(attrName: string): string | number | boolean;
}
