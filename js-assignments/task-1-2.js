console.log("============Task 2============");
// 1.
var username = "mahmoud404";
var password = "P@ssword404";
var pass = true;

// 2.
if (username.length === 0) {
  pass = false;
  window.alert("Username is required");
}
if (password.length < 8) {
  pass = false;
  window.alert("Password must be at least 8 characters");
}

if (pass) {
  console.log("Username:", username);
  console.log("Password:", password);
}
