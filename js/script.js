

var modal_buy = document.querySelector(".modal-buy");

var catalog_item_buy = document.querySelectorAll(".item-buy-btn");
for (i = 0; i < catalog_item_buy.length; i++) {
    catalog_item_buy[i].addEventListener("click", function (event) {
        event.preventDefault();
        modal_buy.classList.add("modal-show");
    });
}

var modal_buy_close = modal_buy.querySelector(".modal-close");
modal_buy_close.addEventListener("click", function (event) {
    event.preventDefault();
    modal_buy.classList.remove("modal-show");
});

var modal_buy_continue = modal_buy.querySelector(".btn-continue");
modal_buy_continue.addEventListener("click", function (event) {
    event.preventDefault();
    modal_buy.classList.remove("modal-show");
});

var btn_ticket = document.querySelector(".btn-ticket");
var modal_form = document.querySelector(".modal-form");
var ticket_form = modal_form.querySelector(".ticket-form");
var login = ticket_form.querySelector("[name=login]");
var email = ticket_form.querySelector("[name=email]");
var modal_close_btn = modal_form.querySelector(".modal-close");
var modal_cancel_btn = modal_form.querySelector(".modal-cancel-btn");
var storage_login = localStorage.getItem("login");

btn_ticket.addEventListener("click", function (event) {
    event.preventDefault();
    modal_form.classList.add("modal-show");
    if (storage_login) {
        login.value = storage_login;
        email.focus();
    } else {
        login.focus();
    }
});

ticket_form.addEventListener("submit", function (event) {
    if (!(login.value && email.value)) {
        event.preventDefault();

        if (modal_form.classList.contains("modal-error")) {
            modal_form.classList.remove("modal-error");
        }
        modal_form.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

modal_close_btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (modal_form.classList.contains("modal-error")) {
        modal_form.classList.remove("modal-error");
    }
    modal_form.classList.remove("modal-show");
});

modal_cancel_btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (modal_form.classList.contains("modal-error")) {
        modal_form.classList.remove("modal-error");
    }
    if (modal_form.classList.contains("modal-show")) {
        modal_form.classList.remove("modal-show");
    }
});



window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (modal_form.classList.contains("modal-error")) {
            modal_form.classList.remove("modal-error");
        }
        if (modal_form.classList.contains("modal-show")) {
            modal_form.classList.remove("modal-show");
        }

        if (modal_buy.classList.contains("modal-show")) {
            modal_buy.classList.remove("modal-show");
        }
    }
});