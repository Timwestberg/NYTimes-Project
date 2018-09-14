var subject = $("#searchTerm").val();
var limit = $("#recordNum").val();
var beginDate = $("#beginDate").val();
var endDate = $("endDate").val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "e84d952de99a4688814ecb57806adcc2",
  'q': + subject,
  'begin_date': + beginDate,
  'end_date': + endDate,
  'page': + limit
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(response){
var results = response;
console.log(results);
});