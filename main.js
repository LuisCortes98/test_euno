$(document).ready(function() {

    const btnCreate = document.getElementById("CreateProduct");
    const form = document.getElementById("ProductForm");
    const productCode = document.getElementById("ProductCode");
    const productName = document.getElementById("ProductName");
    const productColor = document.getElementById("ProductColor");
    const productWeight = document.getElementById("ProductWeight");
    const table = document.getElementById('table');
    const tbody = table.querySelector('tbody') || table;
    const totalProducts = document.getElementById("TotalProducts");

    const getTotalProducts = () => {
        let count = tbody.getElementsByTagName('tr').length;
        totalProducts.innerHTML = count;
    }

    function createRowColumn(row) {
        let column = document.createElement("td");
        row.appendChild(column);
        return column;
    }
      
    function addRow(code, name, color, weight) {
        let newrow = document.createElement("tr");
        let codeColumn = createRowColumn(newrow);
        let nameColumn = createRowColumn(newrow);
        let colorColumn = createRowColumn(newrow);
        let weightColumn = createRowColumn(newrow);
        let actionsColumn = createRowColumn(newrow);
    
        let codeBox = document.createElement("div");
        codeBox.setAttribute('class', 'align-middle')
        codeBox.innerHTML = code;
        codeColumn.appendChild(codeBox);
    
        let nameBox = document.createElement("div");
        nameBox.innerHTML = name;
        nameColumn.appendChild(nameBox);

        let colorBox = document.createElement("div");
        colorBox.innerHTML = color;
        colorColumn.appendChild(colorBox);
    
        let weightBox = document.createElement("div");
        weightBox.innerHTML = weight;
        weightColumn.appendChild(weightBox);

        let actionsBox = document.createElement("td");
        actionsBox.setAttribute('class', "actions");
        let editBox = document.createElement("icon");
        let deleteBox = document.createElement("icon");
        let addBox = document.createElement("icon");
        editBox.setAttribute('class', "material-icons edit-product c-blue cursor-pointer");
        deleteBox.setAttribute('class', "material-icons ml-4 remove-product c-red cursor-pointer");
        addBox.setAttribute('class', "d-none material-icons add-product c-green cursor-pointer");
        editBox.innerHTML='edit';
        deleteBox.innerHTML='delete';
        addBox.innerHTML='add';
        actionsBox.appendChild(editBox);
        actionsBox.appendChild(deleteBox);
        actionsBox.appendChild(addBox);
        actionsColumn.appendChild(actionsBox);
        
        tbody.appendChild(newrow);
    }

    btnCreate.addEventListener("click", (e) => {
        e.preventDefault();
        addRow(productCode.value, productName.value, productWeight.value, productColor.value);
        getTotalProducts();
        form.reset()
    });

    $(document).on('click', '.remove-product', function () {
        $(this).closest('tr').remove();
        getTotalProducts();
    });

    $(document).on("click", ".add-product", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".remove-product").removeClass('d-none');
            $(this).parents("tr").find(".edit-product").removeClass('d-none');
            $(this).parents("tr").find(".add-product").addClass('d-none');
		}		
    });

    $(document).on("click", ".edit-product", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".remove-product").addClass('d-none');
        $(this).parents("tr").find(".edit-product").addClass('d-none');
        $(this).parents("tr").find(".add-product").removeClass('d-none');
    });

});

