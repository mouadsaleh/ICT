$(document).ready(function(){

 //Date picker setup for three different date fields date, startDateInput, endDateInput
  var date_input1=$('input[name="date"]');
  var date_input2=$('input[name="startDateInput"]');
  var date_input3=$('input[name="endDateInput"]');
  var container1=$('.bootstrap-iso-1');
  var container2=$('.bootstrap-iso-2');
  var container3=$('.bootstrap-iso-3');
  var options1={
    format: 'mm/dd/yyyy',
    container: container1,
    todayHighlight: true,
    autoclose: true,
  };
    var options2={
      format: 'mm/dd/yyyy',
      container: container2,
      todayHighlight: true,
      autoclose: true,
    };
      var options3={
        format: 'mm/dd/yyyy',
        container: container3,
        todayHighlight: true,
        autoclose: true,
      };
  date_input1.datepicker(options1);
  date_input2.datepicker(options2);
  date_input3.datepicker(options3);

  // Date picker setups ends here.

// Auto complete
$("#search").autocomplete({
    minLength: 1,
    delay: 500,
    //define callback to format results
    source: function (request, response) {
        $.getJSON("/getPerson", request, function(result) {
            response($.map(result, function(item) {
                return {
                    // following property gets displayed in drop down
                    label: item.lastName + ", " + item.firstName,
                    // following property gets entered in the textbox
                    value: item.phoneNumber,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    personId: item.id,
                    street: item.streetAddress,
                    city: item.city,
                    state: item.state,
                    zip: item.zip
                }
            }));
        });
    },

    //define select handler
    select : function(event, ui) {
        if (ui.item) {
        $('#personId').val(ui.item.personId);
        $('#firstName').val(ui.item.firstName);
        $('#lastName').val(ui.item.lastName);
        $('#search').val(ui.item.value);
        $('#street').val(ui.item.street);
        $('#city').val(ui.item.city);
        $('#state').val(ui.item.state);
        $('#zip').val(ui.item.zip);
            event.preventDefault();
            return false;
        }
    }
});



$(function() {


states = [
           {
             label: "ALABAMA",
             value: "AL"
           },
           {
             label: "ALASKA",
             value: "AK"
           },
           {
             label: "AMERICAN SAMOA",
             value: "AS"
           },
           {
             label: "ARIZONA",
             value: "AZ"
           },
           {
             label: "ARKANSAS",
             value: "AR"
           },
           {
             label: "CALIFORNIA",
             value: "CA"
           },
           {
             label: "COLORADO",
             value: "CO"
           },
           {
             label: "CONNECTICUT",
             value: "CT"
           },
           {
             label: "DELAWARE",
             value: "DE"
           },
           {
             label: "DISTRICT OF COLUMBIA",
             value: "DC"
           },
           {
             label: "FEDERATED STATES OF MICRONESIA",
             value: "FM"
           },
           {
             label: "FLORIDA",
             value: "FL"
           },
           {
             label: "GEORGIA",
             value: "GA"
           },
           {
             label: "GUAM",
             value: "GU"
           },
           {
             label: "HAWAII",
             value: "HI"
           },
           {
             label: "IDAHO",
             value: "ID"
           },
           {
             label: "ILLINOIS",
             value: "IL"
           },
           {
             label: "INDIANA",
             value: "IN"
           },
           {
             label: "IOWA",
             value: "IA"
           },
           {
             label: "KANSAS",
             value: "KS"
           },
           {
             label: "KENTUCKY",
             value: "KY"
           },
           {
             label: "LOUISIANA",
             value: "LA"
           },
           {
             label: "MAINE",
             value: "ME"
           },
           {
             label: "MARSHALL ISLANDS",
             value: "MH"
           },
           {
             label: "MARYLAND",
             value: "MD"
           },
           {
             label: "MASSACHUSETTS",
             value: "MA"
           },
           {
             label: "MICHIGAN",
             value: "MI"
           },
           {
             label: "MINNESOTA",
             value: "MN"
           },
           {
             label: "MISSISSIPPI",
             value: "MS"
           },
           {
             label: "MISSOURI",
             value: "MO"
           },
           {
             label: "MONTANA",
             value: "MT"
           },
           {
             label: "NEBRASKA",
             value: "NE"
           },
           {
             label: "NEVADA",
             value: "NV"
           },
           {
             label: "NEW HAMPSHIRE",
             value: "NH"
           },
           {
             label: "NEW JERSEY",
             value: "NJ"
           },
           {
             label: "NEW MEXICO",
             value: "NM"
           },
           {
             label: "NEW YORK",
             value: "NY"
           },
           {
             label: "NORTH CAROLINA",
             value: "NC"
           },
           {
             label: "NORTH DAKOTA",
             value: "ND"
           },
           {
             label: "NORTHERN MARIANA ISLANDS",
             value: "MP"
           },
           {
             label: "OHIO",
             value: "OH"
           },
           {
             label: "OKLAHOMA",
             value: "OK"
           },
           {
             label: "OREGON",
             value: "OR"
           },
           {
             label: "PALAU",
             value: "PW"
           },
           {
             label: "PENNSYLVANIA",
             value: "PA"
           },
           {
             label: "PUERTO RICO",
             value: "PR"
           },
           {
             label: "RHODE ISLAND",
             value: "RI"
           },
           {
             label: "SOUTH CAROLINA",
             value: "SC"
           },
           {
             label: "SOUTH DAKOTA",
             value: "SD"
           },
           {
             label: "TENNESSEE",
             value: "TN"
           },
           {
             label: "TEXAS",
             value: "TX"
           },
           {
             label: "UTAH",
             value: "UT"
           },
           {
             label: "VERMONT",
             value: "VT"
           },
           {
             label: "VIRGIN ISLANDS",
             value: "VI"
           },
           {
             label: "VIRGINIA",
             value: "VA"
           },
           {
             label: "WASHINGTON",
             value: "WA"
           },
           {
             label: "WEST VIRGINIA",
             value: "WV"
           },
           {
             label: "WISCONSIN",
             value: "WI"
           },
           {
             label: "WYOMING",
             value: "WY"
           }
         ]

$('#state').autocomplete({
minLength: 2,
delay: 500,
source: states,
select : function(event, ui) {
        if (ui.item) {
        $('#state').val(ui.item.value);
            return false;
        }
    }
  });
});

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

});

function hideShowTabs(tabId) {
    if(tabId === 'donation') {
        $('#donation').show();
        $('#report').hide();

        $.ajax({
        url : "/home",
        type : "GET",

        success : function(response) {
        },
        error : function(xhr, status, error) {
        }
    });
    }
    if (tabId === "report") {
        $('#donation').hide();
        $('#report').show();
    }
};

function setDateValue(){
    $('#donationDate').val($('#date').val());
}

function setValue(id) {
    var jqueryId = "#" + id;
    $(jqueryId).val($(jqueryId + "Input").val());
}