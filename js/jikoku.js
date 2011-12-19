function getJikoku(busnumber){

	var weekday = new Array(1516,1524,1531,1543,1556,1608,1613,1625,1638,1650,1710,1723,1735,1748,1755,1808,1820,1840,1847,1907,1920,1930,1940,1950,2000,2010,2020,2030,2040,2050,2100,2115,2130,2150,2210,2230,2250,2315);
	var saturday = new Array();
	var sunday = new Array();
	var ndate = new Date();
	var params;
	
	
	params = weekday[0];

	for(i = 0; i < weekday.length;i++){
  		if(ndate.getHours()*100 + ndate.getMinutes() > weekday[i]){
  			if(i+1+busnumber<weekday.length){
    			params = weekday[i+1+busnumber];
    		}else{
				params = "なし";
			}
  		}
	}
	params = String(params);
	if(params.length==4){
		params = params.substring(0,2)+":"+params.substring(2,4);
	}
	return params;
}
