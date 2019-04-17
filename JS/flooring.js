function myTotal(document){
	var width = orderForm.width_text.value;
    var length = orderForm.length_text.value;
    var price;
    var numtiles;
    var tiletype;
    var tilesize;
    var tileprice;
    var tileconversion;
    var taxrate = 0.088;
    var area=(width*12)*(length*12);
    var order="";
    if(orderForm.size_select[0].checked==true){
        tilesize = orderForm.size_select[0].value;
        tileconversion = 1;
        numtiles = Math.ceil(area/144);
    }
    else if(orderForm.size_select[1].checked==true){
        tilesize = orderForm.size_select[1].value;
        tileconversion = (16/12) * (16/12);
        numtiles = Math.ceil(area/256);
    }
    else if(orderForm.size_select[2].checked==true){
        tilesize = orderForm.size_select[2].value;
        tileconversion = (8/12);
        numtiles = Math.ceil(area/96);
    }
    else{
        tilesize = orderForm.size_select[3].value;
        tileconversion = (24/12);
        numtiles = Math.ceil(area/288);
    }


    if(orderForm.type_select[0].checked==true){
        tiletype = orderForm.type_select[0].for;
        tileprice = 16.00 * tileconversion.toFixed(2);
    }
    else if(orderForm.type_select[1].checked==true){
        tiletype = orderForm.type_select[1].for;
        tileprice = 8.00 * tileconversion.toFixed(2);
    }
    else if(orderForm.type_select[2].checked==true){
        tiletype = orderForm.type_select[2].for;
        tileprice = 20.00 * tileconversion.toFixed(2);
    }
    else if(orderForm.type_select[2].checked==true){
        tiletype = orderForm.type_select[3].for;
        tileprice = 4.00 * tileconversion.toFixed(2);
    }
    else{
        tiletype = orderForm.type_select[4].for;
        tileprice = 12.00 * tileconversion.toFixed(2);
    }

    price = (tileprice * numtiles);
    price = price * (1+taxrate);
    price = price.toFixed(2);

	order+="Width: " + width + " ft";
	order+="\n";
	order+="Length: " + length + " ft";
	order+="\n";
	order+="Area: " + (width*length) + " ft^2";
	order+="\n";
	order+="Tile Size: " + tilesize;
	order+="\n";
    order+="Tile Type: " + tiletype;
    order+="\n";
    order+="Tile Price: $" + tileprice;
    order+="\n";
    order+="Number of Tiles: " + numtiles;
    order+="\n\n"
    order+="Total Price: $" + price;

	orderConfirm.order_text.value=order;

}