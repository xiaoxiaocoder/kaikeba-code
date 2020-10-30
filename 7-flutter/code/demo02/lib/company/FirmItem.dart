import 'dart:io';

import 'package:flutter/material.dart';
import 'FirmModel.dart';

class FirmItem extends StatelessWidget {
  final FirmModel model;

  FirmItem(this.model);

  @override
  Widget build(BuildContext context) {
    final FirmModel item = this.model;
    final TextStyle textStyle = TextStyle(color: Colors.grey);
    // 暗号： 原来还可以这么玩
    return Container(
        padding: EdgeInsets.all(5),
        child: Card(
          shadowColor: Color.fromRGBO(170, 170, 170, .6),
          elevation: 2,
          child: InkWell(
            onTap: () {
              Navigator.of(context).pushNamed('/secondNavPage');
            },
            child: Padding(
                padding: EdgeInsets.fromLTRB(10, 10, 10, 15),
                child: Flex(
                  direction: Axis.vertical,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        new Column(
                            children: [Image.network(item.logo, width: 50)]),
                        new Column(children: [
                          Padding(
                            padding: EdgeInsets.fromLTRB(20, 0, 10, 0),
                            child: Container(
                                width: 100,
                                child: Text(
                                  item.location,
                                  style: textStyle,
                                  overflow: TextOverflow.ellipsis,
                                )),
                          )
                        ]),
                        new Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('| ' + item.type, style: textStyle),
                              Text('| ' + item.size, style: textStyle),
                              Text('| ' + item.employee, style: textStyle)
                            ])
                      ],
                    ),
                    // Divider(color: Colors.grey, height: 30),
                    Divider(),
                    // Divider(),
                    Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          new Column(children: <Widget>[
                            Text(
                                '热招：' +
                                    item.hot.toString() +
                                    '等' +
                                    item.count.toString() +
                                    '个职位',
                                style: textStyle)
                          ]),
                          Icon(
                            Icons.lock_clock,
                            color: Colors.grey,
                          ),
                          Expanded(
                              child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.end,
                                  children: <Widget>[
                                Padding(
                                  padding: EdgeInsets.only(right: 5),
                                  child: Icon(
                                    Icons.chevron_right,
                                    color: Colors.grey,
                                  ),
                                )
                              ]))
                        ])
                  ],
                )),
          ),
        ));
  }
}
