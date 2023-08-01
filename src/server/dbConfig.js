const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

const config = {
  user: 'sa',
  password: 'Prime@123@',
  server: 'PRGIT002',
  database: 'prime',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

sql.connect(config)
  .then(() => {
    console.log('Successfully connected to the SQL Server database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Validation rules for update endpoint
const updateValidationRules = [
  check('firstname').notEmpty().trim().escape().isLength({ max: 50 }),
  check('lastname').notEmpty().trim().escape().isLength({ max: 50 }),
  check('phone').notEmpty().trim().escape().isLength({ max: 15 }),
  check('dob').notEmpty().isDate(),
  check('email').notEmpty().trim().escape().isEmail().normalizeEmail(),
  check('department').notEmpty().trim().escape().isLength({ max: 50 }),
  check('ooption').notEmpty().trim().escape().isLength({ max: 50 }),
  check('field').notEmpty().trim().escape().isLength({ max: 50 }),
  check('gender').notEmpty().isIn(['male', 'Male', 'female', 'Female', 'other', 'Other'])

];

app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM inkingichoir';
  sql.query(query)
    .then((result) => {
      res.json(result.recordset);
    })
    .catch((err) => {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    });
});

app.post('/api/data', (req, res) => {
  const { firstname, lastname, phone, dob, email, department, ooption, field, gender } = req.body;

  const query = `
    INSERT INTO inkingichoir (firstname, lastname, phone, dob, email, department, ooption, field, gender)
    VALUES ('${firstname}', '${lastname}', '${phone}', '${dob}', '${email}', '${department}', '${ooption}', '${field}', '${gender}')
  `;

  sql.query(query)
    .then(() => {
      res.status(200).json({ message: 'Data inserted successfully' });
    })
    .catch((err) => {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An error occurred while inserting data' });
    });

});






app.put('/api/data/:inkId', updateValidationRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { inkId } = req.params;
  const { firstname, lastname, phone, dob, email, department, ooption, field, gender } = req.body;

  const query = `
    UPDATE inkingichoir
    SET firstname = '${firstname}',
        lastname = '${lastname}',
        phone = '${phone}',
        dob = '${dob}',
        email = '${email}',
        department = '${department}',
        ooption = '${ooption}',
        field = '${field}',
        gender = '${gender}'
    WHERE inkId = '${inkId}'
  `;

  sql.query(query)
    .then(() => {
      res.status(200).json({ message: 'Data updated successfully' });
    })
    .catch((err) => {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An error occurred while updating data' });
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
