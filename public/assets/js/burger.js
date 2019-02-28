$(document).on("click", '.devour', function (e) {
    var id = $(this).data("id")
    $.ajax({
      url: '/update/' + id,
      method: 'PUT',
      data: { id: id, devoured: 1 },
      success: function (res) {
        var devouredBurger = $(`.burger${id}`);
        devouredBurger.remove()
        devouredBurger.children().remove()
        $('.devoured').append(devouredBurger)
      }
    })
  })




  $(document).on("click", '.addNewBurger', function (e) {
    e.preventDefault()
    var burger_name = $('#burgerName').val()
    $.ajax({
      url: '/',
      method: 'POST',
      data: { burger_name: burger_name, devoured: 0 },
      success: function (res) {
        $(".notDevour").append(
          `<li class="burger${res[1]} list-group-item" data-id=${res[1]}>${res[0].burger_name}
              <button class="devour btn-primary" data-id=${res[1]}>Devour</button>
            </li>`
        )
      }
    })
    $('#burgerName').val('')
  })