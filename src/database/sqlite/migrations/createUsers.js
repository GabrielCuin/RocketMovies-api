const createUsers = `
CREATE TABLE If NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  	name VARCHAR,
  	email VARCHAR,
  	password VARCHAR,
  	avatar VARCHAR,
  	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

module.exports = createUsers;