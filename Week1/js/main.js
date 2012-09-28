/* 
Michelle M. Pessoa
ASD 1210
Due: 27 September 2012 
.JS Document
*/


var parseCryptidForm = function(data){
	// uses form data here;
	console.log(data);
};


//$(document).ready(function(){
// Use pageInit instead

$("#home").on('pageinit', function(){

//Code needed for homepage goes in this function.
	
	var rcform = $('#recordcryptidform'),
		rcerrorslink = $('#rcerrorslink')
	;	
	
	rcform.validate({
		invalidHandler: function(form, validator){
			rcerrorslink.click();
			var html = '';
			for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#recordcryptiderrors ul").html(html);
		},
		submitHandler: function(){
			var data = rcform.serializeArray();
			parseCryptidForm(data); 
		}
	});
	
});



/////////////////////////////////////////////////////////////


// Edit data from Local Storage

function editItem(id) {
    var cryptId = id;
	var value = localStorage.getItem(cryptId);
	value = value.split(',');

//Show the form
	toggleCtrl("off");

//Variables from form    
    var reporternamefirst = value[0];
    var reporternamelast = value[1];
    var reporteremail = value[2];
    var sightingdate = value[3];
    var cryptidlocation = value[4];
    var cryptidnumber = value[5];
    var cryptid-gender = value[6];
    var cryptid-type = value[7];
    var encounter = value[8];
    var checkbox;

//Turn variables into values
    $('#reporternamefirst').val(reporternamefirst);
    $('#reporternamelast').val(reporternamelast);
    $('#reporteremail').val(reporteremail);
    $('#sightingdate').val(sightingdate);
    $('#cryptidlocation').val(cryptidlocation);
    $('#cryptidnumber').val(cryptidnumber);    
    $('#cryptid-gender').val(cryptid-gender);    
    $('#cryptid-type').val(cryptid-type);    
    $('#encounter').val(encounter);    
    if ($('#checkbox-news').is(":checked")){
	checkbox = "Subscriber"
	}else{
	checkbox = "Non-Subscriber"
	};

// Display the edit button, and hides the submit button and the data list
    var edit = $('#editButton').css('display', 'block');
    var submit = $('#addSighting').css('display', 'none');
    var dataList = $('#data').css('display', 'none');

// Local Storage is updated when you click the Edit button.
    
    $('#editItem').on('click', function editItem() {
        var reporternamefirst =  $('#reporternamefirst').val();
        var reporternamelast =  $('#reporternamelast').val();
        var reporteremail =  $('#reporteremail').val();
        var sightingdate =  $('#sightingdate').val();
        var cryptidlocation =  $('#cryptidlocation').val();
        var cryptidnumber =  $('#cryptidnumber').val();
        var cryptid-gender =  $('#cryptid-gender').val();
        var cryptid-type =  $('#cryptid-type').val();
        var encounter =  $('#encounter').val();
        var checkbox;
        if ($('#checkbox-news').is(":checked")){
		checkbox = "Subscriber"
		}else{
		checkbox = "Non-Subscriber"
		};

        var cryptEntry = [reporternamefirst, reporternamelast, reporteremail, sightingdate, cryptidlocation, cryptidnumber, cryptid-gender, cryptid-type, encounter, checkbox];

//Update Local Storage
        localStorage.setItem(cryptId, cryptEntry);

//Reload form page and alert user that the edit was successful.
        location.reload();
        alert("Your sighting has been updated.");
        
    });
}


/////////////////////////////////////////////////////////////






// This function deletes a single cryptid record from Local Storage and reloads the page.

function deleteItem(id) {
    var ask = confirm("Are you sure you want to delete this entry? This cannot be undone.");
    if (ask) {
        localStorage.removeItem(id);
        alert("Entry was deleted!");
        window.location.reload();
    } else {
        alert("Entry was NOT deleted.");
    }
}





// This function clears all data and reloads the page.

function clearLocal() {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        var caution = confirm ("This action will erase all of your sightings. This cannot be undone.");
            if (caution){
                localStorage.clear();
                alert("All sightings have been deleted.");
                window.location.reload();
                return false;  
            } else {
               alert("Delete has been canceled. Your sightings have been retained."); 
            }
    }
}