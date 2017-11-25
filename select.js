function primero(){
  var select2 = document.getElementById('select2');
  var valor = document.getElementById('select1').value;
  var select3 = document.getElementById('select3');

  if(select2.length > 0){
    document.getElementById('select2').options.length = 0;
  }
  if(select3.length > 0){
    document.getElementById('select3').options.length = 0;
  }

  if(valor == 'ropa'){
    var thingsropa = [ {"text": 'Pantalon', "value": 'pantalon', "selected" : true}, {"text":'Camisa', "value": 'camisa'} ];

    for(var i=0; i < thingsropa.length; i++){
      var option = thingsropa[i];
      select2.options.add(new Option(option.text, option.value, option.selected));
    }
    
    var things = [ 'Pantalon1', 'Pantalon2'];

    for(var i = 0; i < things.length; i++){
      select3.options.add(new Option(things[i]));
    }

  }else{
    var thingscomida = [ {"text": 'Fruta', "value": 'fruta', "selected" : true}, {"text": 'Verdura', "value": 'verdura'} ];

    for(var i = 0; i < thingscomida.length; i++){
      var option = thingscomida[i];
      select2.options.add(new Option(option.text, option.value, option.selected));
    }

    var things = [{"text": 'Fruta1', "selected": true}, {"text": 'Fruta2'}];

    for(var i=0; i < things.length; i++){
      var option = things[i];
      select3.options.add(new Option(option.text, option.selected));
    }
  }
}

function segundo(){
  var select3 = document.getElementById('select3');
  var valor =  document.getElementById('select2').value;

  if(select3.length > 0){
    document.getElementById('select3').options.length = 0;
  }

  if(valor == 'pantalon'){
    var things = [ 'Pantalon1', 'Pantalon2'];

    for(var i = 0; i < things.length; i++){
      select3.options.add(new Option(things[i]));
    }
  }else if(valor == 'camisa'){
    var things = [ 'Camisa1', 'Camisa2'];

    for(var i = 0; i < things.length; i++){
      select3.options.add(new Option(things[i]));
    }
  }else if(valor == 'fruta'){
    var things = [{"text": 'Fruta1', "selected": true}, {"text": 'Fruta2'}];

    for(var i=0; i < things.length; i++){
      var option = things[i];
      select3.options.add(new Option(option.text, option.selected));
    }
  }else if(valor == 'verdura'){
    var things = ['Verdura1', 'Verdura2'];

    for(var i=0; i < things.length; i++){
      select3.options.add(new Option(things[i]));
    }
  }
}
