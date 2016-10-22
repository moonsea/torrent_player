//author: @rafaelleru

function Updater(){
    this.list = [];
    this.list_div = document.getElementById('songs_queue');
};

Updater.prototype.reloadList = function(files){
    for(var i=0; i < files.length; i++){
	var list_element = document.createElement('li');
	list_element.setAttribute('id', 'item_'+ i.toString());

	if(files[i].name.includes('mp3',files[i].name.length - 4)){
	    list_element.innerHTML = files[i].name;
	    this.list_div.appendChild(list_element);
	}
    }
};

module.exports = Updater;
