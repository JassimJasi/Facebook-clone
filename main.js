function checker() {
    var result = confirm("are you sure");
    if (result == false) {
        event.preventDefault();
    }
}