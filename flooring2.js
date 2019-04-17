function myTotal(document){
    var firstname = orderForm.firstName.value;
    var lastname = orderForm.lastName.value;
    var address = orderForm.address.value;
    var nameonCard = orderForm.cc_name.value;
    var cardNum = orderForm.cc_number.value;
    var expDate = orderForm.cc_expiration.value;
    var cardCVV = orderForm.cc_cvv.value;
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
        tilesize = orderForm.size_select[0].id;
        tileconversion = 1;
        numtiles = Math.ceil(area/144);
    }
    else if(orderForm.size_select[1].checked==true){
        tilesize = orderForm.size_select[1].id;
        tileconversion = (16/12) * (16/12);
        numtiles = Math.ceil(area/256);
    }
    else if(orderForm.size_select[2].checked==true){
        tilesize = orderForm.size_select[2].id;
        tileconversion = (8/12);
        numtiles = Math.ceil(area/96);
    }
    else{
        tilesize = orderForm.size_select[3].id;
        tileconversion = (24/12);
        numtiles = Math.ceil(area/288);
    }


    if(orderForm.type_select[0].checked==true){
        tiletype = orderForm.type_select[0].id;
        tileprice = 16.00 * tileconversion.toFixed(2);
    }
    else if(orderForm.type_select[1].checked==true){
        tiletype = orderForm.type_select[1].id;
        tileprice = 8.00 * tileconversion.toFixed(2);
    }
    else if(orderForm.type_select[2].checked==true){
        tiletype = orderForm.type_select[2].id;
        tileprice = 20.00 * tileconversion.toFixed(2);
    }
    else if(orderForm.type_select[2].checked==true){
        tiletype = orderForm.type_select[3].id;
        tileprice = 4.00 * tileconversion.toFixed(2);
    }
    else{
        tiletype = orderForm.type_select[4].id;
        tileprice = 12.00 * tileconversion.toFixed(2);
    }

    price = (tileprice * numtiles);
    price = price * (1+taxrate);
    price = price.toFixed(2);

    order+="First Name: " + firstname + "\n";
    order+="Last Name: " + lastname + "\n";
    order+="Address: " + address + "\n";
    order+="Name on Card: " + nameonCard + "\n";
    order+="Card Number: " + cardNum + "\n";
    order+="Card Expiration Date: " + expDate + "\n";
    order+="Card CVV: " + cardCVV + "\n";
    order+="\n";   
    order+="Width: " + width + " ft" + "\n";
	order+="Length: " + length + " ft" + "\n";
	order+="Area: " + (width*length) + " ft^2" + "\n";
	order+="Tile Size: " + tilesize + "\n";
    order+="Tile Type: " + tiletype + "\n";
    order+="Tile Price: $" + tileprice + "\n";
    order+="Number of Tiles: " + numtiles;
    order+="\n\n"
    order+="Total Price: $" + price;

	orderConfirm.order_text.value=order;

}