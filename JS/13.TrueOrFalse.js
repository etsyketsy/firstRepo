/*13. True or False
Write a function that checks if a value is classified
as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/

function is_it_true(args) {
  return ((args === true) || (args === false))
}

is_it_true(true) // true
is_it_true(false) // true
is_it_true('true') // false
is_it_true(1) // false
is_it_true('false') // false
