
function replace_row_textarea() {
    try {
        const fnc_textarea = document.getElementById('myTextarea');
        var heightLimit = 200; /* Maximum height: 200px */
        console.log('up row');
        fnc_textarea.oninput = function() {
            fnc_textarea.style.height = ""; /* Reset the height*/
            fnc_textarea.style.height = Math.min(fnc_textarea.scrollHeight, heightLimit) + "px";
        };
    } catch (error) {
        console.error('at upRowInput', error);
    }
}