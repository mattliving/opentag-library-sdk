//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzserversidepixellandingpagetrackingdeprecated.v1.Tag", {
		config: {
			/*DATA*/
			name: "zz-Server Side Pixel - Landing Page Tracking [DEPRECATED]",
			async: true,
			description: "This is used to record incoming traffic from paid search.It  should be installed on any landing page URL used by your paid campaigns, and also any page which is indexed into the organic search results of a search engine. If in doubt, deploy the tag on every page of website.",
			html: "",
			imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Marin.png",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Marin Client Id",
				description: "Your unique marin client id",
				token: "clientId",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			window._ml = document.createElement("script");
			_ml.src = "//tracker.marinsm.com/tracker/" + this.valueForToken("clientId") +
				".js";

			window._m_loaded = false;
			window._m_loader = function() {
				if (!_m_loaded) {
					_m_loaded = true;
					document.write = function(pixel) {
						var x = document.createElement("div");
						x.innerHTML = pixel;
						document.body.appendChild(x);
					}
					_marinTrack.trackPage();
				}
			}

			_ml.onload = _m_loader;
			_ml.onreadystatechange = function() {
				if ((this.readyState === "complete") ||
					(this.readyState === "loaded")) {
					_m_loader
				}
			};
			document.body.appendChild(_ml);

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