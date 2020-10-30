import 'package:flutter/material.dart';
import 'package:demo02/discovery/Discovery.dart';
import 'package:demo02/friends/Friends.dart';
// import 'package:demo02/management/Management.dart';
import 'package:demo02/mine/Mine.dart';
import 'company/Management.dart';
import 'company/ManagementPullRefresh.dart';

class FlowerApp extends StatefulWidget {
  FlowerApp({Key key}) : super(key: key);

  @override
  _FlowerAppState createState() => _FlowerAppState();
}

class _FlowerAppState extends State<FlowerApp> {

  final List<Widget> _pages = [
    Friends(),
    Discovery(),
    // Management(),
    ManagementPullRefresh(),
    Mine()
  ];

  List<BottomNavigationBarItem> _tabs = [
    //   {title: 'Friends', icon: 'invite_normal.png', activeIcon: 'invite_selected.png'},
    //   {title: 'Discovery', icon: 'discovery_normal.png', activeIcon: 'invite_selected.png'},
    //   // {title: 'Management', icon: 'manager_normal.png', activeIcon: 'invite_selected.png'},
    //   // {title: 'Mine', icon: 'mine_normal.png', activeIcon: 'invite_selected.png'},
    // ].map(function(item) {
    //   return BottomNavigationBarItem(
    //     title: item.title,
    //     icon: Image.asset('assets/image/' + item.icon, width: 24, height: 24),
    //     // activeIcon: Image.asset('assets/image/' + item.activeIcon, width: 24, height: 24),
    //   )
    // });

  BottomNavigationBarItem(
    label: 'Friends',
    // 使用按钮
    icon: Image.asset('assets/images/invite_normal.png', width: 24, height: 24),
    activeIcon: Image.asset('assets/images/invite_selected.png', width: 24, height: 24)
  ),
  BottomNavigationBarItem(
    label: 'Discovery',
    // 使用按钮
    icon: Image.asset('assets/images/discovery_normal.png', width: 24, height: 24),
    activeIcon: Image.asset('assets/images/discovery_selected.png', width: 24, height: 24)
  ),
  BottomNavigationBarItem(
    label: 'Management',
    // 使用按钮
    icon: Image.asset('assets/images/manager_normal.png', width: 24, height: 24),
    activeIcon: Image.asset('assets/images/manager_selected.png', width: 24, height: 24)
  ),
  BottomNavigationBarItem(
    label: 'Mine',
    // 使用按钮
    icon: Image.asset('assets/images/mine_normal.png', width: 24, height: 24),
    activeIcon: Image.asset('assets/images/mine_selected.png', width: 24, height: 24)
  ),
];

  int _currentIndex = 0;
  onTapAction(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTapAction,
        currentIndex: _currentIndex,
        type: BottomNavigationBarType.fixed,
        selectedItemColor: Color.fromARGB(255, 242, 89, 63),
        items: _tabs
      )
    );
  }
}