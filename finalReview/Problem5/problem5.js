﻿/*
Problem 5: Objects

Don't modify the document ready function. Just add the Cat object. Check your spelling!

Create an cat object!
It should have color and weight properties,
as well as be able to meow (function that prints something to console)
*/

/*
Write the Cat object definition
*/
function Cat(color, weight) {
    this.color = color;

    this.weight = weight;

    this.setColor = function (color) {
        this.color = color;
        $("#color").text(this.color);
    }
    this.setWeight = function (weight) {
        this.weight = weight;

        $("#weight").text(this.weight);
    }
    this.meow= function() {
        console.log("moew");
    }

}
$(document).ready(function () {
    var cat = new Cat();



    $('#colorPicker').on('click', function () {
        cat.color = $('#color-input').val();
        $('.catBlend').css('background-color', cat.color);
    });


    $('#weight').on('click', function () {
        cat.weight = $('#weight-input').val();
        $('#weight-output').text(cat.weight);
    });

    $('.cat').on('click', function () {
        console.log("The " + cat.color + " cat weighs " + cat.weight + " pounds");
        cat.meow();
    })
});