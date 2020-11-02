import 'package:flutter/material.dart';
import '../NavigationScreen.dart';
import 'inheritedWidgetDemo.dart';

class Mine extends StatelessWidget {
  const Mine({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: new Text('Mine'),
      ),
      body: Center(
          // child: Text('Mine')
          child: Column(children: [
        RaisedButton(
          child: Text('静态跳转'),
          onPressed: () {
            Navigator.of(context)
                .pushNamed('/secondNavPage')
                .then((value) => print(value));
          },
        ),
        RaisedButton(
          child: Text('动态跳转'),
          onPressed: () {
            Navigator.push(
                context,
                MaterialPageRoute(
                    // builder: (context) => NavigationScreen('动态路由')));
                    builder: (context) => InheritedWidgetDemo()));
          },
        )
      ])),
    );
  }
}
