const CREATE_ACCOUNT = (name, email, password) => `
INSERT INTO accounts (username, email, password)
VALUES ('${name}', '${email}', '${password}')
RETURNING id, username, email;
`

const LOGIN = (email) => `
SELECT * FROM accounts
WHERE email = '${email}'
`

module.exports = { CREATE_ACCOUNT, LOGIN }
