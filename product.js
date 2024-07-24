function CreateMatrix() {
    const row = document.getElementById('rows').value;
    const column = document.getElementById('columns').value;
    const generatedMatrix = document.getElementById('generatedMatrix');
    generatedMatrix.innerHTML = '';  
    if(row<1 || column<1)
        {
            alert('Invalid row or column parameter');
            return;
        }      
    generatedMatrix.appendChild(document.createElement('br'));
    generatedMatrix.appendChild(document.createElement('br'));
    generatedMatrix.append("Generated Matrix");
    generatedMatrix.appendChild(document.createElement('br'));
    const Matrix1=document.createElement('div');
    Matrix1.className = 'Matrix1';
    Matrix1.style.display="inline-block";
        Matrix1.id = `Matrix1`;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.id = `Matrix1-${i}-${j}`;
                Matrix1.appendChild(input);
            }
            Matrix1.appendChild(document.createElement('br'));
        }
        generatedMatrix.appendChild(Matrix1);
        const Matrix2 = document.createElement('div');
        Matrix2.className = 'Matrix2';
        Matrix2.style.display="inline-block";
        Matrix2.id = `Matrix2`;
        for (let i = 0; i < column; i++) {
            for (let j = 0; j < row; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.id = `Matrix2-${i}-${j}`;
                Matrix2.appendChild(input);
            }
            Matrix2.appendChild(document.createElement('br'));
        }
        generatedMatrix.appendChild(Matrix2);
}

function MultiplyMatrix() {
    const row = document.getElementById('rows').value;
    const column = document.getElementById('columns').value;
    const resultMatrix = [];
    for (let i = 0; i < row; i++) {
        const rowResult = [];
        for (let j = 0; j < row; j++) {
            let sum = 0;
            for (let k = 0; k < column; k++) {
                const value1 = parseInt(document.getElementById(`Matrix1-${i}-${k}`).value);
                const value2 = parseInt(document.getElementById(`Matrix2-${k}-${j}`).value);
                if (isNaN(value1) || isNaN(value2)) {
                    alert("Please enter valid integers for all matrix values.");
                    return;
                }
                sum += value1 * value2;
            }
            rowResult.push(sum);
        }
        resultMatrix.push(rowResult);
    }
    displayResult(resultMatrix);
}

function displayResult(matrix) {
    const generatedMatrix = document.getElementById('generatedMatrix');
    const resultDiv = document.getElementById('resultDisplay');
    resultDiv.innerHTML='';
    resultDiv.className = 'matrix';
    const ResultHead= document.createElement('div');
    ResultHead.className='resultHead';
    ResultHead.textContent='Result Matrix';
    resultDiv.appendChild(ResultHead);
    resultDiv.appendChild(document.createElement('br'));
    matrix.forEach(row => {
        row.forEach(value => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = value;
            input.disabled = true;
            resultDiv.appendChild(input);
        });
        resultDiv.appendChild(document.createElement('br'));
    });
    resultDiv.appendChild(resultDiv);
}