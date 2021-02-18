// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    $('#button').click(function(){
        $('#sho').show();
    })
//     console.log("start");
    // $('#refresh').on('click',refresh());
// })
//   $(document).ready(function() {
//     $('[name="report[details]"]').multiselect();
//     console.log('sta')
  });
// function refresh(){
// $.ajax({
//     type: "GET",
//     data: "",
//     url: 'get_report',
//     success: function(data){
//         console.log("success!!")
//         console.log(data)
//         // $("#reports").text(data)
//     },
//         error: function(error){
//             console.log("fail");
//         }
// });
//     }

    $(document).ready(function(){
    console.log("application")
    // $("[name='commit']").on('click',function(){
    //     let val1 = $("#name").val();
    //     let val2 = $("#details").val();
    //     $.ajax({
    //         url: "report/get_report",
    //         type: "GET",
    //         data: `[{name: ${val1} , details: ${val2} }]`,
    //         dataType: "json",
    //         success: function(response) {
    //             console.log(`${val1} ${val2} `);
    //             console.log(response);
    //         },
    //         error: function(response) {
    //             console.log("error");
    //             // console.log(response);
    //         } 
    //     })
    // })
    $("#_report_form_submit_year").hide();
    $('[for="_report_form_submit_year"]').hide();
    $("#_report_form_submit_college").on('change',function(){
        let college = $("#_report_form_submit_college").val();
        $.ajax( {
            url: "report/fetch_year",
            data: {college: `${college}`},
            dataType: 'json',
            type: 'GET',
            success: function(response) {
                $("#_report_form_submit_year").show();
                $('[for="_report_form_submit_year"]').show();
                // years_select(response);
                console.log(college);
                
            },
            error: function(response) {
                console.log(response);
            }
        })
    })
    function years_select(str) {
        
    }
})