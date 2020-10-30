import 'dart:async';
import 'package:flutter/material.dart';
import 'package:demo02/FlowerApp.dart';
import 'Application.dart';

class WelcomeScreen extends StatefulWidget {
  WelcomeScreen({Key key}) : super(key: key);

  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  int counter = 3;

  Timer _timer;

  @override
  void initState() {
    super.initState();
    _timer = new Timer.periodic(Duration(seconds: 1), (timer) {
      if (counter == 1) {
        // _timer.cancel();
        // _timer = null;
        goHomePage();
      }
      setState(() {
        print(counter);
        counter = --counter;
      });
    });
  }

  goHomePage() {
    _timer.cancel();
    _timer = null;
    Navigator.of(context).pushAndRemoveUntil(
        MaterialPageRoute(builder: (context) => FlowerApp()),
        // route为空时跳转
        (route) => route == null);
  }

  @override
  Widget build(BuildContext context) {
    // 当前屏幕的size
    final size = MediaQuery.of(context).size;
    Application.screenHeight = size.height;
    Application.screenWidth = size.width;
    // 状态栏高度
    Application.statusBarHeight = MediaQuery.of(context).padding.top;
    Application.bottomBarHeight = MediaQuery.of(context).padding.bottom;

    return Scaffold(
      body: Stack(
        children: [
          Container(
            child: Image.asset(
              'assets/images/welcome.jpg',
              height: Application.screenHeight,
              fit: BoxFit.cover,
            ),
          ),
          Positioned(
            top: Application.statusBarHeight,
            right: 30,
            child: RaisedButton(
              
              child: Chip(
                label: Text('$counter秒'),
                backgroundColor: Colors.transparent,
              ),
              onPressed: () {
                // Navigator.of(context).pushReplacement(
                    // MaterialPageRoute(builder: (context) => FlowerApp()));
                goHomePage();
              },
            ),
          )
        ],
      ),
    );
  }
}
