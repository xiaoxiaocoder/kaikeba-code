import 'package:flutter/material.dart';

class GridViewScreen extends StatelessWidget {
  GridViewScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('GridView 学习'),
        ),
        body: getGridView());
  }

  List<String> _items = List.generate(50, (index) => 'item' + index.toString());

  getGridView() {
    // TODO: 主轴， 纵轴
    // return GridView.count(
    //   crossAxisCount: 2,
    //   // 横向元素间距
    //   crossAxisSpacing: 40,
    //   mainAxisSpacing: 10,
    //   // 宽高比
    //   childAspectRatio: 0.5,
    //   children: _items.map(getItemContainer).toList(),
    // );

    //SliverGridDelegateWithFixedCrossAxisCount
    return GridView.builder(
      itemCount: _items.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        // 每行显示几个区块
        crossAxisCount: 3,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        childAspectRatio: 0.5
      ),
      itemBuilder: (context, index) {
        return getItemContainer(_items[index]);
      },
    );

    // return GridView.builder(
    //   itemCount: _items.length,
    //   gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
    //     // 设置区块的宽度
    //     maxCrossAxisExtent: 200,
    //     crossAxisSpacing: 20,
    //     mainAxisSpacing: 20
    //   ),
    //   itemBuilder: (context, index) {
    //     return getItemContainer(_items[index]);
    //   },
    // );
  }

  Widget getItemContainer(String item) {
    return Container(
      color: Colors.blue,
      // 元素居中
      alignment: Alignment.center,
      child: Text(
        item,
        style: TextStyle(color: Colors.white, fontSize: 20),
      ),
    );
  }
}
