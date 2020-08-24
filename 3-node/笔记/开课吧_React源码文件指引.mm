<map version="1.0.1"><node CREATED="1598152194691" ID="ID_root" MODIFIED="1598152194691" TEXT="react/packages/"><node CREATED="1598152194691" ID="ID_c1f43abf1ac7cf0359ff" POSITION="right" MODIFIED="1598152194691" TEXT="react-shared：react中公用文件，包含了很多的基本类型数据结构和公用方法"><node CREATED="1598152194691" ID="ID_40e316548056513ab097" MODIFIED="1598152194691" TEXT="ReactVersion.js"><node CREATED="1598152194691" ID="ID_f2c126f398eff91e4c51" MODIFIED="1598152194691" TEXT="React版本号，可通过React.version查看"></node></node><node CREATED="1598152194691" ID="ID_4e3754cf059cb2366036" MODIFIED="1598152194691" TEXT="ReactElementType.js"><node CREATED="1598152194691" ID="ID_ad31da11ff46e1979c21" MODIFIED="1598152194691" TEXT=" ReactElement的数据结构"></node></node><node CREATED="1598152194691" ID="ID_27e5e68b6070e21e0b4b" MODIFIED="1598152194691" TEXT="ReactTypes.js"><node CREATED="1598152194691" ID="ID_f14b39f8e70f508540da" MODIFIED="1598152194691" TEXT="ReactNode、ReactFragment、ReactContext、RefObject等的数据结构"></node></node><node CREATED="1598152194691" ID="ID_498f6bd98acb409c2190" MODIFIED="1598152194691" TEXT="shallowEqual.js"><node CREATED="1598152194691" ID="ID_038587a1f064e3fe32a7" MODIFIED="1598152194691" TEXT="浅比较函数，PureComponent等处中有用到"></node></node><node CREATED="1598152194691" ID="ID_c7cf1cf886c5fa694c4c" MODIFIED="1598152194691" TEXT="isValidElementType.js"><node CREATED="1598152194691" ID="ID_632af1e55afb598bf120" MODIFIED="1598152194691" TEXT="检查是否是有效的Element，主要看type值"></node></node><node CREATED="1598152194691" ID="ID_cccd03bb3f7318a99cd1" MODIFIED="1598152194691" TEXT="ReactSymbols.js"><node CREATED="1598152194691" ID="ID_3c65c6c6ec3d40d63445" MODIFIED="1598152194691" TEXT="标记ReactElement的type，同时做了兼容"></node></node></node><node CREATED="1598152194691" ID="ID_e7d6fc351b6d87b804c7" POSITION="right" MODIFIED="1598152194691" TEXT="react/src：React API"><node CREATED="1598152194691" ID="ID_b1d030e43293f73a6b4e" MODIFIED="1598152194691" TEXT="React.js"><node CREATED="1598152194691" ID="ID_f9446176e47be3672446" MODIFIED="1598152194691" TEXT="返回React对象，包含Component、PureComponent、createContext、useState、Fragment等"></node></node><node CREATED="1598152194691" ID="ID_06ad5d5e2d822f095fad" MODIFIED="1598152194691" TEXT="ReactBaseClasses.js"><node CREATED="1598152194691" ID="ID_48a7be10f3da0135988f" MODIFIED="1598152194691" TEXT="定义并返回Component、PureComponent"></node></node><node CREATED="1598152194691" ID="ID_96dca807aef9f0b2fbcc" MODIFIED="1598152194691" TEXT="ReactNoopUpdateQueue.js"><node CREATED="1598152194691" ID="ID_a99665f0f3ef2a8ca266" MODIFIED="1598152194691" TEXT="更新队列的抽象API"></node></node><node CREATED="1598152194691" ID="ID_d1490f5d0665de5cdf55" MODIFIED="1598152194691" TEXT="ReactElement.js"><node CREATED="1598152194691" ID="ID_e663f38484625577bc83" MODIFIED="1598152194691" TEXT="定义ReactElement、createElement、cloneElement、createFactory、isValidElement等&amp;lt;br&amp;gt;"></node></node><node CREATED="1598152194691" ID="ID_2df56dc78ef18d1b29fe" MODIFIED="1598152194691" TEXT="ReactElementValidator.js"><node CREATED="1598152194691" ID="ID_601376bdb1e9b44d07b7" MODIFIED="1598152194691" TEXT="ReactElement校验"></node></node><node CREATED="1598152194691" ID="ID_9e682339d381de03d07d" MODIFIED="1598152194691" TEXT="ReactCreateRef.js"><node CREATED="1598152194691" ID="ID_9083566a520638a06ff8" MODIFIED="1598152194691" TEXT="定义createRef方法"></node></node><node CREATED="1598152194691" ID="ID_e4b560ecb8863e261d1f" MODIFIED="1598152194691" TEXT="ReactHooks.js"><node CREATED="1598152194691" ID="ID_37bd5148c48dc71ad458" MODIFIED="1598152194691" TEXT="定义hooks API，useState等"></node></node><node CREATED="1598152194691" ID="ID_71da1f6e80e78af75f4a" MODIFIED="1598152194691" TEXT="ReactContext.js"><node CREATED="1598152194691" ID="ID_17042cf9977fdf07758b" MODIFIED="1598152194691" TEXT="定义createContext方法"></node></node><node CREATED="1598152194691" ID="ID_efaf32c54a88e5d67103" MODIFIED="1598152194691" TEXT="memo.js"><node CREATED="1598152194691" ID="ID_f44f4bc0c0b0925b81e6" MODIFIED="1598152194691" TEXT="定义memo方法"></node></node></node><node CREATED="1598152194691" ID="ID_560b79166531de45817a" POSITION="right" MODIFIED="1598152194691" TEXT="react-dom/src/client：ReactDOM API"><node CREATED="1598152194691" ID="ID_c61d3bca026f33a69d34" MODIFIED="1598152194691" TEXT="ReactDOM.js"><node CREATED="1598152194691" ID="ID_b289dc9c872ab44c4d18" MODIFIED="1598152194691" TEXT="定义ReactDOM对象并返回"></node></node><node CREATED="1598152194691" ID="ID_e4eb45f9329f97b1b2e4" MODIFIED="1598152194691" TEXT="ReactDOMLegacy.js"><node CREATED="1598152194691" ID="ID_8b39786fd3a1c6c00ca4" MODIFIED="1598152194691" TEXT="定义ReactDOM.render等方法"></node></node></node><node CREATED="1598152194691" ID="ID_4942df7aeee1dd196825" POSITION="right" MODIFIED="1598152194691" TEXT="react-reconciler/src： 协调"><node CREATED="1598152194692" ID="ID_0f24aac9bb4936eff87c" MODIFIED="1598152194692" TEXT="ReactFiber.js"><node CREATED="1598152194692" ID="ID_3254b44bca198b9948f9" MODIFIED="1598152194692" TEXT="定义Fiber、FiberNode数据结构"></node><node CREATED="1598152194692" ID="ID_46bb5cc1c44afda393e7" MODIFIED="1598152194692" TEXT="定义如何创建fiber"></node></node><node CREATED="1598152194692" ID="ID_42f116205bdc921c7575" MODIFIED="1598152194692" TEXT="ReactWorkTags.js"><node CREATED="1598152194692" ID="ID_0ef936a445ba2f85351d" MODIFIED="1598152194692" TEXT="work的tags值，FunctionComponent、ClassComponent、HostRoot等的值"></node></node><node CREATED="1598152194692" ID="ID_06734d069d4c748d96e6" MODIFIED="1598152194692" TEXT="ReactFiberRoot.js "><node CREATED="1598152194692" ID="ID_de001c387e747d51fc42" MODIFIED="1598152194692" TEXT="定义返回了FiberRoot"></node></node><node CREATED="1598152194692" ID="ID_7364b2a630b1d5a7652b" MODIFIED="1598152194692" TEXT="ReactFiberClassComponent.js"><node CREATED="1598152194692" ID="ID_948e16df112180445a0f" MODIFIED="1598152194692" TEXT="定义classComponentUpdater，class的更新会走到这里，如setState、forceUpdate等"></node><node CREATED="1598152194692" ID="ID_1ad0308ecd886678963c" MODIFIED="1598152194692" TEXT="执行class生命周期"></node></node></node><node CREATED="1598152194692" ID="ID_22e3ebd1ff43eca20163" POSITION="right" MODIFIED="1598152194692" TEXT="scheduler/src： 调度"><node CREATED="1598152194692" ID="ID_3cf7d38831369e221ae9" MODIFIED="1598152194692" TEXT="Scheduler.js"><node CREATED="1598152194692" ID="ID_7aca47a4a9463a308abb" MODIFIED="1598152194692" TEXT="定义workLoop函数等"></node></node></node><node CREATED="1598152194692" ID="ID_826a4fc5e64c93e54ec5" POSITION="right" MODIFIED="1598152194692" TEXT="legacy-events.js： 事件处理"><node CREATED="1598152194692" ID="ID_750430a231694ec9f894" MODIFIED="1598152194692" TEXT="ReactGenericBatching.js"><node CREATED="1598152194692" ID="ID_ec06c482b61c56090674" MODIFIED="1598152194692" TEXT="ReactGenericBatching函数"></node></node></node><node CREATED="1598152194692" ID="ID_612988a59b898b17c24a" POSITION="right" MODIFIED="1598152194692" TEXT="react-is/src: 判断React元素类型，如ReactIs.isContextConsumer(&amp;lt;ThemeContext.Consumer /&amp;gt;); // true"></node></node></map>