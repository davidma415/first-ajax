document.addEventListener("DOMContentLoaded", function() {
  // step 1
  function ajaxStep12() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  }

  // step 2
  var request1 = document.querySelector('.step2');
  request1.addEventListener('click', ajaxStep12);

  // step 3
  function ajaxStep3() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
      var section3456 = document.querySelector('#step3456');
      section3456.append(responseData);
      console.log('The request has been completed successfully.');
    }).fail(function () {
      var section3456 = document.querySelector('#step3456');
      section3456.append("This request failed, I'll try harder next time!");
      console.log('The request has failed');
    }).always(function () {
      console.log('The request has been finished');
    });
  }
  var request2 = document.querySelector('.button3456');
  request2.addEventListener('click', ajaxStep3)

  // step 7
  

});
