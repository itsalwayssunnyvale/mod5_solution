var allCategoriesUrl = "js/categories.json"

$ajaxUtils.sendGetRequest(
	allCategoriesUrl,
	function (request){
		console.log(request.length)
	},
	true);