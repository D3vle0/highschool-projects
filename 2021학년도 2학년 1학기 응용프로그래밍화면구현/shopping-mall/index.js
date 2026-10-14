const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const sqlite3 = require("sqlite3");
const sha256 = require("sha256");
const http = require("http");
const { del } = require("request");
const db = new sqlite3.Database("./db/account.db", sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('account.db connected');
	}
});

const PORT = process.env.PORT || 3003;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: '1234DSFs@adf1234!@#$asd',
	resave: false,
	saveUninitialized: true
}));

app.use(express.json());

app.get('/', function (req, res) {
	if (req.session.user)
		res.render("index", { "name": `${req.session.user}'s`, "login": true });
	else
		res.render("index", { "name": "yours", "login": false });
});

app.get('/login', function (req, res) {
	if (req.session.user)
		res.redirect("/");
	else
		res.render("login", { "err": "" });
});

app.post('/login', function (req, res) {
	db.get(`SELECT pw FROM account WHERE "id" = '${req.body.id}'`, [], (err, rows) => {
		if (err)
			return res.status(400).json({
				result: "sql error"
			});
		if (rows.pw == sha256(req.body.pw)) {
			req.session.user = req.body.id;
			res.redirect("/");
		}
		else {
			res.render("login", { "err": "invalid id or pw!" });
		}
	});
});

app.get('/logout', function (req, res) {
	delete req.session.user;
	res.redirect("/");
});

app.get('/register', function (req, res) {
	res.render("register", { "err": "" });
});

app.post('/register', function (req, res) {
	if (req.body.pw != req.body.repw) {
		res.render("register", { "err": "retype password correctly!" });
	}
	else {
		var card = req.body.card;
		var tmpCardNum = card;
		var tmpcount = 1;
		var tmptotal = 0;

		for (var i = card.length; i > 0; i--) {
			if (tmpcount % 2 == 0) {
				var tmpdouble = tmpCardNum[i - 1] * 2;
				if (tmpdouble > 10) {
					var tmp = tmpdouble.toString().split("");
					tmptotal = parseInt(tmptotal) + parseInt(tmp[0]) + parseInt(tmp[1]);
				}
				else {
					tmptotal += parseInt(tmpdouble);
				}
			}
			else {
				tmptotal += parseInt(tmpCardNum[i - 1]);
			}
			tmpcount++;
		}

		if (tmptotal % 10) {
			res.render("register", { "err": "invalid card number!" });
		}
		else {
			db.run(`INSERT INTO account(id, pw, email, card)VALUES('${req.body.id}', '${sha256(req.body.pw)}', '${req.body.email}', '${req.body.card}')`);
			res.redirect("/")
		}
	}
});

app.get('/products', function (req, res) {
	if (req.session.user)
		res.render("products", { "login": true });
	else
		res.render("products", { "login": false });
});

app.get('/k1001', function (req, res) {
	if (req.session.user)
		res.render("k1001", { "login": true });
	else
		res.render("k1001", { "login": false });
});

app.get('/k1002', function (req, res) {
	if (req.session.user)
		res.render("k1002", { "login": true });
	else
		res.render("k1002", { "login": false });
});

app.get('/k1003', function (req, res) {
	if (req.session.user)
		res.render("k1003", { "login": true });
	else
		res.render("k1003", { "login": false });
});

app.get('/k1004', function (req, res) {
	if (req.session.user)
		res.render("k1004", { "login": true });
	else
		res.render("k1004", { "login": false });
});

app.get('/k1005', function (req, res) {
	if (req.session.user)
		res.render("k1005", { "login": true });
	else
		res.render("k1005", { "login": false });
});

app.get('/m2001', function (req, res) {
	if (req.session.user)
		res.render("m2001", { "login": true });
	else
		res.render("m2001", { "login": false });
});

app.get('/m2002', function (req, res) {
	if (req.session.user)
		res.render("m2002", { "login": true });
	else
		res.render("m2002", { "login": false });
});

app.get('/m2003', function (req, res) {
	if (req.session.user)
		res.render("m2003", { "login": true });
	else
		res.render("m2003", { "login": false });
});

app.get('/m2004', function (req, res) {
	if (req.session.user)
		res.render("m2004", { "login": true });
	else
		res.render("m2004", { "login": false });
});

app.get('/m2005', function (req, res) {
	if (req.session.user)
		res.render("m2005", { "login": true });
	else
		res.render("m2005", { "login": false });
});

app.get('/l3001', function (req, res) {
	if (req.session.user)
		res.render("l3001", { "login": true });
	else
		res.render("l3001", { "login": false });
});

app.get('/l3002', function (req, res) {
	if (req.session.user)
		res.render("l3002", { "login": true });
	else
		res.render("l3002", { "login": false });
});

app.get('/l3003', function (req, res) {
	if (req.session.user)
		res.render("l3003", { "login": true });
	else
		res.render("l3003", { "login": false });
});


app.listen(PORT, function () {
	console.log(`Connected port ${PORT}`);
});

/*
const options = {
		ca: fs.readFileSync('/etc/letsencrypt/live/shopping.devleo.tech/fullchain.pem'),
		key: fs.readFileSync('/etc/letsencrypt/live/shopping.devleo.tech/privkey.pem'),
		cert: fs.readFileSync('/etc/letsencrypt/live/shopping.devleo.tech/cert.pem')
};

http.createServer(app).listen(PORT);
https.createServer(options, app).listen(443);
*/
