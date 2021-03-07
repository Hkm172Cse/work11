
function passvalue(number){
    var exist_v = $("#result").val();
    $("#result").val(exist_v + number);
}
function cancel(number){
   $("#result").val(number);
}
function result(){
    var exixt_v = $("#result").val();
    var re = eval(exixt_v);
    $("#result").val(re);
}
function clear(){
    var exist_v = $("#result").val(slice(0, -1));
   
}
