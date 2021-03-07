(function () {
    'use strict';
    console.log("reading js");

    let name = document.getElementById('name')
    let friend1 = document.getElementById('friend1')
    let friend2 = document.getElementById('friend2')
    let relx = document.getElementById('relx')
    let drink = document.getElementById('drink')
    let game = document.getElementById('game')
    let song = document.getElementById('song')
    let submit = document.getElementById('submit')
    let shade = document.getElementsByClassName('shade')[0]
    let close = document.getElementsByClassName('close')[0]
    let para1 = document.getElementsByClassName('para1')[0]
    let para2 = document.getElementsByClassName('para2')[0]
    let para3 = document.getElementsByClassName('para3')[0]

    submit.onclick = function (card) {
        if (name.value !== '' && location.value !== '' && friend1.value !== '' && friend2.value !== '' && relx.value !== '' && drink.value !== '' && game.value !== '' && song.value !== '') {
            card.preventDefault();
            shade.classList.add('active')
            para1.innerHTML = "Welcome to the Relx Party! The streamers are hung, the lights are all low, the guests are all hidden, so let the cloud flow!" 
            para2.innerHTML = "Dear " + name.value + "."
            para3.innerHTML = "This is an invited card to the party. Please join us for a wonderful Relx Party! June 25th,2021 at 8 o'clock in the evening. 1419 Westwood Blvd, Los Angeles, CA. You can bring " + friend1.value + " and " + friend2.value + " with you. Enjoy your free " + relx.value + " Relx, drink some " + drink.value + ", and play " + game.value + " together! Also, '" + song.value + "'is ready for you."
        }
    }
    close.onclick = function () {
        shade.classList.remove('active')
    }

})()

