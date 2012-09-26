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


$(document).ready(function(){
	
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









// This function deletes a single item from Local Storage and reloads the page.

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