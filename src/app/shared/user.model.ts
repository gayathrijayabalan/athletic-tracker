export interface User {
    id: string;
 profile:string;
    fullName: string;
    designation: string;
    email: string;
    phone: string;
    dob: string;
    class: string;
    age: string;
    yearofadmin: string;
    bloodgroup: string;
    height: string;
    weight: string;
    
}
export interface Events{
    id:string;
    eventname:string;
    eventdate:any;
    eventcity:string;
    eventcountry:string;
    athleteAttendings:string;
    medalswon:string;
    
}
export interface Addschedule {
    id: string; 
    ExerciseName: string;
    Date: string;
   
    Distance: string;
    Rest:string;
    Notes:string;
    Tag1: string;
    Tag2: string;
    Tag3: string;
    Tag4: string;
    Tag5: string;
    Tag6: string;
    Tag7: string;
    Tag8: string;
    Tag9: string;
    Tag10: string;
    athletename1:string;
    athletename2:string;
    Athlete1:string;
    
}
export class Issue {
    id: number;
    title: string;
    state: string;
    url: string;
    created_at: string;
    updated_at: string;
  }
export interface Workout{
    id:string;
    Athlete:string;
    Date:string;
    Workout1:string;
    Workout2:string;
    Workout3:string;
    Workout4:string;
    Workout5:string;
    Workout6:string;
    Workout7:string;
    Workout8:string;
    Workout9:string;
    Workout10:string;
}
export interface Studentbyathlete{
    id:string;
    heartbeatrate:string;
    injure:string;
    rest:string;
    notes:string;
    timing:string;
}
