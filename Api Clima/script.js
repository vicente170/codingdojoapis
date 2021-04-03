


$( "form" ).submit(function( event ) {
    var form= $(this).serializeArray();
    var obj=form[0];
    var ciudad=obj.value;
    console.log(ciudad);
    event.preventDefault();

    $.get(
        "https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=1f397441fec956bd82b190031ec32b56",
        function (res) {
            console.log(res);
          $('.ciudad').text(res.name);
          $('.weather').text(res.weather[0].description);
          $('.temp').text(res.main.temp+'K');
          $('.coord').text(res.coord.lat+','+res.coord.lon);
        }
      );
  });



