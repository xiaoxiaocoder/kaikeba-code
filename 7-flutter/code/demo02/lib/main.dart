import 'package:flutter/material.dart';
import  'package:demo02/FlowerApp.dart';
import 'GestureTask.dart';
import 'ListViewScreen.dart';
import 'GridViewScreen.dart';
import 'SingleChildScrollViewScreen.dart';
import 'package:demo02/NavigationScreen.dart';
import 'package:demo02/WelcomeScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: FlowerApp(),
      home: WelcomeScreen(),
      routes: {
        '/secondNavPage': (BuildContext context) {
          return NavigationScreen('路由静态传递');
        },
        '/thirdNavPage': (BuildContext context) {
          return GestureTask();
        },
        '/forthNavPage': (BuildContext context) {
          return ListViewScreen();
        }
      },
      // home: GestureTask(),
      // home: ListViewScreen(),
      // home: GridViewScreen(),
      // home: SingleChildScrollViewScreen()
    );
  }
}

