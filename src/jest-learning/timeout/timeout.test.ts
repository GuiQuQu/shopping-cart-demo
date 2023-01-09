import timeout from "./timeout";

test("测试定时器", (done) => {
        timeout(() => {
            expect(2 + 2).toBe(4);
            done();
        });
})

test("测试fakeTimers", () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    timeout(fn);
    // 时间快进2000毫秒
    jest.advanceTimersByTime(2000);
    expect(fn).toHaveBeenCalledTimes(1);
})