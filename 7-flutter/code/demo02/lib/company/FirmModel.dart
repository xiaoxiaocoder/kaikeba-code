import 'dart:convert';

import 'package:flutter/material.dart';

class FirmModel {
  final String logo;
  final String name;
  final String location;
  final String type;
  final String size;
  final String employee;
  final String hot;
  final String count;
  final String inc;

//构造函数
  FirmModel({
    @required this.logo,
    @required this.name,
    @required this.location,
    @required this.type,
    @required this.size,
    @required this.employee,
    @required this.hot,
    @required this.count,
    @required this.inc
  });

  static List<FirmModel> fromJson(String json) {
    List<FirmModel> listModel = new List<FirmModel>();
    List list = jsonDecode(json)['list'];
    list.forEach((element) {
      var model = FirmModel.fromMap(element);
      listModel.add(model);
    });

    return listModel;
  }

  //Map转data
  static FirmModel fromMap(Map map) {
    return new FirmModel(
        logo: map['logo'],
        name: map['name'],
        location: map['location'],
        type: map['type'],
        size: map['size'],
        employee: map['employee'],
        hot: map['hot'],
        count: map['count'],
        inc: map['inc']);
  } 

  static List<FirmModel> fromMapData(Map data) {
    List<FirmModel> listModel = new List<FirmModel>();
    List list = data['list'];
    list.forEach((v){
      var model= FirmModel.fromNetMap(v);
      listModel.add(model);
    });
    return listModel;
  }

  static FirmModel fromNetMap(Map map) {
    return new FirmModel(
      logo: map['logo_url'],
      name: map['market_name'],
      location: map['download_times_fixed'],
      type: map['type'],
      size: map['tag'],
      employee: map['market_id'],
      hot: map['download_times_fixed'],
      count: map['cid2'],
      inc: map['baike_name']);
}

}