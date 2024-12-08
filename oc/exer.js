const ColTitle = 'column-title';

console.log(ColTitle); // Outputs: column-title

// Trying to reassign a constant will result in an error
// ColTitle = 'new-title'; // This would cause a TypeError: Assignment to constant variable.

// Constants must be assigned a value when declared
const AnotherConstant; // SyntaxError: Missing initializer in const declaration
