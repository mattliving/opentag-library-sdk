//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"channeladvisor.channeladvisorconfirmationpage.v1.Tag", {
		config: {
			/*DATA*/
			name: "Channel Advisor - Confirmation Page",
			async: true,
			description: "Use this tag to track confirmation pages with ChannelAdvisor.",
			html: "",
			imageUrl: "http://dummyimage.com/100x100/000/fff.png&text=ChannelAdvisor",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Client ID",
				description: "The unique client id",
				token: "client_id",
				uv: ""
			}, {
				name: "Order Total",
				description: "",
				token: "total",
				uv: "universal_variable.transaction.subtotal"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Product IDs",
				description: "",
				token: "product_id_list",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			var src = "https://tracking.searchmarketing.com/thankyou.asp?SMCID=" +
				this.valueForToken("client_id");
			src += "&oVal=" + this.valueForToken("total");
			src += "&OrderID=" + this.valueForToken("order_id");
			src += "&ProductID=";

			// Add the product ids
			var i = 0,
				ii = this.valueForToken("product_id_list").length,
				arr = [];
			for (; i < ii; i++) {
				arr.push(this.valueForToken("product_id_list")[i]);
			}
			src += arr.join(',');

			// Append to body
			var img = document.createElement('image');
			img.src = src;
			img.width = 1;
			img.height = 1;
			img.style.display = 'none';
			document.body.appendChild(img);

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