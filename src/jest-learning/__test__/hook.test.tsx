

describe("钩子函数测试", () => {

    beforeEach(() => {
        console.log("before Each!!!");
    });

    beforeAll(() => {
        console.log("=== before All ====");
    });

    afterEach( () => {
        console.log("after Each!!!");
    });

    afterAll(() => {
        console.log("=== after All ===");
    });

    test("test1",() => {
        expect(1).toBe(1);
    })

    test("test2", () => {
        expect(2).toBe(2);
    })
})

export {};