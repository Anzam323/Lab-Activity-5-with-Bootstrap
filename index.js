$("document").ready(function(){
    $(function(){
        $("#tabs").tabs();
    });
    $("#nav ul li:nth-child(2)").click(function(){
        $("#menu").slideToggle("2000", "swing", function(){
            $("#menu").menu();
        });
    });
    $(function(){
        $("#accordion").accordion();
    });
    $(function(){
        $("#datepicker").datepicker();
    });
    $( function() {
        var availableTags = [
            "Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay" 
        ];
        $( "#tags" ).autocomplete({
          source: availableTags
        });
      } );
    $(function(){
        $("#spinner-1").spinner({min: 1, max: 4});
    })
    $( "input[type='radio']" ).checkboxradio();
    
});

let saveFile = () => {

    // Get the data from each element on the form.
    const fn = document.getElementById('firstName');
    const ln = document.getElementById('lastName');
    const mn = document.getElementById('midName');
    const m = document.getElementById('male');
    const f = document.getElementById('female');
    const dob = document.getElementById('datepicker');
    const prov = document.getElementById('tags');
    const year = document.getElementById('spinner-1');
    var gender = $("input[name='gender']:checked").val();
    

    // This variable stores all the data.
    let data = 
        '\r Name: ' + fn.value + ' ' + mn.value + ' ' + ln.value + ' \r\n ' +
        'Gender: ' + gender + ' \r\n ' + 
        'Date of Birth: ' + dob.value + ' \r\n ' + 
        'Province: ' + prov.value + ' \r\n ' + 
        'Year Level: ' + year.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], {type: 'text/plain'});
    const sFileName = 'formData.txt'; // the file to save data

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null){
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }else{
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}