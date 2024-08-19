const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const groups = {};
      const fields = lines[0].split(',');
      const props = fields
        .slice(0, fields.length - 1);

      for (const line of lines.slice(1)) {
        const record = line.split(',');
        const values = record
          .slice(0, record.length - 1);
        const key = record[record.length - 1];
        if (!Object.keys(groups).includes(key)) {
          groups[key] = [];
        }
        const entries = props
          .map((prop, idx) => [prop, values[idx]]);
        groups[key].push(Object.fromEntries(entries));
      }

      const total = Object
        .values(groups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${total}`);
      for (const [key, group] of Object.entries(groups)) {
        const names = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${key}: ${group.length}. List: ${names}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
