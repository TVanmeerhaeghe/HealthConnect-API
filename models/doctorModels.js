const db = require('../db');

const getAllDoctors = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM doctor', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getDoctorById = (doctorId) => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM doctor WHERE id = ?',
      [doctorId],
      (error, results) => {
        if (error) {
          reject(error);
        } else if (results.length === 0) {
          reject(new Error(`No doctor found with ID ${doctorId}`));
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

const searchDoctors = (searchQuery) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM doctor WHERE name LIKE ? OR specialty LIKE ?';
    const searchValue = `%${searchQuery}%`;
    db.query(query, [searchValue, searchValue], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  searchDoctors,
};
