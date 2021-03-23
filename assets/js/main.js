let d = $(document);
d.ready(function () {
    $("#scrollTop").click(()=>{
        window.scrollTo(0,0);
    })
    d.scroll(function () {
        let nav = $(".navbar");
        let header = $(".page-header");
        nav.toggleClass('bg-cayman', d.scrollTop() > header.height());
    });
});