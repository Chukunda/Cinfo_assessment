$(function () {
   $("#register").validate({
      rules: {
         firstname: {
            required: true,
         },
         lastname: {
            required: true,
         },
         othername: {
            required: true,
         },
         dob: {
            required: true,
         },
         phone: {
            required: true,
            maxlength: 11,
            minlength: 11,
         },
      },
      messages: {
         firstname: {
            required: "Please enter your first name",
            firstname: "Please enter a valid first name",
         },
         lastname: {
            required: "Please enter your last name",
            minlength: 2,
         }, dob: {
             required: "Please enter your date of birth",
         }, phone: {
             required: "Please enter your phone number",
         }
      },
   });
});
