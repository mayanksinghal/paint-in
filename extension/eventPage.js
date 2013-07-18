var Registry = [
	{
		urlFilters: [{
			hostSuffix: 'labourbureau.gov.in'
		}],
		cssFile: 'css/labourbureau-gov-in.css'
	}
];

var getMatchingUrl = function(url) {

};

var handlePage = function(event) {
	var tabId = event.tabId;
	var url = event.url;

	var cssFile = getMatchingUrl(url);
	// body...
}

var getUrlFiltersFromRegistry = function() {
	var allFilters = [];
	Registry.forEach(function(entry) {
		allFilters = allFilters.concat(entry.urlFilters);
	});
	return allFilters;
};

console.log(getUrlFiltersFromRegistry());
chrome.webNavigation.onCompleted.addListener(handlePage, {
	url: getUrlFiltersFromRegistry()
});;