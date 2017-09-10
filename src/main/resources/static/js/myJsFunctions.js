$(document).ready(function(){
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('.bootstrap-iso');
  var options={
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);

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
//            $("#selected_tags span").append('<a href=" + ui.item.tag_url + " target="_blank">'+ ui.item.label +'</a>');
            //$("#tagQuery").value = $("#tagQuery").defaultValue
//            var defValue = $("#tagQuery").prop('defaultValue');
//            $("#tagQuery").val(defValue);
//            $("#tagQuery").blur();
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


});

function hideShowTabs(tabId) {
    if(tabId === 'donation') {
        $('#donation').show();
        $('#report').hide();

        $.ajax({
        url : "/donation",
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