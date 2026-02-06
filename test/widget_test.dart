import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_internship_app/main.dart';

void main() {
  testWidgets('App loads with welcome text', (WidgetTester tester) async {
    await tester.pumpWidget(const InternshipApp());
    expect(find.text('Welcome to the Flutter Internship App!'), findsOneWidget);
  });
}
