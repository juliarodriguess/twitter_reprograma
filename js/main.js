$("#btn-submit").click(function () {
    $("#fim").prepend(`<div>
    <p class="h3 text-center mt-5">${$("#text-tweet").val()}</p>
    </div>`);
});

