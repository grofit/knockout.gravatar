ko.bindingHandlers.gravatar = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		var allBindings = allBindingsAccessor();
		var credential, hashedCredential, size, rating, defaultImage, isSecure, url;
		var gravatar = allBindings.gravatar;
		
		if (typeof(ko.unwrap(gravatar)) == "string")
		{ credential = ko.unwrap(gravatar); }
		else
		{ 
			credential = ko.unwrap(gravatar.credential); 
			size = ko.unwrap(gravatar.size);
			rating = ko.unwrap(gravatar.rating);
			defaultImage = ko.unwrap(gravatar.defaultImage);
			isSecure = ko.unwrap(gravatar.isSecure);
		}
		
		if(typeof(credential) == "undefined" || credential == "")
		{ return; }
		
		hashedCredential = ko.bindingHandlers.gravatar.getHashedCredential(credential);
		url = ko.bindingHandlers.gravatar.generateUrl(hashedCredential, size, rating, defaultImage, isSecure);
        element.src = url;
    },
	getHashedCredential: function(credential) {
		var isEmail = credential.indexOf("@") != -1;
		if(!isEmail) { return credential; }
		return hex_md5(credential);
	},
	generateUrl: function(hashedCredential, size, rating, defaultImage, isSecure) {
		var url = isSecure ? "https://secure.gravatar.com/avatar/" : "http://www.gravatar.com/avatar/";
		url += hashedCredential + ".jpg?";
		
		if(typeof(size) != "undefined" && size != "")
		{ url += "s=" + size + "&"; }
		
		if(typeof(rating) != "undefined" && rating != "")
		{ url += "r=" + rating + "&"; }
		
		if(typeof(defaultImage) != "undefined" && defaultImage != "")
		{ url += "d=" + encodeURIComponent(defaultImage); }
		
		return url;		 
	}
};