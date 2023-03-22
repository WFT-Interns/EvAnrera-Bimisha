window.onload = function(){
    var selectedVehcileType = localStorage.getItem('vehicleType');
    if (selectedVehcileType == null){
        selectedVehcileType = 'car';
    }
    showFilter(selectedVehcileType);
}
showFilter = function(selectedVehcileType){
    localStorage.setItem('vehicleType', selectedVehcileType);
    var vehicleElements = document.getElementsByClassName('vehicleType');
    var vehicleRangeElements = document.getElementsByClassName('vehicleRange');
    for(let vehicleTypeElement of vehicleElements){
        if(vehicleTypeElement.id == 'cars-brand' && selectedVehcileType == 'car'){
            vehicleTypeElement.style.display = 'block';
        }
        else if(vehicleTypeElement.id == 'bike-brand' && selectedVehcileType == 'bike'){
            vehicleTypeElement.style.display = 'block';
        }
        else if(vehicleTypeElement.id == 'scooter-brand' && selectedVehcileType == 'scooter'){
            vehicleTypeElement.style.display = 'block';
        }
        else{
            vehicleTypeElement.style.display = 'none';
        }
    }
    for(let vehicleRangeElement of vehicleRangeElements){
        if(vehicleRangeElement.id == 'cars-Range' && selectedVehcileType == 'car'){
            vehicleRangeElement.style.display = 'block';
        }
        else if(vehicleRangeElement.id == 'bike-Range' && selectedVehcileType == 'bike'){
            vehicleRangeElement.style.display = 'block';
        }
        else if(vehicleRangeElement.id == 'scooter-Range' && selectedVehcileType == 'scooter'){
            vehicleRangeElement.style.display = 'block';
        }
        else{
            vehicleRangeElement.style.display = 'none';
        }
    }
}