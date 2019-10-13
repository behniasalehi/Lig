//var team = ['حفاری', 'نفت آبادان', 'لوازم خانگی کن', 'فرمانیه'];
var team = ['iran' , 'poland' , 'usa' , 'brazil' ,'japan' , 'eygept']
var newTeam = [];

for (var i = 0; i < team.length - 1; i++) {
    for (var j = 0; j < team.length; j++) {
        var html = `<div class="col-6"><h1>${team[j]}</h1></div>`;
        document.querySelector(".lig").insertAdjacentHTML('beforeend', html);
    }
    team.splice(1, 0, team[team.length - 1]);
    team.pop();
    

}










