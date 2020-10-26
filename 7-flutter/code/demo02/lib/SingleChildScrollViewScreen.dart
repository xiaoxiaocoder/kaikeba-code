import 'package:flutter/material.dart';

class SingleChildScrollViewScreen extends StatelessWidget {
  
  SingleChildScrollViewScreen({Key key}) : super(key: key);

  List<String> _items =
      List.generate(50, (index) => 'item ' + index.toString());
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('SingleChildScrollViewScreen学习'),
      ),
      body: SingleChildScrollView(
          child: Column(
        children: _items
            .map((item) => Text(
                  item,
                  style: TextStyle(fontSize: 20),
                ))
            .toList(),
      )),
    );
  }
}
