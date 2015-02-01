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
                    if(list_of_categories[j].innerHTML.toLowerCase().indexOf('music') > -1){
                        //categories contains music
                        is_music = true;
                        break;
                    }
                }
            //this was the categories list
            break;
    }
}

if(is_music){
    var play_url = 'https://play.google.com/music/listen?u=0#/sr/';
    //get video title
    var title = document.title;
        title = title.replace("YouTube",'').substring(0, title.indexOf('-'));

        play_url += encodeURI(title);

    //inject link into 
    var secondary_actions_container = document.getElementById('watch8-secondary-actions');

    var div = document.createElement('div');
    div.className = 'yt-uix-menu';

    div.innerHTML = '<a style="color:black" href="'+play_url+'" target="_blank" class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup yt-uix-videoactionmenu-button addto-button  yt-uix-tooltip"  ><span class="yt-uix-button-content">Search on Play Music</span></a>';
    secondary_actions_container.appendChild(div);
}
