/* var aux=1;

for (var i=1;i<151;i++){
    $('.pokemons').append(' <div class="pokemon" id="poke'+i+'"><img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png"></div>');
    console.log('el i:',i)

    $.get("https://pokeapi.co/api/v2/pokemon/"+i, function(res) {
        console.log('el i:',aux);
        $('#poke'+res.id).append('<p>'+res.name+'</p>');
                    console.log(res);
                }, "json");
                aux++;
} */

for (var i=1;i<151;i++){
    print(i);
}

function print(i){

    $('.pokemons').append(' <div class="pokemon" id="poke'+i+'"><img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png"></div>');
    console.log('el i:',i)

    $.get("https://pokeapi.co/api/v2/pokemon/"+i, function(res) {
        console.log('el i:',i);
        $('#poke'+i).append('<p>'+res.name+'</p>');
                    console.log(res);
                }, "json");
                

}

/* The problem is that the anonymous callback method captures the i variable by reference. Since there is only one variable, it always gets whatever was assigned last to the variable. */