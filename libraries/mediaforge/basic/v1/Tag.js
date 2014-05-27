//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediaforge.basic.v1.Tag", {
	config: {
		/*DATA*/
		name: "Basic",
		async: true,
		description: "The Basic Tag might be placed on a home/landing page where no product or category specific information is available.",
		html: "<script type=\"text/javascript\" src=\"//tags.mediaforge.com/js/${merchant_id}\"></script><!--@SRC@-->",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/mediaFORGE.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "mediaFORGE Merchant ID",
			description: "The ID that relates you to mediaFORGE",
			token: "merchant_id",
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