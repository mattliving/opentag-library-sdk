//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("veinteractive.containertag.Tag", {
    config: {/*DATA*/
	id: 35174,
	name: "Container Tag",
	async: true,
	description: "Tag to be placed on all pages",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/ve-interactive.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34283,
		name: "VE Interactive ID",
		description: "The ID for the tag in this format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX with dashes included",
		token: "id",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/


  (function () {

    var scriptPath = "" + this.getValueForToken("id") + "".split("-").join("/");
    var scriptURL = "//config1.veinteractive.com/tags/" + scriptPath + "/tag.js";
    var script = document.createElement("script");

    script.src = scriptURL;
    document.getElementsByTagName("head")[0].appendChild(script);

  }());



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});