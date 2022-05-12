import allStates from "./states.js";

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
         },
         dob: {
            required: "Please enter your date of birth",
         },
         phone: {
            required: "Please enter your phone number",
         },
      },
   });
   //    datatable
   $("#table_id").DataTable({
      // to limit records
      pageLength: 4,

      recordsTotal: 50,
   });

   allStates.forEach((el) => {
      let diffState = Object.keys(el);
      for (let i = 0; i <= diffState.length; i++) {
         $("#states").append(`<option>${diffState[i]}</option>`);
      }
   });
});

let tbody = $("#tbody");
$("#register").on("submit", function (e) {
   e.preventDefault();

   tbody.html(`<tr></tr>`);

   tbody.append(`<tr class="border-bottom">
   <th scope="row">
      <input class="form-check-input ms-2 p-2" type="checkbox" value="" id="flexCheckDefault" />
   </th>

   <td class="fs-6 fw-bold">${$("#firstname").val()}</td>
   <td class="fs-6 fw-bold">${$("#lastname").val()}</td>
   <td class="fs-6 fw-bold">${$("#othername").val()}</td>
   <td class="fs-6 fw-bold">${$("#dob").val()}</td>
   <td class="fs-6 fw-bold">${$("#sex").val()}</td>
   <td class="fs-6 fw-bold">${$("#phone").val()}</td>
   <td class="fs-6 fw-bold">${$("#country").val()}</td>
   <td class="fs-6 fw-bold">${$("#states").val()}</td>
   <td class="fs-6 fw-bold">${$("#lga").val()}</td>
  </tr>`);
   $("#register").trigger("reset");
});

// return $("#states").append(`<option value="">${Object.keys(el)}</option>`);
//   let diffState = Object.keys(el)
//   for
