$("#btn-submit").click(function () {
    let data = new Date;
    $("#tweets").prepend(
        `<section class="card bg-light mt-5 w-50">
            <div class="card-header">@vc ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}</div>
            <div class="card-body">
            <p class="card-text">${$("#text-tweet").val()}</p>
            </div>
        </section>`
    );
    $("#text-tweet").val("");
    $("#contador").text(`Restam 280 pios`);
});

$("#text-tweet").keyup(function(){
    return $("#contador").text(`Restam ${280 - $("#text-tweet").val().length} pios`);
})