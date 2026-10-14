const fs = require("fs");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const dbPath = path.join(__dirname, "../dimigo.db");
const sqlPath = path.join(__dirname, "../syntax/example.sql");

const sqlite = new DatabaseSync(dbPath);

// example.sql을 활용하여 SQLite 테이블 및 초기 데이터 생성
function initDB() {
	const tableCheck = sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND (name='topic' OR name='author')").all();
	if (tableCheck.length < 2) {
		if (fs.existsSync(sqlPath)) {
			let sql = fs.readFileSync(sqlPath, "utf-8");
			let sqliteSql = sql
				.replace(/`id` int\(11\) NOT NULL AUTO_INCREMENT/gi, "`id` INTEGER PRIMARY KEY AUTOINCREMENT")
				.replace(/,[\s\r\n]*PRIMARY KEY \(`id`\)/gi, "")
				.replace(/datetime NOT NULL/gi, "TEXT NOT NULL");
			sqlite.exec(sqliteSql);
		}
	}
}

initDB();

const db = {
	connect: (cb) => {
		if (cb) process.nextTick(cb);
	},
	end: (cb) => {
		if (cb) process.nextTick(cb);
	},
	createConnection: () => db,
	query: (sql, params, callback) => {
		if (typeof params === "function") {
			callback = params;
			params = [];
		}
		if (params === undefined || params === null) {
			params = [];
		} else if (!Array.isArray(params)) {
			params = [params];
		}

		try {
			const trimmed = sql.trim().toUpperCase();
			const stmt = sqlite.prepare(sql);
			if (trimmed.startsWith("SELECT")) {
				const rows = stmt.all(...params).map(r => ({ ...r }));
				if (callback) {
					process.nextTick(() => callback(null, rows));
				}
			} else {
				const info = stmt.run(...params);
				const result = {
					insertId: Number(info.lastInsertRowid),
					affectedRows: Number(info.changes)
				};
				if (callback) {
					process.nextTick(() => callback(null, result));
				}
			}
		} catch (err) {
			if (callback) {
				process.nextTick(() => callback(err));
			} else {
				throw err;
			}
		}
	}
};

module.exports = db;