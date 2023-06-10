function name(){
    // alert("I am Lucifer");

    let clearBtn = document.querySelector('button');
  let inputs = document.querySelectorAll('input');

  let textareas = document.querySelector('textarea');


  clearBtn.addEventListener('click',()=>{
    // inputs.forEach(input => input.value = '');
    // textareas.value = ''

    setTimeout(()=>{
      inputs.forEach(input => input.value = '');
      textareas.value = ''
    },5000)
  ,(error)=>{
    alert('OOPS! SOMETHING HAS FAILED...',error)
  }

  });

  }

  /*********************/

  function name2(){
    //  alert("I am Lucifer");

    

  }

