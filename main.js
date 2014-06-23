

// var myArray = myString.split(' ');

$(function() {    
    for (i in agents){
        if (agents[i].number >= 0){
           $(".freeAgents").append("<li>" + agents[i].name + " " +agents[i].number + " " +agents[i].position + " " +agents[i].gamesPlayed + "</li>");
        }
    }

    $(".freeAgents li").click(function(){
        $(".myTeam").append(this);
    });



});


// next step: seperate the array so the view is more appealing.
// add a click event to the html page so agents can be added to the player list




// THIS WAS BEING USED ON STATIC HTML PAGE
// THIS WORKED TO MOVE THE PLAYER BUT CLONEED PREVIOUS CLICKS



// THIS WORKS TO MOVE THE PLAYER BUT CLONES PREVIOUS CLICKS
    // $("#freeAgents li").click(function(){
    //     $(this).appendTo("#myTeam li");
    // });

// THIS WORKS TO REMOVE THE PLAYERS THATS IT.
//     $("#freeAgents li").click(function(){
//         $(this).remove()
//     });
// });