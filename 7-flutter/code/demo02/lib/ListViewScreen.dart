import 'package:flutter/material.dart';

class ListViewScreen extends StatelessWidget {
  ListViewScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const String text = '这是一段文字';

    return Scaffold(
        appBar: AppBar(
          title: Text('ListView 学习'),
        ),
        body: getListView());
  }

  List<String> _items = List.generate(50, (index) => 'item' + index.toString());

  getListView() {
    // 普通列表
    // return ListView.builder(
    //   itemCount: _items.length,
    //   itemBuilder: (context, index) {
    //     var content = _items[index];
    //     // 水波纹效果
    //     return InkWell(
    //       child: Padding(
    //         padding: EdgeInsets.only(top: 20),
    //         child: Text(content),
    //       ),
    //       onTap: () {
    //         print('onTap');
    //       },
    //     );
    //   },
    // );

    // 分割线
    return ListView.separated(
      itemCount: _items.length,
      itemBuilder: (context, index) {
        var content = _items[index];
        // 水波纹效果
        return InkWell(
          child: Padding(
            padding: EdgeInsets.only(top: 20),
            child: Text(content),
          ),
          onTap: () {
            print('onTap');
          },
        );
      },
      separatorBuilder: (context, index) {
        return Divider(color: Colors.redAccent,);
      },
    );
  }
}
