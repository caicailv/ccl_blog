function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    /* 
        dispatch 
        向上触发自定义事件并传递数据,祖先组件可以通过this.$on(eventName,callback)接收
        componentName 组件名称
        eventName 自定义事件名称
        params 参数
        this.$emit('componentName',{params})
    */
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      // parent不为空 且 (name为空或name!=)
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        // parent.$emit.apply(parent, [eventName].concat(params));
        parent.$emit.call(parent, eventName, params);
      }
    },
    // 向下派发自定义事件
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};