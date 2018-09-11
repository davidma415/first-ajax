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
  var button7 = document.querySelector('.button7');
  button7.addEventListener('click', ajaxStep7);
  function ajaxStep7() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function (responseData) {
      var sec7 = document.querySelector('#step7');
      sec7.append(responseData);
    })
  }

  // step 8
  var button8 = document.querySelector('.button8');
  button8.addEventListener('click', ajaxStep8);
  function ajaxStep8() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Pacific/Honolulu'},
      dataType: 'text'
    }).done(function (responseData) {
      var sec8 = document.querySelector('#step8');
      sec8.append(responseData);
    })
  }

  // step 9
  var button9 = document.querySelector('.button9');
  button9.addEventListener('click', ajaxStep9);
  function ajaxStep9() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      data: {},
      dataType: 'html'
    }).done(function (responseData) {
      // var carList = document.getElementById('cars');
      // carList.append(responseData);
      $("#cars").append(responseData);
    })
  }
});
