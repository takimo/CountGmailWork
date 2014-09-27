(function(){
  var countUpTime = function(){
    var ds = getDatestring();
    var todayCount = localStorage[ds];
    if(!todayCount) todayCount = 0;
    localStorage[ds] = ++todayCount;
    return todayCount;
  };

  var output = function(time){
    try{
      var searchform = document.querySelector('#gbqfq');
      searchform.setAttribute('placeholder', '今日の対応時間は' + time + "秒です");
    }catch(e){
    }
  };

  var getDatestring = function(){
    var now = new Date();
    var year = (now).getFullYear();
    var date = (now).getDate();
    var month = (now).getMonth();
    var datestring = year + "_" + (month + 1) + "_" + date;
    return datestring;
  };

  setInterval(function(){
    if(!document.webkitHidden){
      output(countUpTime());
    }
  }, 1000);

})();
