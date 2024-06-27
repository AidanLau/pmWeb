var csdPath = "file://hkairport/Share/PSU/Projects/aProject%20Implementation/Airport%20Systems/3508/10%20Contractor%20Submission%20SQ%20SN/01%20Submission/Drawing%20-%20AS%20CSD/"
var userID = 1074413921;

var subData = [     
    { 
        "Type": "Design", "Description": "GBMS Design Proposal", 
        "3508": ["1857","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/Design - GBMS MBMS CCMS/1857 GBMS Design/"],
        "3802": ["1765","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/System design report/GBMS MBMS/B001765 GBMS Design Proposal/"],
        "3408": ["",""],
    },
    { 
        "Type": "Design", "Description": "GBMS HV Design Proposal", 
        "3508": ["6992","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/Design - GBMS MBMS CCMS/6992 GBMS HV Design"],
        "3802": ["6283","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/System design report/GBMS MBMS/B006283 GBMS HV System Design/"],
        "3408": ["",""],
    },
    { 
        "Type": "Design", "Description": "GBMS Typical Point List", 
        "3508": ["16228", "//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/Design - GBMS MBMS CCMS/16228 GBMS Typical IO Point"],
        "3802": ["??",""],
        "3408": ["D-00573","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3408/10 Contractor Submission SQ SN/Submission/Drawing - GBMS_MBMS/D-00573 GBMS General & Point Schedule & Installation Detail"],
    },
    { 
        "Type": "Design", "Description": "GBMS Detail Point List", 
        "3508": ["18984", "//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/Design - GBMS MBMS CCMS/18984 GBMS Detail Point List"],
        "3802": ["??",""],
        "3408": ["??",""],
    },
    { 
        "Type": "Design", "Description": "GBMS Control Phil", 
        "3508": ["22962","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/General Submission/GBMS MBMS CCMS SCADA/22962 GBMS Control Philosophy"],
        "3802": ["8600","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/System design report/GBMS MBMS/B008600 GBMS Control Phil"],
        "3408": ["1543","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3408/10 Contractor Submission SQ SN/Submission/General Submission/O-01543 GBMS Control Philosophy"],
    },
    { 
        "Type": "Drawing", "Description": "GBMS Typical Installation", 
        "3508": ["D-6057","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/Drawing - GBMS/6057 GBMS Installation Details"],
        "3802": ["B-02543","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/Drawing/GBMS_MBMS/B002543 - MBMS & GBMS Installation Details"],
        "3408": ["D-00808","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3408/10 Contractor Submission SQ SN/Submission/Drawing - GBMS_MBMS/D-00808 GBMS Schem & Installation Details"],
    },
    { 
        "Type": "MST", "Description": "GBMS FAT Plan", 
        "3508": ["O-10459","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/General Submission/GBMS MBMS CCMS SCADA/10459 GBMS FAT Plan"],
        "3802": ["B-03710","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/Method statement/B003710 FAT for GBMS"],
        "3408": ["Z-00746","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3408/10 Contractor Submission SQ SN/Submission/Method Statement Submission- GBMS_MBMS_CCMS/Z-00746 FAT of GBMS"],
    },
    { 
        "Type": "Report", "Description": "GBMS FAT Report", 
        "3508": ["3508-1","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/General Submission/GBMS MBMS CCMS SCADA/23475 GBMS FAT Report/"],
        "3802": ["8143","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/Method statement/B008143 FAT Report for GBMS"],
        "3408": ["",""],
    },
    { 
        "Type": "MST", "Description": "GBMS DTP Plan", 
        "3508": ["4852","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission/General Submission/GBMS MBMS CCMS SCADA/4852 DTP for GBMS/"],
        "3802": ["7896","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/Method statement/B007896 DTP for GBMS/"],
        "3408": ["",""],
    },    
    { 
        "Type": "Design", "Description": "MBMS Design Proposal", 
        "3508": ["",""],
        "3802": ["1712","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission/System design report/GBMS MBMS/B001712 MBMS system design"],
        "3408": ["",""],
    },
    { 
        "Type": "Design", "Description": "MBMS Typical Point List", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "Design", "Description": "MBMS Detail Point List", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "Drawing", "Description": "MBMS Typical Installation", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],    
    },
    { 
        "Type": "MST", "Description": "MBMS FAT Plan", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],    
    },
    { 
        "Type": "Report", "Description": "MBMS FAT Report", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "MST", "Description": "MBMS DTP Plan", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "Keydate", "Description": "Master Schedule", 
        "3508": ["3508","//hkairport/Share/PSU/Projects/aProject Implementation/3508 Terminal 2/06 - Programme/6.03A - PROG - Works Programmes"],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "Progress", "Description": "Panel Schedule", 
        "3508": ["3508","https://gammon-my.sharepoint.com/:f:/g/personal/kawaisum_gammonconstruction_com/EvbaWYaAKBlPhYzjpm7poUIBDWXJuz2iPMVRI0GAkLkfZg"],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "BIM", "Description": "Work In Progress BIM Module", 
        "3508": ["3508", "//hkairport/share/Projects-TRD/BIM-CADD/BIM/01 Models/3508/Shared Model 3508"],
        "3802": ["3802", "//hkairport/share/Projects-TRD/BIM-CADD/BIM/01 Models/3802/Shared Model 3802"],
        "3408": ["3408", "//hkairport/share/Projects-TRD/BIM-CADD/BIM/01 Models/3408/Working Model 3408"],
    },
    { 
        "Type": "Site", "Description": "Site Photo / NQAA", 
        "3508": ["3508","//hkairport/Share/PSU/Projects/aPhoto/Site Photos/04. Terminal 2 Expansion/3508/"],
        "3802": ["3802","//hkairport/Share/PSU/Projects/aPhoto/Site Photos/05. APM/3802/Airport System/"],
        "3408": ["3408","//hkairport/Share/PSU/Projects/aPhoto/Site Photos/03. Third Runway Concourse/3408/Airport Systems/"],
    },
    { 
        "Type": "Changes", "Description": "DIS / DAN / PMI", 
        "3508": ["3508","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/06 DAN DIS PMI"],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "Reference", "Description": "Submission Folder", 
        "3508": ["3508","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/10 Contractor Submission SQ SN/01 Submission"],
        "3802": ["3802","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3802/10 Contractor Submission SQ SN/01 Submission"],
        "3408": ["3408","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3408/10 Contractor Submission SQ SN/Submission"],
    },
    { 
        "Type": "Reference", "Description": "Cupix", 
        "3508": ["Chiller Plant","https://players.cupix.com/p/m24cDsKr"],
        "3802": ["Module Corridor","https://players.cupix.com/p/W1Lw9LJU"],
        "3408": ["Data Hall","https://players.cupix.com/p/4yivmhNP"],
    },
    { 
        "Type": "Reference", "Description": "Project Photo", 
        "3508": ["*Data Center", "//IT44561/Work/20200424 Global Switch 3 Photos"],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "Reference", "Description": "Airport Photo", 
        "3508": ["Incheon ICN","//hkairport/Share/PSU/Projects/aProject Implementation/Airport Systems/3508/98 Others/2023-12-24 Incheon Airport"],
        "3802": ["",""],
        "3408": ["",""],
    },
    { 
        "Type": "", "Description": "", 
        "3508": ["",""],
        "3802": ["",""],
        "3408": ["",""],
    }
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
        { "data": "Description" },
        {
            "data": "3508",
            "render": function (data, type, row, meta) {
                if (type === 'display') {
                    data = '<a target="_blank" href="' + data[1] + '">' + data[0] + '</a>';
                }

                return data;
            }
        },
        {
            "data": "3802",
            "render": function (data, type, row, meta) {
                if (type === 'display') {
                    data = '<a target="_blank" href="' + data[1] + '">' + data[0] + '</a>';
                }
                return data;
            }
        },
        {
            "data": "3408",
            "render": function (data, type, row, meta) {
                if (type === 'display') {
                    data = '<a target="_blank" href="' + data[1] + '">' + data[0] + '</a>';
                }
                return data;
            }
        }
    ]
});

$(document).ready(function() {
    $('#subTable').DataTable();
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
addEventListener("resize", function (event) {console.log("Window resized");calculateTableWidth();}, false);
