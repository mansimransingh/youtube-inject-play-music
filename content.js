//check if video category contains music
var is_music = false;
var description_extras_list = document.getElementById('watch-description-extras').getElementsByTagName("li");

for(var i=0; i < description_extras_list.length; i++){
    if(description_extras_list[i].getElementsByTagName('h4').length > 0 
        && description_extras_list[i].getElementsByTagName('h4')[0].innerHTML.toLowerCase().indexOf('category') > -1){
            //we got category 
            var list_of_categories = description_extras_list[i]
                .getElementsByClassName('watch-info-tag-list')[0].getElementsByTagName('li');

                for(var j=0;j<list_of_categories.length;j++){
                    if(list_of_categories[i].innerHTML.toLowerCase().indexOf('music') > -1){
                        //categories contains music
                        is_music = true;
                        break;
                    }
                }
            //this was the categories list
            break;
    }
}

            console.log('---------------');
            console.log("IS MUSIC "+is_music)
