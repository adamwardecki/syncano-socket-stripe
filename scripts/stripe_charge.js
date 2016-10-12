var stripe = require('machinepack-stripe');

var apiKey = CONFIG.stripe_secret_key;

// Create a new charge for a customer
stripe.createCharge({
	apiKey: apiKey,
	amount: ARGS.POST.amount,
	currency: ARGS.POST.currency,
	capture: ARGS.POST.capture,
	description: ARGS.POST.description,
	customer: ARGS.POST.customer,
	card: ARGS.POST.card

}).exec({
	// An unexpected error occurred.
	error: function (err){
		console.log(err);
	},
	// OK.
	success: function (newCharge){
		console.log(newCharge);
	},
});
