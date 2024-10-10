document.addEventListener("DOMContentLoaded", function() {
    let d = document.getElementById("Design");
    let h = document.getElementById("Hardware");
    let p = document.getElementById("Product");
    let s = document.getElementById("Software");
    let b = document.getElementById("Board");
    let bus = document.getElementById("Business"); // Added Business section

    let des = document.getElementById("des");
    let har = document.getElementById("har");
    let prod = document.getElementById("prod");
    let sof = document.getElementById("sof");
    let boa = document.getElementById("boa");
    let business = document.getElementById("bus"); // New button for Business

    des.addEventListener("click", function(){
        d.style.display = 'block';
        h.style.display = 'none';
        p.style.display = 'none';
        s.style.display = 'none';
        b.style.display = 'none';
        bus.style.display = 'none'; // Hide Business
    });

    har.addEventListener("click", function(){
        d.style.display = 'none';
        h.style.display = 'block';
        p.style.display = 'none';
        s.style.display = 'none';
        b.style.display = 'none';
        bus.style.display = 'none'; // Hide Business
    });

    prod.addEventListener("click", function(){
        d.style.display = 'none';
        h.style.display = 'none';
        p.style.display = 'block';
        s.style.display = 'none';
        b.style.display = 'none';
        bus.style.display = 'none'; // Hide Business
    });

    sof.addEventListener("click", function(){
        d.style.display = 'none';
        h.style.display = 'none';
        p.style.display = 'none';
        s.style.display = 'block';
        b.style.display = 'none';
        bus.style.display = 'none'; // Hide Business
    });

    boa.addEventListener("click", function(){
        d.style.display = 'none';
        h.style.display = 'none';
        p.style.display = 'none';
        s.style.display = 'none';
        b.style.display = 'block';
        bus.style.display = 'none'; // Hide Business
    });

    business.addEventListener("click", function(){ // New event listener for Business
        d.style.display = 'none';
        h.style.display = 'none';
        p.style.display = 'none';
        s.style.display = 'none';
        b.style.display = 'none';
        bus.style.display = 'block'; // Show Business
    });
});
