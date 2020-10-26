import 'package:flutter/material.dart';

class GestureTask extends StatelessWidget {
  const GestureTask({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    const String text = '这是一段文字';
    return Scaffold(
      appBar: AppBar(
        title: Text('手势学习'),
      ),
      body: Container(
        color: Colors.red,
        // 行内元素 
        // child: Text('this is a text'),
        // BoxConstraints.expand() 子元素占用的空间全局展开
        // constraints: BoxConstraints.expand(),
        child: Center(
          // child: Text('This is a text'),
          // child: RaisedButton(
          //   onPressed: () {
          //     print('button click');
          //   },
          //   child: Text(text),
          // ),
          child: GestureDetector(child: Text(text), onTap: (){
            print('on Tap');
          },),
        ),
      ),
    );
  }
}