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

   (function () {
      allStates.forEach(function (el) {
         let onlyStates = Object.keys(el);
         // console.log(onlyStates);
         for (const cp in onlyStates) {
            // console.log(onlyStates[cp])
            $("#states").append(`<option>${onlyStates[cp]}</option>`);
         }

         // $("#states").change(function () {
         //    let output = "";

         //    // to loop over the array that hold the second list

         //    // allStates[$(this.val)].forEach(function (st) {
         //    //    output += `<option>${st}</option>`;
         //    // });
         //    $("#lga").html(output);
         // });
      });
   })();
});

let tbody = $("#tbody");
$("#register").on("submit", function (e) {
   e.preventDefault();

 

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
   <td class="fs-6"><button type="button" class="btn btn-secondary" id="delete">Delete</button></td>
   <tr>
   
</tr>
  </tr>`);

   // to reset the form
   $("#register").trigger("reset");

   $("#delete").click(function (e) {
      this.closest("tr").remove();
   });
});
