import 'dart:convert';

class Firm {
  final String logo;
  final String name;
  final String location;
  final String type;
  final String size;
  final String employee;
  final String hot;
  final String count;
  final String inc;

  // 构造函数
  Firm({
    this.logo,
    this.name,
    this.location,
    this.type,
    this.size,
    this.employee,
    this.hot,
    this.count,
    this.inc,
  });

  static List<Firm> resolveDataFromJsonString(String str) {
    List data = jsonDecode(str)['list'];
    return data.map((item) => new Firm(
      logo: item['logo'],
      name: item['name'],
      location: item['location'],
      type: item['type'],
      size: item['size'],
      employee: item['employee'],
      hot: item['hot'],
      count: item['count'],
      inc: item['inc'],
    )).toList();
  }
}
