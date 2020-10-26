/** 无状态 */
import 'package:flutter/material.dart';

class Discovery extends StatelessWidget {
  const Discovery({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Discovery'),
      ),
      body: Center(
        child: Text('Discovery')
      ),
    );
  }
}