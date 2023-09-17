function replaceColorCopilot() {
    const checkbox = document.getElementById('myCheckbox');

    if (checkbox.checked) {
        document.getElementById('name_checkbox').style.color = 'rgb(32, 128, 141)';
    } else {
        document.getElementById('name_checkbox').style.color = '#4b4b4b';
    }

}

function replaceText() {
    let text = document.getElementById('type_ask').textContent;
    const checkbox = document.getElementById('myCheckbox');

    if (checkbox.checked) {
        text = ' Copilot'
        document.getElementById('type_ask').style.color = 'rgb(32, 128, 141)';
    } else {
        text = ' asking';
        document.getElementById('type_ask').style.color = 'black';
    }
    document.getElementById('type_ask').textContent = text;
}
