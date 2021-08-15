var inputs = $('input[type="text"]');
var googleSubmitBtn = $('#google-submit');
var snackbar = $('#snackbar');

var inputID = $('#ID');

function isLoading(status){
  if(status){
    $('html, body').addClass('wait');
    googleSubmitBtn.attr('disabled', true).html('입력중...');
  } else {
    $('html, body').removeClass('wait');
    googleSubmitBtn.attr('disabled', false).html('입력');
  }
}

function checkInput(){
  var isEmpty = false;
  $.each(inputs, function (index, element) {
    if (element.value === '') {
      alert('빈 칸이 있어요.');
      isEmpty = true;
      return false;
    }
  });
  return isEmpty;
}

$('#google-submit').click(function () {

  //빈값 체크
  if (checkInput()) { return; }

  // 입력중..
  isLoading(true);
  $.ajax({
  url: "https://script.google.com/macros/s/AKfycbyI2qcgqnxd1lXbD4uKdfOpQTCmynjFAfqKqPXWnWjCymg5Ps3YigqFfrmofaq22X3Y8A/exec",
  data: {ID:inputID.val()},
  type: "POST"
  });

});
