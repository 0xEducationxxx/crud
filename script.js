var db = [];
var fn = document.getElementById('fn');
var email = document.getElementById('email');
var grade = document.getElementById('grade');
var addBtn = document.getElementById('add');
var mode = 'add';
var tmp;
function add() {
  if (fn.value.trim() === '' || email.value.trim() === '' || grade.value.trim() === '' || grade.value <= 0 || grade.value > 100) {
    alert('Full name and email must not be empty, and grade must be between 1 and 4.');
    return;
  }
  var object = { 
    fn: fn.value.trim(), 
    email: email.value.trim(), 
    grade: grade.value 
  };
  if (mode === 'add') {
    db.push(object);
  } else {
    db[tmp] = object;
    mode = 'add';
    addBtn.innerHTML = 'Add';
  }
  clearData();
  showData();
}
function clearData() {
  fn.value = '';
  email.value = '';
  grade.value = '';
}
function showData() {
  var table = '';
  for (var i = 0; i < db.length; i++) {
    table += `
      <tr>
        <td>${i + 1}</td>
        <td>${db[i].fn}</td>
        <td>${db[i].email}</td>
        <td>${db[i].grade}</td>
        <td><button onclick="deleteData(${i})"><i class="fas fa-trash"></i></button></td>
        <td><button onclick="updateData(${i})"><i class="fas fa-edit"></i></button></td>
      </tr>
    `;
  }
  document.getElementById('tbody').innerHTML = table;
}
function deleteData(i) {
  db.splice(i, 1);
  showData();
}
function updateData(i) {
  fn.value = db[i].fn;
  email.value = db[i].email;
  grade.value = db[i].grade;
  addBtn.innerHTML = 'Update';
  mode = 'update';
  tmp = i;
}
showData();
