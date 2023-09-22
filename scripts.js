// function to calculate the result of the quiz
function result() {
    // creating variables to count types of answers of the quiz
    var extrovertAnswers = 0;
    var introvertAnswers = 0;
    
    // getting all the answers picked from the quiz
    var choices = document.getElementsByTagName('input');
    
    //creating loop to find amount of introvert or extrovert answers picked by user
    for (i = 0; i < choices.length; i++) {
      
      // if an answer was selected
      if (choices[i].checked) {
        
        //add to the extrovert answer amount for  
        if (choices[i].value == 'extrovertAnswer') {
          extrovertAnswers = extrovertAnswers + 1;
        }

        if (choices[i].value == 'introvertAnswer') {
          introvertAnswers = introvertAnswers + 1;
        }

      }
    }
    
    
    // Putting answer in the answerbox
    //If there are more extrovert answers, then the user is an extrovert
    //If there are more introvert answers, then the user is an introvert
    //If the amount of introvert and extrovert answers are equal, then the user is an ambivert
    var answerbox = document.getElementById('answer');
    if (extrovertAnswers > introvertAnswers) { 
      answerbox.innerHTML = "You are an Extrovert! You love meeting with people, old and new!";
      event.preventDefault()
    }

    if (introvertAnswers > extrovertAnswers) { 
      answerbox.innerHTML = "You are an Introvert! You have close friends but not very fond of meeting new people.";
      event.preventDefault()
    }

    if (introvertAnswers === extrovertAnswers ) {
      answerbox.innerHTML = "You are an Ambivert! You carry qualities of both an Introvert and an Extrovert!";
      event.preventDefault()
      
    }



    
  }

