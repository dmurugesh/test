//OR and AND operator

if (inStock == true) {
    if (onSale == true) {
        alert("buy buy buy!");
    }
}

// using or operator
if (inStock == true && onSale == true) {
        alert("buy buy buy!");
}

//Combineing boolean operators 

if (inStock == true && (onSale == true || price < 60)) {
    alert("buy buy buy!");
}
