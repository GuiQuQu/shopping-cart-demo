export default (fn: () => void) => {
    setTimeout(() => {
        fn();
        console.log("这是timeout");
    }, 2000);
}