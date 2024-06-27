
// Tabel Configuration
$.extend($.fn.dataTable.defaults, {
    searching: true,
    ordering: false,
    paging: false,
    info: true,
    dom: 'Bfrtip',
});

// Submission dataTable
$('#panelTable').dataTable({
    "data": panelsData,
    "columns": [
        { "data": "Panel_ID" },
        { "data": "Module" },
        { "data": "Panel_Location" },
        { "data": "Field_ID" },
        { "data": "Description" },
        { "data": "Type" },
        { "data": "Unit" },
        { "data": "Control_ID" },
        { "data": "State0" },
        { "data": "State1" },
        { "data": "LowRange" },
        { "data": "HighRange" },
        { "data": "NC/NO" },
        { "data": "TB Upper" },
        { "data": "TB Lower" },
    ]
});

$(document).ready(function() {
    $('#panelTable').DataTable();
//    $('#commsTable').DataTable();
});

var tableName = "panelTable"
// Auto update table width
// refresh the table
var tableWidth = 0; var tableWidthCalc;

function calculateTableWidth(tableName) {
    var table = document.getElementById(tableName);
    tableWidthCalc = innerWidth - table.getBoundingClientRect().left - table.getBoundingClientRect().width;
}

// resize table if needed
function resizeTable(tableName) {
    var table = document.getElementById(tableName);
    if (tableWidthCalc < innerWidth) {
        table.style.width = "100%";
    } else if (tableWidthCalc > innerWidth) {
        table.style.width = (tableWidthCalc - innerWidth) + "px";
    }
}
// calculate table width on initial load
calculateTableWidth(tableName);

// trigger resize event on page load
resizeTable(tableName);

// calculate table width on window resize event
addEventListener("resize", function (event) {
     console.log("Window resized");
     calculateTableWidth();}, false);