/**
 * Retrieves students in a given location.
 * @param {{ id: Number,firstName: String,location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @returns {Array<{ id: number, firstName: string, location: string }>}
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
