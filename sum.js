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
    for (let m = 1; m <= 2; m++) {
        const matrixDiv = document.createElement('div');
        matrixDiv.className = 'matrix';
        matrixDiv.style.display="inline-block";
        matrixDiv.id = `matrix${m}`;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.id = `matrix${m}-${i}-${j}`;
                matrixDiv.appendChild(input);
            }
            matrixDiv.appendChild(document.createElement('br'));
        }
        generatedMatrix.appendChild(matrixDiv);
    }
}

function AddMatrix() {
    const row = document.getElementById('rows').value;
    const column = document.getElementById('columns').value;
    const sumMatrix = [];
    for (let i = 0; i < row; i++) {
        const rowSum = [];
        for (let j = 0; j < column; j++) {
            const element1 = parseInt(document.getElementById(`matrix1-${i}-${j}`).value) ;
            const element2 = parseInt(document.getElementById(`matrix2-${i}-${j}`).value) ;
            if (isNaN(element1) || isNaN(element2)) {
                alert("Please enter valid integers for all matrix values.");
                return;
            }
            rowSum.push(element1 + element2);
        }
        sumMatrix.push(rowSum);
    }
    displayResult(sumMatrix);
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












