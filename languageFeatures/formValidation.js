function validateForm() {
    let x = document.forms.myForm.fname.value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}