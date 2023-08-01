const sql = require('mssql');

// SQL Server configuration
const config = {
  server: 'PRGIT002', // Replace with your SQL Server instance
  authentication: {
    type: 'default',
    options: {
      userName: 'sa', // Replace 'DOMAIN' with your domain name and 'username' with your Windows username
      password: 'Prime@123@' // Replace with your password if needed
    }
  },
  options: {
    trustServerCertificate: true,
    database: 'prime' // Replace with your database name
    // Additional connection options if needed
  }
};

// Connect to the SQL Server
const connect = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (error) {
    console.error('Failed to connect to SQL Server:', error.message);
  }
};

// Call the connect function
connect();
