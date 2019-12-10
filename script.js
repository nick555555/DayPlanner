var currentDay = document.querySelector("#currentDay");

currentDay.textContent = moment().format('dddd, MMMM Do');





$(document).ready(function() {

    var currentHour = parseInt(moment().format('H'));
    console.log(currentHour);
    var plannerHourNine = parseInt($(".nine").data("hour"));
    var plannerHourTen = parseInt($(".ten").data("hour"));
    var plannerHourEleven = parseInt($(".eleven").data("hour"));
    var plannerHourTwelve = parseInt($(".twelve").data("hour"));
    var plannerHourOne = parseInt($(".one").data("hour"));
    var plannerHourTwo = parseInt($(".two").data("hour"));
    var plannerHourThree = parseInt($(".three").data("hour"));
    var plannerHourFour = parseInt($(".four").data("hour"));
    var plannerHourFive = parseInt($(".five").data("hour"));
    console.log(plannerHourFour);

    if (currentHour===plannerHourNine) {
        $(".nine").addClass("present");
    }else if (currentHour > plannerHourNine){
        $(".nine").addClass("past");
    }else{
        $(".nine").addClass("future");
    }

    if (currentHour===plannerHourTen) {
        $(".ten").addClass("present");
    }else if (currentHour > plannerHourTen){
        $(".ten").addClass("past");
    }else{
        $(".ten").addClass("future");
    }

    if (currentHour===plannerHourEleven) {
        $(".eleven").addClass("present");
    }else if (currentHour > plannerHourEleven){
        $(".eleven").addClass("past");
    }else{
        $(".eleven").addClass("future");
    }

    if (currentHour===plannerHourTwelve) {
        $(".twelve").addClass("present");
    }else if (currentHour > plannerHourTwelve){
        $(".twelve").addClass("past");
    }else{
        $(".twelve").addClass("future");
    }

    if (currentHour===plannerHourOne) {
        $(".one").addClass("present");
    }else if (currentHour > plannerHourOne){
        $(".one").addClass("past");
    }else{
        $(".one").addClass("future");
    }

    if (currentHour===plannerHourTwo) {
        $(".two").addClass("present");
    }else if (currentHour > plannerHourTwo){
        $(".two").addClass("past");
    }else{
        $(".two").addClass("future");
    }

    if (currentHour===plannerHourThree) {
        $(".three").addClass("present");
    }else if (currentHour > plannerHourThree){
        $(".three").addClass("past");
    }else{
        $(".three").addClass("future");
    }

    if (currentHour===plannerHourFour) {
        $(".four").addClass("present");
    }else if (currentHour > plannerHourFour){
        $(".four").addClass("past");
    }else{
        $(".four").addClass("future");
    }

    if (currentHour===plannerHourFive) {
        $(".five").addClass("present");
    }else if (currentHour > plannerHourFive){
        $(".five").addClass("past");
    }else{
        $(".five").addClass("future");
    }

    $(".nine").text(localStorage.getItem("9AM"));
    $(".ten").text(localStorage.getItem("10AM"));
    $(".eleven").text(localStorage.getItem("11AM"));
    $(".twelve").text(localStorage.getItem("12PM"));
    $(".one").text(localStorage.getItem("1PM"));
    $(".two").text(localStorage.getItem("2PM"));
    $(".three").text(localStorage.getItem("3PM"));
    $(".four").text(localStorage.getItem("4PM"));
    $(".five").text(localStorage.getItem("5PM"));

    $(".saveNine").click(function(){
        var boxText = $(".nine").text();
        localStorage.setItem("9AM", boxText);
    })
    $(".saveTen").click(function(){
        var boxText = $(".ten").text();
        localStorage.setItem("10AM", boxText);
    })
    $(".saveEleven").click(function(){
        var boxText = $(".eleven").text();
        localStorage.setItem("11AM", boxText);
    })
    $(".saveTwelve").click(function(){
        var boxText = $(".twelve").text();
        localStorage.setItem("12PM", boxText);
    })
    $(".saveOne").click(function(){
        var boxText = $(".one").text();
        localStorage.setItem("1PM", boxText);
    })
    $(".saveTwo").click(function(){
        var boxText = $(".two").text();
        localStorage.setItem("2PM", boxText);
    })
    $(".saveThree").click(function(){
        var boxText = $(".three").text();
        localStorage.setItem("3PM", boxText);
    })
    $(".saveFour").click(function(){
        var boxText = $(".four").text();
        localStorage.setItem("4PM", boxText);
    })
    $(".saveFive").click(function(){
        var boxText = $(".five").text();
        localStorage.setItem("5PM", boxText);
    })

});