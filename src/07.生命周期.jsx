//组件的创建阶段（只执行一次）
/*
construcor=>   1. this.state={}
               2.componentWillMount(组件还未挂载)
               3.render渲染虚拟DOM（只是创建在内存中，未挂载）
               4.componentDidMount(将DOM挂载到页面中)
运行中（出发函数）=>1.状态改变=>1.shouldComponentUpdate（组件是否更新）return false(返回)
                            =>2.return true componentWillUpdate（组件将要更新）
                            =>3.render
                            =>4.componentDidUpdate(组件更新)
                =>2.属性改变=>1.componentReceiveProps（会进到上面第一条）
卸载=>componentWillUnmount（此时还未卸载）
*/ 