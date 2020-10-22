import 'package:flutter/material.dart';
import 'package:demo01/BalanceScreen.dart';
import 'package:demo01/ContanctsScreen.dart';
import 'package:demo01/MusicScreen.dart';
import 'package:demo01/MeScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  //RN  render
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: FirstScreen(),
      // initialRoute: '/second',
      // routes: <String, WidgetBuilder> {
      //   '/first': (BuildContext context) => new FirstScreen(),
      //   '/second': (BuildContext context) => new SecondScreen(content: '内容',title: '标题')
      // },
    );
  }
}

// class FirstScreen extends StatelessWidget {

//   @override
//   Widget build(BuildContext context) {
//     return new Scaffold(
//       appBar: AppBar(
//         title: new Text('界面一'),
//         // centerTitle: false,
//         // leading: Icon(Icons.access_alarms),
//         // actions: <Widget>[
//         //   Icon(Icons.accessibility),
//         // ],
//       ),
//       body: new Center(
//          child: Text('界面一'),
//       ),
//     );
//   }
// }

// class SecondScreen extends StatelessWidget {

//   final String content;
//   final String title;

//   //构造函数
//   SecondScreen({this.content, this.title});

//   @override
//   Widget build(BuildContext context) {
//     return new Scaffold(
//       appBar: AppBar(
//         title: new Text('$title'),
//       ),
//       body: new Center(
//          child: Text('$content'),
//       ),
//     );
//   }

// }

class FirstScreen extends StatefulWidget {
  FirstScreen({Key key}) : super(key: key);

  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {

  final List<Widget> _children = [
    BalanceScreen(),
    ContanctsScreen(),
    MusicScreen(),
    MeScreen(),
  ];

  int _currentIndex = 0;

  void onTabTapped(int selectIndex) {
    setState(() {
      _currentIndex = selectIndex;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      // appBar: AppBar(
      //   title: new Text('界面一'),
      // ),
      body: _children[_currentIndex],
      drawer: new Drawer(
         child: Center(
          child: Text('Drawer'), 
         ),
      ),
      bottomNavigationBar: new BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        selectedItemColor: Colors.red,//Color(0xff123456),
        unselectedItemColor: Colors.orange,
        // selectedFontSize: 14.0,
        unselectedFontSize: 14.0,
        // 暗号： 初见Flutter
        //BottomNavigationBarType (默认为shifting风格)
        // fixed 显示所有的菜单label文字标识：
        // shifting点击导航元素之后才会显示菜单文字信息(突出显示所选菜单， 隐藏没有选择的item)
        type: BottomNavigationBarType.fixed,  
        items: <BottomNavigationBarItem>[
          new BottomNavigationBarItem(
            icon: Icon(Icons.account_balance),
            title: Text('好友')
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.contacts),
            title: Text('发现')
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.library_music),
            title: Text('管理')
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.account_circle_rounded),
            title: Text('我的')
          ),
        ]
      ),
    );
  }
}


