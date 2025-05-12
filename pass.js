function validPassword(password){
   const isValidLength=password.length>=8 && password.length <=16;
   const hasLetter=/[a-zA-Z]/.test(password);
   const hasNumber=/\d/.test(password);
   const hasAlphanumeric=/[a-zA-Z0-9]/.test(password);

  return isValidLength && hasLetter && hasNumber && hasAlphanumeric;
};
module.exports={validPassword};