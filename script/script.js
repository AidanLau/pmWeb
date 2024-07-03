var userID = 1074413921;

var subData = [
    {   "Type": "CSD",  "Submission No": "GECCL/3508/D/18427/C", "Description": "CR97N(3T2 422)", "Status": "", "Target": "04 Jul 24"  },
    {   "Type": "CSD", "Submission No": "GECCL/3508/D/20763/B", "Description": "CR93N (3T2 178)", "Status": "", "Target": "04 Jul 24"  },
    {   "Type": "CSD", "Submission No": "GECCL/3508/D/19708/C", "Description": "CTR231 (3T2 204)","Status": "", "Target": "04 Jul 24"  },
    { "Type": "CSD",  "Submission No": "GECCL/3508/D/19380/B", "Description": "CTR232 (3T2 205)", "Status": "", "Target": "04 Jul 24"  },
    {  "Type": "C3408",  "Submission No": "BCJV-3408-O-02629A", "Description": "SAT Plan of (NAT-CCMS)",  "Status": "", "Target": "27 Jun 24" },
    { "Type": "C3508",  "Submission No": "GECCL/3508/O/28169/A",  "Description": "GBMS (FAT) Report (Batch 2)",  "Status": "", "Target": "03 Jul 24"},
    { "Type": "C3508",   "Submission No": "GECCL/3508/O/28170/A", "Description": "(GBMS)(DTP) Report (GCL-GEN-EM-AS-1012)",  "Status": "", "Target": "03 Jul 24"  },
    {  "Type": "C3508",     "Submission No": "GECCL/3508/O/28171/A", "Description": "(GBMS) SAT Plan",  "Status": "", "Target": "03 Jul 24" },
    { "Type": "C3802",     "Submission No": "GECCL/3802/B/009325/A",  "Description": "SCADA Panel Layout for Gatehouse A",  "Status": "", "Target": "11 Jul 24" },
    { "Type": "", "Submission No": "",  "Description": "", "Status": "", "Target": ""}
];

// Tabel Configuration
$.extend($.fn.dataTable.defaults, {
    searching: true,
    ordering: false,
    paging: false,
    info: true,
    dom: 'Bfrtip',
});

// Submission dataTable
$('#subTable').dataTable({
    "data": subData,
    "columns": [
        { "data": "Type" },
        { "data": "Submission No" },
        { "data": "Description" },
        { "data": "Status" },
        { "data": "Target" },
    ]
});

$(document).ready(function() {
    $('#subTable').DataTable();
//    $('#commsTable').DataTable();
});

var tableName = "subTable"
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
