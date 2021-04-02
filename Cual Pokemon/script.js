for (var i=1;i<151;i++){
    print(i);
}

function print(i){

    $('.pokemons').append(' <div class="pokemon" id="'+i+'"><img id="'+i+'" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png"></div>');
    console.log('el i:',i)

    /* $.get("https://pokeapi.co/api/v2/pokemon/"+i, function(res) {
        console.log('el i:',i);
        $('#poke'+i).append('<p>'+res.name+'</p>');
                    console.log(res);
                }, "json"); */
                
}

$('img').click(function(){
    console.log($(this).attr('id'));
    var id=$(this).attr('id');

    $.get("https://pokeapi.co/api/v2/pokemon/"+id, function(res) {
        console.log(res);
        $('h2').text(res.name);
        $('.imagen').attr('src','http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+id+'.png');
        $('.altura').text('Altura: '+res.height);
        $('.peso').text('Peso: '+res.weight);

        $('h4').text('Tipos: ');
        $('.types').html('');

        for (var j=0;j<res.types.length;j++){
            $('.types').append('<li>'+res.types[j].type.name+'</li>');
        }
    
    });
       
      });