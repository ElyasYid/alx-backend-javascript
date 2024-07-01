/**
 * Retrieves students in a given location.
 * @param {{id:firstName:location:city}}}
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
