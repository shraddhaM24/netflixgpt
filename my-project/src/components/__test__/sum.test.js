import {sum} from "../sum";

test("Sum function should be calculate of the two numbers",() => {

    const res = sum(4,3);

    //Assertion
    expect(res).toBe(7);

})