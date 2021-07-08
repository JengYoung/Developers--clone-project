let timer: number;
const throttle:Function = function (cb: any) {
    return function () {
        if (!timer) {
            // setTimeout을 이용하여 설정한 주기마다 콜백이 실행될 수 있도록 하였고,
            // 실행이 끝난 후에는 다시 throttleCheck를 false로 만들어 주어, 설정한 주기마다 이벤트가 한 번씩만 호출되도록 하였습니다.
            timer = setTimeout(() => {
                cb(...arguments);
                timer = null;
            }, 300);
        }
    }
}
export default throttle;