var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz9z_YZ_uY6_2WpbZjNJGXt1LEVYO3VUDXLMGQSQkOBZAdIHYXS/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})