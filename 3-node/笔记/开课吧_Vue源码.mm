<map version="1.0.1"><node CREATED="1598152201039" ID="ID_root" MODIFIED="1598152201039" TEXT="Vue源码"><node CREATED="1598152201039" ID="ID_9632bd7694451a0c788d" POSITION="right" MODIFIED="1598152201039" TEXT="初始化流程"><node CREATED="1598152201039" ID="ID_c571f7c1555d952c93dc" MODIFIED="1598152201039" TEXT="入口文件：覆盖$mount&amp;lt;br&amp;gt;platforms/web/entry-runtime-with-compiler"></node><node CREATED="1598152201040" ID="ID_6a0052cbe4ab8e6abca7" MODIFIED="1598152201040" TEXT="web运行时代码：实现$mount&amp;lt;br&amp;gt;platforms/web/runtime/index"><node CREATED="1598152201040" ID="ID_b645b2907fd7cf60c0c3" MODIFIED="1598152201040" TEXT="$mount"></node><node CREATED="1598152201040" ID="ID_861c41aea76b901e4778" MODIFIED="1598152201040" TEXT="__patch__"></node></node><node CREATED="1598152201040" ID="ID_948d78ed111b9eb1601f" MODIFIED="1598152201040" TEXT="全局api定义&amp;lt;br&amp;gt;core/index"><node CREATED="1598152201040" ID="ID_8722f1f035a90f3bf1d9" MODIFIED="1598152201040" TEXT="core/global-api/index"><node CREATED="1598152201040" ID="ID_e1adfcf340bfb4fddcb2" MODIFIED="1598152201040" TEXT="set"></node><node CREATED="1598152201040" ID="ID_f922520bd9dd30bfe54c" MODIFIED="1598152201040" TEXT="delete"></node><node CREATED="1598152201040" ID="ID_69e7286c1114b866e8ef" MODIFIED="1598152201040" TEXT="nextTick"></node><node CREATED="1598152201040" ID="ID_e0bd3ca69fcabed43f2f" MODIFIED="1598152201040" TEXT="..."></node></node></node><node CREATED="1598152201040" ID="ID_e796c4d7c58e33f60fdd" MODIFIED="1598152201040" TEXT="Vue构造函数&amp;lt;br&amp;gt;core/instance/index"><node CREATED="1598152201040" ID="ID_77384ef499b45a038746" MODIFIED="1598152201040" TEXT="initMixin：实现_init()&amp;lt;br&amp;gt;core/instance/init.js"><node CREATED="1598152201040" ID="ID_8a4eb29f277868ebbf84" MODIFIED="1598152201040" TEXT="initLifecycle"></node><node CREATED="1598152201040" ID="ID_5870c266d5e40c934ddf" MODIFIED="1598152201040" TEXT="initEvents"></node><node CREATED="1598152201040" ID="ID_fb462b700571d23075ab" MODIFIED="1598152201040" TEXT="initRender"></node><node CREATED="1598152201040" ID="ID_319f386ab3460dbc9b8c" MODIFIED="1598152201040" TEXT="beforeCreate"></node><node CREATED="1598152201040" ID="ID_346d45711ab32cb8cc2e" MODIFIED="1598152201040" TEXT="initInjections"></node><node CREATED="1598152201040" ID="ID_7ee458cbf766ddd000aa" MODIFIED="1598152201040" TEXT="initState"></node><node CREATED="1598152201040" ID="ID_6cc895cd47ba43145083" MODIFIED="1598152201040" TEXT="initProvide"></node><node CREATED="1598152201040" ID="ID_a042cd22e3b6792bd81f" MODIFIED="1598152201040" TEXT="created"></node></node><node CREATED="1598152201040" ID="ID_a80b74bfc2516b2b4ade" MODIFIED="1598152201040" TEXT="stateMixin"><node CREATED="1598152201040" ID="ID_9a05a3a0d366f092b9a6" MODIFIED="1598152201040" TEXT="$data,$props,$set,$delete,$watch&amp;lt;br&amp;gt;"></node></node><node CREATED="1598152201040" ID="ID_124d37a2bd3d6374ba81" MODIFIED="1598152201040" TEXT="eventsMixin"><node CREATED="1598152201040" ID="ID_764a7080732db3801692" MODIFIED="1598152201040" TEXT="$on,$emit,$once,$off"></node></node><node CREATED="1598152201040" ID="ID_3190a1ee5eb01d403fc9" MODIFIED="1598152201040" TEXT="lifecycleMixin"><node CREATED="1598152201040" ID="ID_0dd5a879cfadb1ee8b81" MODIFIED="1598152201040" TEXT="_update,$forceUpdate,$destroy"></node></node><node CREATED="1598152201040" ID="ID_96abb532e04d75648778" MODIFIED="1598152201040" TEXT="renderMixin"><node CREATED="1598152201040" ID="ID_cb5409207d80a38c62b0" MODIFIED="1598152201040" TEXT="$nextTick,_render"></node></node></node></node><node CREATED="1598152201040" ID="ID_6284789d3489aeefa08a" POSITION="right" MODIFIED="1598152201040" TEXT="数据响应式"><node CREATED="1598152201040" ID="ID_8bee48051e8976e7804a" MODIFIED="1598152201040" TEXT="data的数据响应式&amp;lt;br&amp;gt;src/core/instance/state.js&amp;lt;br&amp;gt;"><node CREATED="1598152201040" ID="ID_8343d3ddb9c953b1a35e" MODIFIED="1598152201040" TEXT="initState()&amp;lt;br&amp;gt;数据响应式起始"></node><node CREATED="1598152201040" ID="ID_3afec30e50968e751a21" MODIFIED="1598152201040" TEXT="observe()&amp;lt;br&amp;gt;返回ob实例，ob对value做响应式"></node><node CREATED="1598152201040" ID="ID_69768d5645e169caa31b" MODIFIED="1598152201040" TEXT="Observer&amp;lt;br&amp;gt;判断value类型，创建小秘书ob"><node CREATED="1598152201040" ID="ID_50dee263ab4055f5a2c4" MODIFIED="1598152201040" TEXT="walk()"><node CREATED="1598152201040" ID="ID_d2c84f418eb2ec88f9c3" MODIFIED="1598152201040" TEXT="defineReactive()&amp;lt;br&amp;gt;数据的访问拦截"></node></node><node CREATED="1598152201040" ID="ID_75bcd8dd8f812a22a9d4" MODIFIED="1598152201040" TEXT="observeArray()"></node></node><node CREATED="1598152201040" ID="ID_0f187c8bfa41217ddee9" MODIFIED="1598152201040" TEXT="Dep&amp;lt;br&amp;gt;依赖管理，变更通知"><node CREATED="1598152201040" ID="ID_dff8c49a75ebe53c8865" MODIFIED="1598152201040" TEXT="两种dep的作用"></node></node><node CREATED="1598152201040" ID="ID_04f82b1fb435a5581bc5" MODIFIED="1598152201040" TEXT="Watcher&amp;lt;br&amp;gt;和组件挂钩或者和用户定义的观察表达式挂钩，数据变更后执行更新"><node CREATED="1598152201040" ID="ID_e46217c2e74a4db007ff" MODIFIED="1598152201040" TEXT="dep和watcher之间的映射规则"></node></node><node CREATED="1598152201040" ID="ID_1c5294d068ec3e314d7e" MODIFIED="1598152201040" TEXT="array.js&amp;lt;br&amp;gt;数组的特殊处理，覆盖能够改变数组的7个方法"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    // ......
  }
}
```</p></body></html></richcontent></node></node></node><node CREATED="1598152201040" ID="ID_4c24b0d807720d7db73e" POSITION="right" MODIFIED="1598152201040" TEXT="异步更新"><node CREATED="1598152201040" ID="ID_71828c31154ad13ca081" MODIFIED="1598152201040" TEXT="dep.notify()&amp;lt;br&amp;gt;通知更新"></node><node CREATED="1598152201040" ID="ID_a05ad8f5f4add8c317dd" MODIFIED="1598152201041" TEXT="watcher.update()&amp;lt;br&amp;gt;入队请求"></node><node CREATED="1598152201041" ID="ID_31fa68e90cd777136903" MODIFIED="1598152201041" TEXT="queueWatcher()&amp;lt;br&amp;gt;入队、去重启动异步任务"></node><node CREATED="1598152201041" ID="ID_cc9d689702a611bdb115" MODIFIED="1598152201041" TEXT="nextTick()&amp;lt;br&amp;gt;添加、调用异步任务"></node><node CREATED="1598152201041" ID="ID_374d13315ad81ff4de8e" MODIFIED="1598152201041" TEXT="timerFunc()&amp;lt;br&amp;gt;异步执行队列刷新工作"></node><node CREATED="1598152201041" ID="ID_5633a5d5d48b412fc427" MODIFIED="1598152201041" TEXT="watcher.run()&amp;lt;br&amp;gt;真正执行更新操作"></node></node><node CREATED="1598152201041" ID="ID_461b5db0a5fbd6abf5c6" POSITION="right" MODIFIED="1598152201041" TEXT="虚拟DOM"><node CREATED="1598152201041" ID="ID_837d858943b1c46efa7c" MODIFIED="1598152201041" TEXT="src\core\observer\watcher.js&amp;lt;br&amp;gt;执行更新：watcher.run()&amp;lt;br&amp;gt;"></node><node CREATED="1598152201041" ID="ID_3a2d14efa2996608cd27" MODIFIED="1598152201041" TEXT="src\core\instance\lifecycle.js&amp;lt;br&amp;gt;组件更新：updateComponent()&amp;lt;br&amp;gt;"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
updateComponent = () =&amp;gt; {
	vm._update(vm._render(), hydrating)
}
```</p></body></html></richcontent></node><node CREATED="1598152201041" ID="ID_5347a70fcd02c51a6d9c" MODIFIED="1598152201041" TEXT="src\core\instance\render.js&amp;lt;br&amp;gt;计算虚拟dom：_render()&amp;lt;br&amp;gt;"></node><node CREATED="1598152201041" ID="ID_5032a6ce91ee0a96b48d" MODIFIED="1598152201041" TEXT="src\core\instance\lifecycle.js&amp;lt;br&amp;gt;更新：_update()，转换vnode为dom&amp;lt;br&amp;gt;"></node><node CREATED="1598152201041" ID="ID_0b2322cd3742487015de" MODIFIED="1598152201041" TEXT="src\core\vdom\patch.js&amp;lt;br&amp;gt;打补丁：patch()，转换实际执行函数，patching，diff&amp;lt;br&amp;gt;"><node CREATED="1598152201041" ID="ID_f8a1c71ee8d11a8aaa79" MODIFIED="1598152201041" TEXT="树级别比较 patch()"><node CREATED="1598152201041" ID="ID_0307b6e9a31873cf9e1a" MODIFIED="1598152201041" TEXT="不存在新vnode：删"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
if (isUndef(vnode)) {
      if (isDef(oldVnode)) 
         invokeDestroyHook(oldVnode)
      return
}
```</p></body></html></richcontent></node><node CREATED="1598152201041" ID="ID_937c63b163cb19e483ca" MODIFIED="1598152201041" TEXT="不存在老vnode：增"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue)
    }
```</p></body></html></richcontent></node><node CREATED="1598152201041" ID="ID_528c08559713e280bd28" MODIFIED="1598152201041" TEXT="都存在：改&amp;lt;br&amp;gt;这里是diff发生的地方"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
if (!isRealElement &amp;&amp; sameVnode(oldVnode, vnode)) {
        // patch existing root node
        // diff发生的地方
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
      }
```</p></body></html></richcontent></node></node><node CREATED="1598152201041" ID="ID_b61898db037043c7a9fb" MODIFIED="1598152201041" TEXT="递归的更新节点 patchVnode()"><node CREATED="1598152201041" ID="ID_4b0ff7d39419de19bfb6" MODIFIED="1598152201041" TEXT="新旧vnode均有文本且不同，文本更新"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
else if (oldVnode.text !== vnode.text) {
      // 更新文本操作
      nodeOps.setTextContent(elm, vnode.text)
    }
```</p></body></html></richcontent></node><node CREATED="1598152201041" ID="ID_8520a27137f4149a7dcc" MODIFIED="1598152201041" TEXT="属性更新"><richcontent TYPE="NOTE"><html><head></head><body><p>存在data，依次执行cbs中更新函数
```js
if (isDef(data) &amp;&amp; isPatchable(vnode)) {
      for (i = 0; i &amp;lt; cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
      if (isDef(i = data.hook) &amp;&amp; isDef(i = i.update)) i(oldVnode, vnode)
    }
```</p></body></html></richcontent></node><node CREATED="1598152201042" ID="ID_db481831e98a2dc9eefa" MODIFIED="1598152201042" TEXT="新旧vnode均有孩子&amp;lt;br&amp;gt;重排updateChildren()&amp;lt;br&amp;gt;"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
if (isDef(oldCh) &amp;&amp; isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
      }
```</p></body></html></richcontent><node CREATED="1598152201042" ID="ID_41beed2694bb08b12d52" MODIFIED="1598152201042" TEXT="重排整体策略：&amp;lt;br&amp;gt;首先假设新旧children首尾有相同，相同则直接patch它们；&amp;lt;br&amp;gt;若没有，则从旧children中查找跟新children中首个节点相同的节点，找到patch它们，找不到创建；&amp;lt;br&amp;gt;若先遍历完新旧其中一个children，循环结束，开始收尾工作：新children先结束，老children中剩下的批量删除；老children先结束，新children中剩余的批量增加"></node><node CREATED="1598152201042" ID="ID_06af8a3160d3fa8e35b3" MODIFIED="1598152201042" TEXT="首尾两两比对过程"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
else if (sameVnode(oldStartVnode, newStartVnode)) {
        // 老开始和新开始相同，打补丁他们，游标同时向后移动
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // 老结束和新结束相同，打补丁，游标向前移动
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        // 老开始和新结束相同，打补丁之外，还要移动节点
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        // 移动到老的队伍后面
        canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        canMove &amp;&amp; nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      }
```</p></body></html></richcontent></node><node CREATED="1598152201042" ID="ID_2731a3f1e6714d0da9ec" MODIFIED="1598152201042" TEXT="在旧children中查找相同节点过程"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
else {
        // 4中猜测情况全部结束，老老实实循环查找
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        // 找到在老孩子数组中的位置
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
        if (isUndef(idxInOld)) { // New element
          // 如果没找到，创建
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        } else {
          // 找到的话，如果是相同节点，打补丁，还要做移动操作
          vnodeToMove = oldCh[idxInOld]
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
            oldCh[idxInOld] = undefined
            canMove &amp;&amp; nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
          }
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
```</p></body></html></richcontent></node><node CREATED="1598152201042" ID="ID_a0c2225eb0cc5f7134fc" MODIFIED="1598152201042" TEXT="循环结束的收尾工作"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
// 老数组先结束，批量增加
    if (oldStartIdx &amp;gt; oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx &amp;gt; newEndIdx) {
      // 新数组先结束，批量删除
      removeVnodes(oldCh, oldStartIdx, oldEndIdx)
    }
```</p></body></html></richcontent></node></node><node CREATED="1598152201042" ID="ID_12cc1ec2e8d4bf774fe2" MODIFIED="1598152201042" TEXT="只有新vnode有children，新增"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
else if (isDef(ch)) {
        // 要是老节点有文本清空之
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, &amp;#39;&amp;#39;)
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      }
```</p></body></html></richcontent></node><node CREATED="1598152201042" ID="ID_2041413e8841e2c5e642" MODIFIED="1598152201042" TEXT="只有老vnode有children，删除它们"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
else if (isDef(oldCh)) {
        // 老节点有孩子
        removeVnodes(oldCh, 0, oldCh.length - 1)
      }
```</p></body></html></richcontent></node><node CREATED="1598152201042" ID="ID_66472f4bf29147ec25db" MODIFIED="1598152201042" TEXT="只有老节点有文本，清空文本"><richcontent TYPE="NOTE"><html><head></head><body><p>```js
else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, &amp;#39;&amp;#39;)
      }
```</p></body></html></richcontent></node></node><node CREATED="1598152201042" ID="ID_6e4ac11cb6a10cde996c" MODIFIED="1598152201042" TEXT="节点创建createElm()"><node CREATED="1598152201042" ID="ID_e44c6b2b6c07146b453e" MODIFIED="1598152201042" TEXT="自定义组件创建createComponent"></node><node CREATED="1598152201042" ID="ID_cb49b95fd47837ecc9fa" MODIFIED="1598152201042" TEXT="保留节点创建"></node></node></node></node></node></map>