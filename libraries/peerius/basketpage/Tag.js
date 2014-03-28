//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("peerius.basketpage.Tag", {
	config: {
		/*DATA*/
		name: "Basket Page",
		async: true,
		description: "Peerius tag for the basket page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Peerius.png",
		locationDetail: "",
		isPrivate: false,
		url: "${client_id}.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		parameters: [
		{
			name: "Peerius Basket Currency",
			description: "The currency of the basket page items",
			token: "currency",
			uv: "universal_variable.basket.currency"
		},
		{
			name: "Peerius Language",
			description: "Language of the page with the tag on",
			token: "lang",
			uv: "universal_variable.user.language"
		},
		{
			name: "Peerius Client Name",
			description: "The name of the client for which the tag is going to be implemented",
			token: "client_id",
			uv: ""
		},
		{
			name: "Peerius Product IDs List",
			description: "A list of product IDs",
			token: "product_ids",
			uv: "universal_variable.basket.line_items[#].product.id"
		},
		{
			name: "Peerius Unit Sale Prices List",
			description: "A list of unit sale prices in the basket",
			token: "unit_sale_prices",
			uv: "universal_variable.basket.line_items[#].product.unit_sale_price"
		},
		{
			name: "Peerius Item Quantities List",
			description: "A list of basket item quantities",
			token: "item_quantities",
			uv: "universal_variable.basket.line_items[#].quantity"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
var PeeriusCallbacks = {
  track: {
    type: "basket",
    lang: "" + this.valueForToken("lang") + "",
    basket: {
      items: [],
      currency: "" + this.valueForToken("currency") + ""
    }
  }
};
var ii = this.valueForToken("product_ids").length;
for (var i = 0; i < ii; i++) {
  PeeriusCallbacks.track.basket.items.push({
    refCode: this.valueForToken("product_ids")[i],
    price: this.valueForToken("unit_sale_prices")[i],
    qty: this.valueForToken("item_quantities")[i]
  });
}
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
