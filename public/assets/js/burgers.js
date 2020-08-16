// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devourIt").on("click", function (event) {
    let id = $(this).data("id");
    let isDevoured = {
      devoured: true,
    };
    console.log(isDevoured);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured,
    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#devoured").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
