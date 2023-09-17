
function replace_row_textarea() {
    const fnc_textarea = document.getElementById('myTextarea');
    fnc_textarea.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'Enter') {
            // Tăng số dòng của textarea lên 1
            this.rows += 1;
        }
    });
}