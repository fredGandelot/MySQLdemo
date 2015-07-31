
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton4 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		document.getElementById("textInput12").focus(); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
// @endregion
};// @endlock
