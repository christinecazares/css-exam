/*
Problem 5: Objects

Don't modify the document ready function. Just add the Cat object. Check your spelling!

Create an cat object!
It should have color and weight properties,
as well as be able to meow (function that prints something to console)
*/

/*
Write the Cat object definition
*/
function Cat(color, weight, meow) {
    this.color = color;
    this.weight = weight;
    this.meow = meow;
    this.setColor = function (color) {
        this.color = color;
        $("#color").text(this.color);
    }
    this.setWeight = function (weight) {
        this.weight = weight;
        $("#weight").text(this.weight);
    }
    this.setmeow = function (meow) {
        this.meow = meow;
        $("#meow").text(this.meow);
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
    setInterval(function () {
        cat.setmeow(cat.moew + 1);
    }, 1000);
    $('.cat').on('click', function () {
        console.log("The " + cat.color + " cat weighs " + cat.weight + " pounds");
        cat.meow();
    })
});