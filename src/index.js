import {months, cardinals} from 'consts'

const convert=(date, refDate)=>{
    if(typeof(date)!="object"){throw "invalid date, required object"}
    const dayString = getDateCardinal(date.getDate())

    if(refDate==null){
       refDate = new Date();
    }
    if(typeof(refDate)!="object"){throw "invalid date, required object"}

    if(refDate.getUTCFullYear==date.getUTCFullYear){
        //same year
        if(refDate.getMonth()==date.getMonth()){
            //same month

            if(refDate.getDate()==date.getDate()){
                //same day
                return getRelativeTimeDifference(date);

            }else{
                //show day diff
                return Math.abs(refDate.getDate()-date.getDate())+ " days ago"
            }
        }else{
            //show month differnece
            return Math.abs(refDate.getMonth()-date.getMonth())+ " months ago"
        }

    }else{
        //say a (count) years ago
        return Math.abs(refDate.getUTCFullYear()-date.getUTCFullYear())+ " years ago"
    }

}

const getDateCardinal=(n)=>{
    const r = n%100;
    const cardinals =["th","st","nd","rd"]
    return n+ cardinals[(r-20)%10] || cardinals[v] || cardinals[0]
}


const  getRelativeTimeDifference=(date, currentTime)=>{

    if(currentTime.getHours()-date.getHours()<5){
        //chech if its same hour
        if(currentTime.getHours()-date.getHours()==0){
            //same hour, show mins diff

            if(currentTime.getMinutes()-date.getMinutes()<5){
                //check if in same min
                if(currentTime.getMinutes()-date.getMinutes()==0){
                    return "a few seconds ago";
                }
                else{
                    return "a few mins ago";
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

const GetTime=(date)=>{
    let ampm="am";
    let hour= date.getHours();

    if(date.getHours()>=12){
        if(date.getHours()>12){
            hour=date.getHours()-12;
        }
        ampm="pm";
    }

    return hour+":"+date.getMinutes()+" "+ampm;

}


module.exports = convert;
