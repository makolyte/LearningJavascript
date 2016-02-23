/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */


/ * model */

var studentProto = {
    init: function () {
        return {
            name: '',
            days: [true, true, true, true, true, true, true, true, true, true, true, true]
        }
    }
}


var model  = {
    students:[],
    getRandomBool:function(){ return Math.random() < 0.5},
    generateStudent:function(name) {
        var student = studentProto.init()
        student.name = name
        for(dayIndex in student.days)
        {
            student.days[dayIndex] = this.getRandomBool()
        }
        return student
    },
    init:function()
    {
        this.students.push(this.generateStudent("slappy"))
        this.students.push(this.generateStudent("lilly"))
        this.students.push(this.generateStudent("paul"))
        this.students.push(this.generateStudent("greg"))
        this.students.push(this.generateStudent("adam"))

    }
}

/* view */
var view = {
    cell_name_template:'<td class="name-col">$name</td>',
    cell_missed_template:  '<td class="missed-col">$missed</td>',
    row_header_template: '<tr class="student" id="">',
    cell_attend_template: '<td class="attend-col"><input id="" type="checkbox"></td>'
}


/* octopus */
var octo = {

    getMissed:function(student)
    {
        var missed = 0
        for(var dayIndex in student.days)
        {
            if (!student.days[dayIndex])
                missed++
        }
        return missed
    },

    initPage:function(){
        model.init()
        model.students.forEach(function(student){

           var row = $(view.row_header_template);
            row.attr("id", student.name)
           var name = $(view.cell_name_template.replace("$name", student.name));
           row.append(name);
            for(var dayIndex in student.days)
            {
                var attend = $(view.cell_attend_template)
                attend.find("input").prop("checked", student.days[dayIndex])
                attend.find("input").attr("id", dayIndex)
                row.append(attend)
            }
            var missed = $(view.cell_missed_template.replace("$missed", octo.getMissed(student)))
            row.append(missed)
            $("tbody").append(row)
        })
    }
}


$(octo.initPage())




