let button = $("#btn-submit");
button.click(function () {
    let text = $("#text-tweet").val();
    let fim = $("#fim");
    let tweet =
    `<div>
    <p class="h3 text-center mt-5">${text}</p>
    </div>`
    fim.prepend(tweet);
    console.log(text, tweet);
});

