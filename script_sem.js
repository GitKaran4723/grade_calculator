let intro_page = document.getElementById('Intro');
let py_page = document.getElementById('py');
let CM_page = document.getElementById('CM');
let CO_page = document.getElementById('CO');
let OSU_page = document.getElementById('OSU');
let DS_page = document.getElementById('DS');
let PCE_page = document.getElementById('PCE');
let WP_page = document.getElementById('WP');
let BC_page = document.getElementById('BC');
let grade_page = document.getElementById('grades');
let history_page = document.getElementById('History_stored')

let header_1 = document.getElementById("header_update-1");
let header1 = document.getElementById("header_update0");
let header2 = document.getElementById("header_update1");

let points = { 'S': 10, 'A': 9, 'B': 8, 'C': 7, 'D': 6, 'E': 5, 'F': 4 }
const credit = { 'py': 4, 'CM': 4, 'CO': 3, 'OSU': 4, 'PCE': 2, 'WP': 3, 'BC': 0 }
//imported buttons here...
let btn_to_sem = document.getElementById('to_sem');
let to_py_page = document.getElementById('to_py1');

let to_intro_page = document.getElementById('to_intro');
let to_CM_page = document.getElementById('to_CM1');

let back_py_page = document.getElementById('to_py2');
let to_CO_page = document.getElementById('to_CO1');

let back_CM_page = document.getElementById('to_CM2');
let to_OSU_page = document.getElementById('to_OSU1');

let back_CO_page = document.getElementById('to_CO2');
let to_DS_page = document.getElementById('to_DS1');

let back_OSU_page = document.getElementById('to_OSU2');
let to_PCE_page = document.getElementById('to_PCE1');

let back_DS_page = document.getElementById('to_DS2');
let to_WP_page = document.getElementById('to_WP1');

let back_PCE_page = document.getElementById('to_PCE2');
let to_BC_page = document.getElementById('to_BC1');

let back_WP_page = document.getElementById('to_WP2');
let to_grade_page = document.getElementById('to_grade');

let back_BC_page = document.getElementById('to_BC2');
let back_to_marks = document.getElementById('back_to_marks');

//history button
back_to_marks.addEventListener('click', function (e) {
    grade_page.style.left = "0px";
    history_page.style.left = "2000px";
    history_page.style.position = "fixed";
})


btn_to_sem.addEventListener('click', function (e) {
    const result = confirm("Do you want to loose the data entered?");
    if (result) {
        location = "Allsemester.html";
    }
});

to_py_page.addEventListener('click', function (e) {
    var input1 = document.getElementById("Naming").value;
    var input2 = document.getElementById("USN_mension").value;
    var pattern1 = /^[A-Za-z]+$/;
    var pattern2 = /^1MS22MCA\d{2}-T$/;
    if (pattern1.test(input1) && pattern2.test(input2)) {
        py_page.style.left = "0px";
        header_1.style.left = "-2000px";
        header1.style.left = "0px";
        intro_page.style.left = "-2000px";
    }
    else {
        alert('Enter a valid Name and USN')
    }
});

to_intro_page.addEventListener('click', function (e) {
    py_page.style.left = "2000px";
    intro_page.style.left = "0px";
    header1.style.left = "2000px";
    header_1.style.left = "0px";
});

to_CM_page.addEventListener('click', function (e) {
    py_page.style.left = "-2000px";
    CM_page.style.left = "0px";
});

back_py_page.addEventListener('click', function (e) {
    CM_page.style.left = "2000px"
    py_page.style.left = "0px"
});

to_CO_page.addEventListener('click', function (e) {
    CM_page.style.left = "-2000px";
    CO_page.style.left = "0px";
});

back_CM_page.addEventListener('click', function (e) {
    CO_page.style.left = "2000px"
    CM_page.style.left = "0px"
});

to_OSU_page.addEventListener('click', function (e) {
    CO_page.style.left = "-2000px";
    OSU_page.style.left = "10px";
});

back_CO_page.addEventListener('click', function (e) {
    OSU_page.style.left = "2000px"
    CO_page.style.left = "0px"
});

to_DS_page.addEventListener('click', function (e) {
    OSU_page.style.left = "-2000px";
    DS_page.style.left = "0px";
});

back_OSU_page.addEventListener('click', function (e) {
    DS_page.style.left = "2000px"
    OSU_page.style.left = "0px"
});

to_PCE_page.addEventListener('click', function (e) {
    DS_page.style.left = "-2000px";
    PCE_page.style.left = "0px";
});

back_DS_page.addEventListener('click', function (e) {
    PCE_page.style.left = "2000px"
    DS_page.style.left = "0px"
});

to_WP_page.addEventListener('click', function (e) {
    PCE_page.style.left = "-2000px";
    WP_page.style.left = "0px";
});

back_PCE_page.addEventListener('click', function (e) {
    WP_page.style.left = "2000px"
    PCE_page.style.left = "0px"
});

to_BC_page.addEventListener('click', function (e) {
    WP_page.style.left = "-2000px";
    BC_page.style.left = "0px";
});

back_WP_page.addEventListener('click', function (e) {
    BC_page.style.left = "2000px";
    WP_page.style.left = "0px";
});



to_grade_page.addEventListener('click', function (e) {
    BC_page.style.left = "-2000px";
    grade_page.style.left = "0px";
    grade_page.style.position = "absolute";
    header1.style.left = "-2000px";
    header2.style.left = "0px";
});

back_BC_page.addEventListener('click', function (e) {
    BC_page.style.left = "0px";
    grade_page.style.left = "2000px";
    header2.style.left = "2000px";
    header1.style.left = "0px";
});

var to_list = document.getElementById("to_history");
to_list.addEventListener('click', function (e) {
    history_page.style.left = "0px";
    history_page.style.position = "absolute";
    grade_page.style.left = "-2000px";
})


var solve_grade = document.getElementById('to_grade');
solve_grade.addEventListener('click', function (e) {

    let py_ia1 = parseInt(document.getElementById('py_ia1').value);
    let py_ia2 = parseInt(document.getElementById('py_ia2').value);
    let py_assign = parseInt(document.getElementById('py_assign').value);
    let py_quiz = parseInt(document.getElementById('py_quiz').value);
    let py_see = parseInt(document.getElementById('py_see').value);

    let ai_avg_py = (py_ia1 + py_ia2) / 2;
    let py_see_reduced = py_see / 2;
    let total_marks_py = ai_avg_py + py_assign + py_quiz + py_see_reduced;
    let grade_py;
    if (total_marks_py >= 90) {
        grade_py = 'S';
    }
    else if (total_marks_py >= 80) {
        grade_py = 'A';
    }
    else if (total_marks_py >= 70) {
        grade_py = 'B';
    }
    else if (total_marks_py >= 60) {
        grade_py = 'C';
    }
    else if (total_marks_py >= 50) {
        grade_py = 'D';
    }
    else if (total_marks_py >= 40) {
        grade_py = 'E';
    }
    else {
        grade_py = 'F'
    }


    let grade_point_py = points[grade_py];
    let cradit_grade_points_py = 4 * grade_point_py;

    console.log(grade_point_py);
    console.log(cradit_grade_points_py);
    //calculation for CM subject
    let CM_ia1 = parseInt(document.getElementById('CM_ia1').value);
    let CM_ia2 = parseInt(document.getElementById('CM_ia2').value);
    let CM_assign = parseInt(document.getElementById('CM_assign').value);
    let CM_quiz = parseInt(document.getElementById('CM_quiz').value);
    let CM_see = parseInt(document.getElementById('CM_see').value);

    let ai_avg_CM = (CM_ia1 + CM_ia2) / 2;
    let CM_see_reduced = CM_see / 2;
    let total_marks_CM = ai_avg_CM + CM_assign + CM_quiz + CM_see_reduced;
    let grade_CM;
    if (total_marks_CM >= 90) {
        grade_CM = 'S';
    }
    else if (total_marks_CM >= 80) {
        grade_CM = 'A';
    }
    else if (total_marks_CM >= 70) {
        grade_CM = 'B';
    }
    else if (total_marks_CM >= 60) {
        grade_CM = 'C';
    }
    else if (total_marks_CM >= 50) {
        grade_CM = 'D';
    }
    else if (total_marks_CM >= 40) {
        grade_CM = 'E';
    }
    else {
        grade_CM = 'F'
    }

    let grade_point_CM = points[grade_CM];
    let cradit_grade_points_CM = 4 * grade_point_CM;

    // calculation of CO grade
    let CO_ia1 = parseInt(document.getElementById('CO_ia1').value);
    let CO_ia2 = parseInt(document.getElementById('CO_ia2').value);
    let CO_assign = parseInt(document.getElementById('CO_assign').value);
    let CO_quiz = parseInt(document.getElementById('CO_quiz').value);
    let CO_see = parseInt(document.getElementById('CO_see').value);

    let ai_avg_CO = (CO_ia1 + CO_ia2) / 2;
    let CO_see_reduced = CO_see / 2;
    let total_marks_CO = ai_avg_CO + CO_assign + CO_quiz + CO_see_reduced;
    let grade_CO;
    if (total_marks_CO >= 90) {
        grade_CO = 'S';
    }
    else if (total_marks_CO >= 80) {
        grade_CO = 'A';
    }
    else if (total_marks_CO >= 70) {
        grade_CO = 'B';
    }
    else if (total_marks_CO >= 60) {
        grade_CO = 'C';
    }
    else if (total_marks_CO >= 50) {
        grade_CO = 'D';
    }
    else if (total_marks_CO >= 40) {
        grade_CO = 'E';
    }
    else {
        grade_CO = 'F'
    }

    let grade_point_CO = points[grade_CO];
    let cradit_grade_points_CO = 3 * grade_point_CO;

    //grade calculation  for OSU
    let OSU_ia1 = parseInt(document.getElementById('OSU_ia1').value);
    let OSU_ia2 = parseInt(document.getElementById('OSU_ia2').value);
    let OSU_assign = parseInt(document.getElementById('OSU_assign').value);
    let OSU_quiz = parseInt(document.getElementById('OSU_quiz').value);
    let OSU_see = parseInt(document.getElementById('OSU_see').value);

    let ai_avg_OSU = (OSU_ia1 + OSU_ia2) / 2;
    let OSU_see_reduced = OSU_see / 2;
    let total_marks_OSU = ai_avg_OSU + OSU_assign + OSU_quiz + OSU_see_reduced;
    let grade_OSU;
    if (total_marks_OSU >= 90) {
        grade_OSU = 'S';
    }
    else if (total_marks_OSU >= 80) {
        grade_OSU = 'A';
    }
    else if (total_marks_OSU >= 70) {
        grade_OSU = 'B';
    }
    else if (total_marks_OSU >= 60) {
        grade_OSU = 'C';
    }
    else if (total_marks_OSU >= 50) {
        grade_OSU = 'D';
    }
    else if (total_marks_OSU >= 40) {
        grade_OSU = 'E';
    }
    else {
        grade_OSU = 'F'
    }

    let grade_point_OSU = points[grade_OSU];
    let cradit_grade_points_OSU = 4 * grade_point_OSU;

    //calculation for DS
    let DS_ia1 = parseInt(document.getElementById('DS_ia1').value);
    let DS_ia2 = parseInt(document.getElementById('DS_ia2').value);
    let DS_assign = parseInt(document.getElementById('DS_assign').value);
    let DS_quiz = parseInt(document.getElementById('DS_quiz').value);
    let DS_see = parseInt(document.getElementById('DS_see').value);

    let ai_avg_DS = (DS_ia1 + DS_ia2) / 2;
    let DS_see_reduced = DS_see / 2;
    let total_marks_DS = ai_avg_DS + DS_assign + DS_quiz + DS_see_reduced;
    let grade_DS;
    if (total_marks_DS >= 90) {
        grade_DS = 'S';
    }
    else if (total_marks_DS >= 80) {
        grade_DS = 'A';
    }
    else if (total_marks_DS >= 70) {
        grade_DS = 'B';
    }
    else if (total_marks_DS >= 60) {
        grade_DS = 'C';
    }
    else if (total_marks_DS >= 50) {
        grade_DS = 'D';
    }
    else if (total_marks_DS >= 40) {
        grade_DS = 'E';
    }
    else {
        grade_DS = 'F'
    }

    let grade_point_DS = points[grade_DS];
    let cradit_grade_points_DS = 4 * grade_point_DS;

    //grad of PCE
    let PCE_ia1 = parseInt(document.getElementById('PCE_ia1').value);
    let PCE_ia2 = parseInt(document.getElementById('PCE_ia2').value);
    let PCE_assign = parseInt(document.getElementById('PCE_assign').value);
    let PCE_quiz = parseInt(document.getElementById('PCE_quiz').value);
    let PCE_see = parseInt(document.getElementById('PCE_see').value);

    let ai_avg_PCE = (PCE_ia1 + PCE_ia2) / 2;
    let PCE_see_reduced = PCE_see / 2;
    let total_marks_PCE = ai_avg_PCE + PCE_assign + PCE_quiz + PCE_see_reduced;
    let grade_PCE;
    if (total_marks_PCE >= 90) {
        grade_PCE = 'S';
    }
    else if (total_marks_PCE >= 80) {
        grade_PCE = 'A';
    }
    else if (total_marks_PCE >= 70) {
        grade_PCE = 'B';
    }
    else if (total_marks_PCE >= 60) {
        grade_PCE = 'C';
    }
    else if (total_marks_PCE >= 50) {
        grade_PCE = 'D';
    }
    else if (total_marks_PCE >= 40) {
        grade_PCE = 'E';
    }
    else {
        grade_PCE = 'F'
    }
    let grade_point_PCE = points[grade_PCE];
    let cradit_grade_points_PCE = 2 * grade_point_PCE;

    //calclulation for WP
    let WP_ia1 = parseInt(document.getElementById('WP_ia1').value);
    let WP_ia2 = parseInt(document.getElementById('WP_ia2').value);
    let WP_assign = parseInt(document.getElementById('WP_assign').value);
    let WP_quiz = parseInt(document.getElementById('WP_quiz').value);
    let WP_see = parseInt(document.getElementById('WP_see').value);

    let ai_avg_WP = (WP_ia1 + WP_ia2) / 2;
    let WP_see_reduced = WP_see / 2;
    let total_marks_WP = ai_avg_WP + WP_assign + WP_quiz + WP_see_reduced;
    let grade_WP;
    if (total_marks_WP >= 90) {
        grade_WP = 'S';
    }
    else if (total_marks_WP >= 80) {
        grade_WP = 'A';
    }
    else if (total_marks_WP >= 70) {
        grade_WP = 'B';
    }
    else if (total_marks_WP >= 60) {
        grade_WP = 'C';
    }
    else if (total_marks_WP >= 50) {
        grade_WP = 'D';
    }
    else if (total_marks_WP >= 40) {
        grade_WP = 'E';
    }
    else {
        grade_WP = 'F'
    }

    let grade_point_WP = points[grade_WP];
    let cradit_grade_points_WP = 3 * grade_point_WP;

    //calculation for BC
    let BC_ia1 = parseInt(document.getElementById('BC_ia1').value);
    let BC_ia2 = parseInt(document.getElementById('BC_ia2').value);
    let BC_assign = parseInt(document.getElementById('BC_assign').value);
    let BC_quiz = parseInt(document.getElementById('BC_quiz').value);
    let BC_see = parseInt(document.getElementById('BC_see').value);
    let ai_avg_BC = (BC_ia1 + BC_ia2) / 2;
    let BC_see_reduced = BC_see / 2;
    let total_marks_BC = ai_avg_BC + BC_assign + BC_quiz + BC_see_reduced;
    let grade_BC;
    if (total_marks_BC >= 90) {
        grade_BC = 'S';
    }
    else if (total_marks_BC >= 80) {
        grade_BC = 'A';
    }
    else if (total_marks_BC >= 70) {
        grade_BC = 'B';
    }
    else if (total_marks_BC >= 60) {
        grade_BC = 'C';
    }
    else if (total_marks_BC >= 50) {
        grade_BC = 'D';
    }
    else if (total_marks_BC >= 40) {
        grade_BC = 'E';
    }
    else {
        grade_BC = 'F'
    }

    let grade_point_BC = points[grade_BC];
    let credit_grade_points_BC = credit.BC * grade_point_BC;

    //importing data in to the table:
    var table = document.getElementById('marks_card');
    table.rows[2].cells[3].innerHTML = ai_avg_py;
    table.rows[2].cells[4].innerHTML = py_assign;
    table.rows[2].cells[5].innerHTML = py_quiz;
    table.rows[2].cells[6].innerHTML = py_see;
    table.rows[2].cells[7].innerHTML = total_marks_py;
    table.rows[2].cells[8].innerHTML = grade_py;
    table.rows[2].cells[9].innerHTML = grade_point_py;
    table.rows[2].cells[10].innerHTML = cradit_grade_points_py;

    table.rows[3].cells[3].innerHTML = ai_avg_CM;
    table.rows[3].cells[4].innerHTML = CM_assign;
    table.rows[3].cells[5].innerHTML = CM_quiz;
    table.rows[3].cells[6].innerHTML = CM_see;
    table.rows[3].cells[7].innerHTML = total_marks_CM;
    table.rows[3].cells[8].innerHTML = grade_CM;
    table.rows[3].cells[9].innerHTML = grade_point_CM;
    table.rows[3].cells[10].innerHTML = cradit_grade_points_CM;

    table.rows[4].cells[3].innerHTML = ai_avg_CO;
    table.rows[4].cells[4].innerHTML = CO_assign;
    table.rows[4].cells[5].innerHTML = CO_quiz;
    table.rows[4].cells[6].innerHTML = CO_see;
    table.rows[4].cells[7].innerHTML = total_marks_CO;
    table.rows[4].cells[8].innerHTML = grade_CO;
    table.rows[4].cells[9].innerHTML = grade_point_CO;
    table.rows[4].cells[10].innerHTML = cradit_grade_points_CO;

    table.rows[5].cells[3].innerHTML = ai_avg_OSU;
    table.rows[5].cells[4].innerHTML = OSU_assign;
    table.rows[5].cells[5].innerHTML = OSU_quiz;
    table.rows[5].cells[6].innerHTML = OSU_see;
    table.rows[5].cells[7].innerHTML = total_marks_OSU;
    table.rows[5].cells[8].innerHTML = grade_OSU;
    table.rows[5].cells[9].innerHTML = grade_point_OSU;
    table.rows[5].cells[10].innerHTML = cradit_grade_points_OSU;

    table.rows[6].cells[3].innerHTML = ai_avg_DS;
    table.rows[6].cells[4].innerHTML = DS_assign;
    table.rows[6].cells[5].innerHTML = DS_quiz;
    table.rows[6].cells[6].innerHTML = DS_see;
    table.rows[6].cells[7].innerHTML = total_marks_DS;
    table.rows[6].cells[8].innerHTML = grade_DS;
    table.rows[6].cells[9].innerHTML = grade_point_DS;
    table.rows[6].cells[10].innerHTML = cradit_grade_points_DS;

    table.rows[7].cells[3].innerHTML = ai_avg_PCE;
    table.rows[7].cells[4].innerHTML = PCE_assign;
    table.rows[7].cells[5].innerHTML = PCE_quiz;
    table.rows[7].cells[6].innerHTML = PCE_see;
    table.rows[7].cells[7].innerHTML = total_marks_PCE;
    table.rows[7].cells[8].innerHTML = grade_PCE;
    table.rows[7].cells[9].innerHTML = grade_point_PCE;
    table.rows[7].cells[10].innerHTML = cradit_grade_points_PCE;

    table.rows[8].cells[3].innerHTML = ai_avg_WP;
    table.rows[8].cells[4].innerHTML = WP_assign;
    table.rows[8].cells[5].innerHTML = WP_quiz;
    table.rows[8].cells[6].innerHTML = WP_see;
    table.rows[8].cells[7].innerHTML = total_marks_WP;
    table.rows[8].cells[8].innerHTML = grade_WP;
    table.rows[8].cells[9].innerHTML = grade_point_WP;
    table.rows[8].cells[10].innerHTML = cradit_grade_points_WP;

    table.rows[9].cells[3].innerHTML = ai_avg_BC;
    table.rows[9].cells[4].innerHTML = BC_assign;
    table.rows[9].cells[5].innerHTML = BC_quiz;
    table.rows[9].cells[6].innerHTML = BC_see;
    table.rows[9].cells[7].innerHTML = total_marks_BC;
    table.rows[9].cells[8].innerHTML = grade_BC;
    table.rows[9].cells[9].innerHTML = grade_point_BC;
    table.rows[9].cells[10].innerHTML = credit_grade_points_BC;

    //writing the name in to the certificate 
    let name = document.getElementById('Naming').value;
    let USN = document.getElementById('USN_mension').value;
    document.getElementById('candidate_name').innerHTML = name;
    document.getElementById('usn').innerHTML = USN;

    let total_credits = 4 + 4 + 3 + 4 + 4 + 3 + 2 + 0;
    let credit_grade_points = cradit_grade_points_py + cradit_grade_points_CM
        + cradit_grade_points_CO
        + cradit_grade_points_OSU
        + cradit_grade_points_DS
        + cradit_grade_points_PCE
        + cradit_grade_points_WP
        + credit_grade_points_BC;
    let sgpa = credit_grade_points / total_credits;
    console.log(sgpa);
    table.rows[10].cells[1].innerHTML = sgpa.toFixed(2);

    if (sgpa <= 6) {
        table.rows[10].cells[1].style.color = "red";
    }
    else {
        table.rows[10].cells[1].style.color = "green";
    }


    //this is added later

    const tableBody = document.getElementById('table-body');
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', (event) => {
        //event.preventDefault(); // Prevent form submission
        history_page.style.left = "0px";
        history_page.style.position = "absolute";
        grade_page.style.left = "-2000px";


        var table = document.getElementById('marks_card');
        const name = document.getElementById('Naming').value;
        const USN = document.getElementById('USN_mension').value;
        const sgpa = table.rows[10].cells[1].textContent;

        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('tableData')) || [];

        // Add new data to existing data
        const newData = {
            Roll: USN,
            Name: name,
            SGPA: sgpa
        };
        existingData.push(newData);

        // Store data in localStorage
        localStorage.setItem('tableData', JSON.stringify(existingData));

        // Update table
        updateTable();
    });

    function updateTable() {
        let html = '';
        const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
        for (const data of tableData) {
            html += `<tr><td>${data.Roll}</td><td>${data.Name}</td><td style="font-weight:bold; font-size:30px;">${data.SGPA}</td></tr>`;
        }
        tableBody.innerHTML = html;
    }

    // Load existing data on page load
    window.addEventListener('load', updateTable);

    var del = document.getElementById('delete-btn');
    del.addEventListener('click', (event) => {
        history_page.style.position = "fixed";
        value = confirm("Do you want to loose the stored data?");
        if (value) {
            localStorage.clear();
            location.reload();
        }

    })

    //here it completes
    var refresh1 = document.getElementById('next_entry');
    refresh1.addEventListener('click', function (e) {
        location.reload();
    })

});







