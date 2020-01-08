let timeout = null;
function timeDown(time, callback) {
    let arr = time.split(/[- :\/]/);
    var endDate = new Date(
        arr[0],
        arr[1] - 1,
        arr[2],
        arr[3],
        arr[4],
        arr[5]
    );
    var nowDate = new Date();
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    var modulo = totalSeconds % (60 * 60 * 24);
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    var minutes = Math.floor(modulo / 60);
    var seconds = modulo % 60;
    let status = hours > 0;
    callback({
        hours: hours >= 10 ? hours : ('0' + hours)
        , minutes: minutes >= 10 ? minutes : ('0' + minutes)
        , seconds: seconds >= 10 ? seconds : ('0' + seconds)
    }, status);
    if (status) {
        clearTimeout(timeout);
        //延迟一秒执行自己
        timeout = setTimeout(() => {
            timeDown(time, callback);
        }, 3000);
    }
}
export default{
    timeDown,
}

