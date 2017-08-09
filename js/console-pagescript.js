$(document).ready(() => {
    $('#student-data-container').empty()
    showStudentData()
})

function showStudentData() {
    let $container = $('#student-data-container')

    $container.append('<h1 class="text-center text-underline mb-4"><span id="student-name-header">'+"Nihar Garg"+'</span></h1>')

    let riskRow = $('<div>', {class:"row h-10"})
    riskRow.append('<span class="h5 student-property my-auto mb-2 mt-2">Risk Status: </span>')
    riskRow.append($('<span>', { id: "student-risk-status", class: "card bg-danger", text: "At Risk" }))
    riskRow.appendTo($container)

    studentDataFields.forEach( studentData => {
        let row = $('<div>', {class:"row h-10"})
        row.append($('<span>', {class: "h5 student-property my-auto mb-2 mt-2", text: studentData.description+":"}))
        //row.append($('<span>', { id: "student-risk-status", class: "card bg-danger", text: "At Risk" }))
        row.appendTo($container)
    })
}