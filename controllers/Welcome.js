const Blimp_Controller = require('../system/core/Controller');

class Welcome extends Blimp_Controller {
	constructor() {
		super();
	}

	index = (req, res) => {
		res.render('welcome');
	}
}

module.exports = new Welcome();