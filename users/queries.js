const CREATE_ACCOUNT = (name, email, password) => `
INSERT INTO accounts (username, email, password)
VALUES ('${name}', '${email}', '${password}')
RETURNING id, username, email;
`

module.exports = { CREATE_ACCOUNT }
