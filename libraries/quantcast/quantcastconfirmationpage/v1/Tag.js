//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("quantcast.quantcastconfirmationpage.v1.Tag", {
	config: {
		/*DATA*/
		name: "QuantCast - Confirmation Page",
		async: true,
		description: "To be placed on the confirmation page instead of the regular Quantcast tag.",
		html: "\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Number",
			description: "Your Quantcast account number",
			token: "account_no",
			uv: ""
		}, {
			name: "Order ID",
			description: "The unique order id for the transaction",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Labels",
			description: "The label(s) you wish to use, e.g. \"_fp.event.Confirmation Page\". (Set as blank string if n/a)",
			token: "labels",
			uv: ""
		}, {
			name: "Order Revenue",
			description: "",
			token: "revenue",
			uv: "universal_variable.transaction.subtotal"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window._qevents = _qevents || [];

		var elem = document.createElement('script');
		elem.src = (document.location.protocol == "https:" ? "https://secure" :
			"http://edge") + ".quantserve.com/quant.js";
		elem.async = true;
		elem.type = "text/javascript";
		document.getElementsByTagName('head')[0].appendChild(elem);

		_qevents.push({
			qacct: "" + this.valueForToken("account_no"),
			labels: "" + this.valueForToken("labels"),
			orderid: "" + this.valueForToken("order_id"),
			revenue: "" + this.valueForToken("revenue")
		});
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