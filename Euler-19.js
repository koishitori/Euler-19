var weekday = 0;
  //var monthday = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var monthday = [ 3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3 ];
var counter = 0;
for( var mm = 0; mm < 12; mm++ ){
  weekday += monthday[ mm ];
}
weekday = ( weekday + 1 ) % 7;
for( var yyyy = 1901; yyyy < 2001; yyyy++ ){
  for( var mm = 0; mm < 12; mm++ ){
    if( weekday == 6 )
      counter++;
    weekday += monthday[ mm ];
    if( mm == 1 && ( yyyy % 4 == 0 && ( yyyy % 100 || ( yyyy % 100 == 0 && yyyy % 400 == 0 ) ) ) )
      weekday ++;
    weekday = weekday % 7;
  }
}
counter;
