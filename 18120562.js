
function Calculate(frm)
{	
	const notice = document.getElementById("notice");
	if(CheckNumber(frm.firstNum.value) == false || CheckNumber(frm.secondNum.value) == false)
	{
		notice.innerText = "Dữ liệu không hợp lệ.";
		return;
	}
			
	if(frm.firstNum.value == "" || frm.secondNum.value == "")
	{
		notice.innerText = "Chưa điền đủ 2 số.";
		return;
	}
			
	const firstNumber = Number(frm.firstNum.value);
	const secondNumber = Number(frm.secondNum.value);
	
	const result = frm.result;
			
	const checkAdd = document.getElementById("add");
	const checkSubtract = document.getElementById("subtract");
	const checkMultiply = document.getElementById("multiply");
	const checkDivide = document.getElementById("divide");
			
	if(checkAdd.checked)
	{
		result.value = firstNumber + secondNumber;
		notice.innerText = "";
	}
	else
		if(checkSubtract.checked)
		{
			result.value = firstNumber - secondNumber;
			notice.innerText = "";
		}
		else
			if(checkMultiply.checked)
			{
				result.value = firstNumber * secondNumber;
				notice.innerText = "";
			}
			else
				if(checkDivide.checked)
				{
					result.value = firstNumber / secondNumber;
					notice.innerText = "";
				}
				else
					notice.innerText = "Chưa chọn phép tính.";
			
}

function CheckNumber(value)
{
	let i = 0;
	let dot = 0;
	for(i = 0; i < value.length; i++)
	{
		if((value[i] < '0' || value[i] > '9') && value[i] != '.')
			return false;
		if(value[i] == '.')
			dot += 1;
		if(dot >= 2)
			return false;
	}
	return true;
}

function CheckNumber1()
{
	const notice = document.getElementById("notice");
	const value = document.getElementById("firstNum").value;
	if(CheckNumber(value))
	{
		if(notice.innerHTML == "Giá trị nhập ở ô <i> Số thứ nhất </i> không phải là số.")
			notice.innerHTML = "";
	}
	else
		notice.innerHTML = "Giá trị nhập ở ô <i> Số thứ nhất </i> không phải là số.";		
}

function CheckNumber2()
{
	const notice = document.getElementById("notice");
	const value = document.getElementById("secondNum").value;
	if(CheckNumber(value))
	{
		if(notice.innerHTML == "Giá trị nhập ở ô <i> Số thứ hai </i> không phải là số.")
			notice.innerHTML = "";
	}
	else
		notice.innerHTML = "Giá trị nhập ở ô <i> Số thứ hai </i> không phải là số.";		
}