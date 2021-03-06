//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("calltrackingmetrics.trackingcode.v1.Tag", {
	config: {
		/*DATA*/
		name: "Tracking Code",
		async: true,
		description: "By assigning a tracking number to each campaign you want to track, you can link calls back to the campaign. Dynamic tracking code placed on your website will enable your business phone number to update to the correct tracking number based on how a visitor found your site.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.tctm.co/t.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "CallTrackingMetrics Client ID",
			description: "The client ID given to you in your generated code from CallTrackingMetrics",
			token: "client_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});