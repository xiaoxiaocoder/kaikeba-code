import 'package:flutter/material.dart';

class NavigationScreen extends StatelessWidget {
  // const NavigationScreen({Key key}) : super(key: key);

  final String content;
  NavigationScreen(this.content);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(title: Text('导航的使用' + content)),
      body: Center(
        child: Column(children: [
          RaisedButton(
            child: Text(content),
            onPressed: () => {
              Navigator.of(context).pop('返回方式一： ' + content )
            },
          ),
          RaisedButton(
            child: Text(content + 'pushNamed' + '   go三级页面'),
            onPressed: () => {
              Navigator.of(context).pushNamed('/thirdNavPage' )
            },
          ),
          RaisedButton(
            child: Text(content + 'popAndPushNamed' + '   go三级页面'),
            onPressed: () => {
              Navigator.of(context).popAndPushNamed('/thirdNavPage' )
            },
          ),
          RaisedButton(
            child: Text(content + 'pushReplacementNamed'+ '   go三级页面'),
            onPressed: () => {
              Navigator.of(context).pushReplacementNamed('/forthNavPage' )
            },
          )
        ]),
      ),
    );
  }
}
