import jwt from 'jwt-simple';
import config from'../config';
import UserModel from'../models/user';
export const authUser = (req,res,next) => {
	res.locals.currentUser = null;

	const token = 
	  req.headers['x-access-token'] || req.signedCookies[config.cookieName] || '';

	if(token) {
		try {
			const decoded = jwt.decode(token,config.jwtSecret);
			if (decoded.exp <= Date.now()) {
				res.end('access token has expired',400);
				return;
			}

			req.user = res.locals.currentUser = decoded;
			return next();
		} catch(err) {
			return next();
		}
	} else {
		next();
	}
};
// 	if(req.session && req.session.user) {
// 		const user = req.session.user;
// 		res.locals.currentUser = user;
// 		next();
// 	} else {
// 		const authToken = req.signedCookies[config.cookieName] || '';

// 		if(authToken) {
// 			UserModel.findOne({_id: authToken},function (err, user)  {
// 				if (err) {
// 					next();
// 				} else {
// 					user = user.toObject();
// 					user.isAdmin = user.loginname === config.admin;
// 					req.session.user = user;
// 					res.locals.currentUser = user;
// 					next();
// 				}
// 			});
// 		} else {
// 			next();
// 		}
// 	}
// };

export const userRequired = (req,res,next) => {
	if(!req.user) {
		let err = new Error('需要登录');
		err.status = 403;
		next(err);
		return;
	}

	if(!req.user.active) {
		let err = new Error('需要被激活');
		err.status = 403;
		next(err);
		return;
	}

	next();
};

export const adminRequired = (req,res,next) => {
	if(!req.user) {
		let err = new Error('需要登录');
		err.status = 403;
		next(err);
		return;
	}

	if(!req.user.active) {
		let err = new Error('需要被激活');
		err.status = 403;
		next(err);
		return;
	}

	if(!req.user.isAdmin) {
		let err = new Error('需要管理员权限');
		err.status = 403;
		next(err);
		return;
	}
	next();
};



	// body...
// 	const authToken = req.signedCookies[config.cookieName] || '';
// 	res.locals.currentUser = null;

// 	if (authToken) {
// 		UserModel.findOne({_id: authToken}, function (err, user) {
// 			// body...
// 			if (err) {
// 				next();
// 			} else {
// 				res.locals.currentUser = user;
// 				next();
// 			}
// 		});
// 	} else {
// 		next();
// 	}
// }