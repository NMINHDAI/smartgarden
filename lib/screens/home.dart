import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Stream<List<Show>> shows;
  @override
  void initState() {
    super.initState();
    shows = productsStream();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('10 da nganh')),
      body: Column(
        children: [
          Expanded(
            child: StreamBuilder(
              stream: productsStream(),
              builder:
                  (BuildContext context, AsyncSnapshot<List<Show>> snapshot) {
                if (snapshot.hasData) {
                  return Center(
                    child: ListView.separated(
                      padding: const EdgeInsets.all(8),
                      itemCount: snapshot.data!.length,
                      itemBuilder: (BuildContext context, int index) {
                        return ListTile(
                          title: Text(snapshot.data![index].value),
                        );
                      },
                      separatorBuilder: (BuildContext context, int index) =>
                          const Divider(),
                    ),
                  );
                } else if (snapshot.hasError) {
                  print(snapshot.error);
                  return const Center(child: Text('Something went wrong :('));
                }
                return const CircularProgressIndicator();
              },
              //future: shows,
            ),
          ),
        ],
      ),
    );
  }
}

class Show {
  final String value;
  final String time;

  Show({
    required this.value,
    required this.time,
  });

  factory Show.fromJson(Map<String, dynamic> json) {
    return Show(
      value: json['value'],
      time: json['time'],
    );
  }
}

Future<List<Show>> fetchShows() async {
  final response = await http
      .get(Uri.parse('http://danganhapi.herokuapp.com/api/temperature'));

  if (response.statusCode == 200) {
    var topShowsJson = json.decode(response.body) as List;
    return topShowsJson.map((show) => Show.fromJson(show)).toList();
  } else {
    throw Exception('Failed to load shows');
  }
}

Stream<List<Show>> productsStream() async* {
  while (true) {
    await Future.delayed(const Duration(milliseconds: 500));
    final response = await http
        .get(Uri.parse('http://danganhapi.herokuapp.com/api/temperature'));

    if (response.statusCode == 200) {
      var topShowsJson = jsonDecode(response.body) as List;
      yield topShowsJson.map((show) => Show.fromJson(show)).toList();
    } else {
      throw Exception('Failed to load shows');
    }
  }
}
