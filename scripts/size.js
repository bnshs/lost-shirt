(function() {
    const controlls = document.querySelectorAll(".sizefutbolka");
    const activeClass = "razmer__ramer--active";
    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
    e.preventDefault();
    controlls.forEach(function(link) {
    link.closest(".razmer__ramer").classList.remove(activeClass);
    })
    control.closest(".razmer__ramer").classList.add(activeClass);
    })
    })
    })()