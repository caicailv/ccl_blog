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
/*  
  向上找到最近的指定组件
  context 当前组件实例
  componentName: 需要找到的组件名称
  return obj 寻找到的组件实例对象或undefined
*/
function findComponentUpward(context, componentName) {
    let parent = context.$parent;
    let name = parent.$options.name;

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
/* 
    向上找到所有指定组件
    context 当前组件实例
    componentName: 需要找到的组件名称
    return  array 寻找到的组件实例对象
*/
function findComponentsUpward(context, componentName) {
    let parentArr = [];
    let parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) {
            parentArr.push(parent)
        }
        return parentArr.concat(findComponentsUpward(parent, componentName))
    } else {
        return [];

    }
}

/* 
    向下找到最近的指定组件
    context 当前组件实例
    componentName: 需要找到的组件名称
    return  object 组件实例
*/
function findComponentDownward(context, componentName) {
    // 遍历所有子组件
    let childrens = context.$children;
    let children;
    // 先遍历第一层,全都没有再遍历下一层
    for (let el of childrens) {
        if (el.$options.name === componentName) {
            children = el;
            break
        } else {
            children = findComponentDownward(el, componentName);
            if (children) break;
        }
    }
    return children;

}

/* 
    向下找到所有的指定组件
    context 当前组件实例
    componentName: 需要找到的组件名称
    return  array 组件实例
*/
function findComponentsDownward(context, componentName) {
    let childrenArr = [];
    // 遍历所有子组件
    let childrens = context.$children;
    for (let el of childrens) {
        let name = el.$options.name;
        if (name === componentName) {
            childrenArr.push(el)
        }
        let elChildren = findComponentsDownward(el, componentName);
        if (elChildren.length != 0) {
            childrenArr = childrenArr.concat(elChildren)
        }

    }
    return childrenArr;
}
/* 
    寻找兄弟组件 
    contex: this
    componentName 组件名称 
    exceptMe 是否包含自己本身-
*/
function findBrothersComponents(context, componentName, exceptMe = true) {
    let borderArr = context.$parent.$children;
    let res = borderArr.filter(item => {
        return (item.$options.name === componentName)
    });
    let index = res.findIndex(item => {
        return item._uid === context._uid;
    });
    if (exceptMe && index !== -1) {
        res.splice(index, 1);
    }
    return res;
}
export default {
    timeDown,
    findComponentUpward,
    findComponentsUpward,
    findComponentDownward,
    findComponentsDownward,
    findBrothersComponents
}

