
describe("第一个测试用例", () => {

    test("First Test", () => {
        expect(<div></div>).toEqual(<div></div>)
    });

    test("测试 jest.fn()", () => {
        let mockFn = jest.fn();
        let result = mockFn(1, 2, 3);
        expect(result).toBeUndefined(); // 返回值
        expect(mockFn).toBeCalled(); // 被调用
        expect(mockFn).toBeCalledTimes(1); // 被调用一次
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3); // 调用时传入的参数是1,2,3
    });

    test("测试jest.fn() 定义返回值", () => {
        let mockFn = jest.fn().mockReturnValue("mock return value");
        expect(mockFn()).toBe("mock return value");
    });

    test("测试jest.fn() 内部实现", () => {
        let mockFn = jest.fn((num1, num2) => {
            return num1 * num2;
        })
        expect(mockFn(3, 4)).toBe(12);
    })

    test("测试jest.fn() 返回Promise", async () => {
        let mockFn = jest.fn().mockResolvedValue("resolved value");
        let result = await mockFn();
        expect(result).toBe("resolved value");
        expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
        expect(mockFn().toString()).toBe("[object Promise]");
    });

    test("查看mock属性", () => {
        const mockCallback = jest.fn(x => 88 + x);
        const forEach = <T,>(arr: T[], callback: (element: T) => T): void => {
            for (let i = 0; i < arr.length; i++) {
                callback(arr[i]);
            }
        };
        forEach([1, 2, 3], mockCallback);
        // mock函数被调用的次数
        expect(mockCallback.mock.calls.length).toBe(3);
        //第一次调用时,第一个参数是1
        expect(mockCallback.mock.calls[0][0]).toBe(1);
        // 第一次调用的第二个参数
        // expect(mockCallback.mock.calls[0][1]).toBeUndefined();
        // 第一次调用的返回值是89
        expect(mockCallback.mock.results[0].value).toBe(89);
    });

});

export { };