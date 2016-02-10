/*
	Author: Gaurav Kushwaha
	Web: gauravkushwaha.net
	
The MIT License (MIT)
Copyright (c) 2016, Gaurav Kushwaha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	
*/
var DateFormater  =new function(){
	this.Convert= function(date){
		var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
			var today = new Date();
			var datestr = date.getDate();
			debugger;
			
			switch(datestr){
			case 1: datestr=datestr+"st";
			break;
			case 2: datestr=datestr+"nd";
			break;
			case 3: datestr=datestr+"rd";
			break;
			default:datestr= datestr+"th";
			break;
			}

			if(today.getYear()==date.getYear()){
				if(today.getMonth()== date.getMonth()){
					if(today.getDate()-1==date.getDate()){
						return "yesterday, "+GetTime(date);
					}
					else if (today.getDate()==date.getDate()){
						return GetContextualTimeDifference(date);
					}
					else{
						return monthNames[date.getMonth()]+","+datestr;
					}

				}else{
					return monthNames[date.getMonth()]+","+datestr;
				}
			}else{
				return date.getFullYear()+","+monthNames[date.getMonth()]
			}
	}
	var GetContextualTimeDifference=function(date){
	
	var currentTime= new Date();
	if(currentTime.getHours()-date.getHours()<5){
	
		//chech if its same hour
		if(currentTime.getHours()-date.getHours()==0){
			//same hour, show mins diff


			if(currentTime.getMinutes()-date.getMinutes()<5){
				//check if in same min 
				if(currentTime.getMinutes()-date.getMinutes()==0){
					return "few seconds ago";
				}
				else{
				return "few mins ago";
				}
			}else{
				return currentTime.getMinutes()-date.getMinutes()+" mins ago";
			}


		}else{
			//not same hour

		return date.getHours()-currentTime.getHours()+" hours ago";
	

		}

	}else{
		return GetTime(date);
	}


}

var GetTime=function(date){
		var ampm="";
		var hour="";
		if(date.getHours()>=12){
			if(date.getHours()>12){
				hour=date.getHours()-12;
			}else{
				hour=date.getHours();
			}
		     ampm="pm";
		}else{		
			ampm="am";

				hour=date.getHours();
		}

		return hour+":"+date.getMinutes()+" "+ampm;

	}

};

