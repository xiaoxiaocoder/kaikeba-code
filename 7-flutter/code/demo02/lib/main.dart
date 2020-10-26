import 'package:flutter/material.dart';
import  'package:demo02/home.dart';
import 'GestureTask.dart';
import 'ListViewScreen.dart';
import 'GridViewScreen.dart';
import 'SingleChildScrollViewScreen.dart';

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
      home: FlowerApp(),
      // home: GestureTask(),
      // home: ListViewScreen(),
      // home: GridViewScreen(),
      // home: SingleChildScrollViewScreen()
    );
  }
}

