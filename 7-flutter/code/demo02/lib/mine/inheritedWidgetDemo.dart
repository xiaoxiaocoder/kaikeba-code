import 'package:flutter/material.dart';

class InheritedWidgetDemo extends StatefulWidget {
  InheritedWidgetDemo({Key key}) : super(key: key);

  @override
  _InheritedWidgetDemoState createState() => _InheritedWidgetDemoState();
}

class _InheritedWidgetDemoState extends State<InheritedWidgetDemo> {
  int _count = 0;

  void _increseaseCount() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // return Scaffold(
    //   appBar: AppBar(title: Text('InheritWidgetDemo'),),
    //   body: MiddleCount(counter: _count, increaseCount: _increseaseCount),
    //   floatingActionButton: FloatingActionButton(
    //     child: Icon(Icons.add),
    //     onPressed: _increseaseCount,
    //   ),
    // );
    return CounterProvider(
        count: _count,
        increaseCount: _increseaseCount,
        child: Scaffold(
          appBar: AppBar(
            title: Text('InheritWidgetDemo'),
          ),
          body: MiddleCount(),
          floatingActionButton: FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: _increseaseCount,
          ),
        ));
  }
}

class MiddleCount extends StatelessWidget {
  // MiddleCount({Key key, this.counter, this.increaseCount}) : super(key: key);

  // int counter = 0;
  // VoidCallback increaseCount;

  @override
  Widget build(BuildContext context) {
    return Container(
      // child: Center(child: Counter(counter: counter, increaseCount: increaseCount),),
      child: Center(
        child: Counter(),
      ),
    );
  }
}

class Counter extends StatelessWidget {
  // Counter({Key key, this.counter, this.increaseCount}) : super(key: key);
  // int counter = 0;
  // VoidCallback increaseCount;
  @override
  Widget build(BuildContext context) {
    final counter = CounterProvider.of(context).count;
    final increaseCount = CounterProvider.of(context).increaseCount;
    return Center(
      child: GestureDetector(
          onTap: increaseCount,
          child: Text('$counter', style: TextStyle(fontSize: 30))),
    );
  }
}

class CounterProvider extends InheritedWidget {
  CounterProvider({Key key, this.child, this.count, this.increaseCount})
      : super(key: key, child: child);

  final Widget child;
  final int count;
  final VoidCallback increaseCount;

  static CounterProvider of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CounterProvider>();
  }

  @override
  bool updateShouldNotify(CounterProvider oldWidget) {
    return true;
  }
}
