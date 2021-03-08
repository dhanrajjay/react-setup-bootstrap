import { ROUTES, SessionName } from "./constant";

export const validateKickoutScenarios = (formData, pageName) =>{
    if(pageName == ROUTES.getstartedpage){//Getstarted page
        if(parseInt(formData.btnGrpnoOfVehicles) > 3){//1   Number of vehicles
            sessionStorage.setItem(SessionName.KickoutErrorCode, '1');
            return true;
        }
        else if(parseInt(formData.btnGrpnoOfDrivers) > 3){//2 Number of drivers
            sessionStorage.setItem(SessionName.KickoutErrorCode, '2');
            return true;
        }
    }
    else if(pageName == ROUTES.driverinformation){//Driver information page
        if(parseInt(formData.btnGrpMajorCriminalViolInd) == 1){//3  Major/criminal conviction
            sessionStorage.setItem(SessionName.KickoutErrorCode, '3');
            return true;
        }
        else if(parseInt(formData.btnGrpNoOfMinorConviction) == 5){//4  Number of minor conviction by a driver
            sessionStorage.setItem(SessionName.KickoutErrorCode, '4');
            return true;
        }
        else if(parseInt(formData.btnGrpNoOfAccidentsOrClaims) == 5){//5 Number of claims by a driver
            sessionStorage.setItem(SessionName.KickoutErrorCode, '5');
            return true;
        }
        else if(JSON.parse(sessionStorage.getItem('GetStartedPage')).DriverCount == "1" && parseInt(formData.YearsLicensed) == 0){//15 Years insured equals 0
            sessionStorage.setItem(SessionName.KickoutErrorCode, '15');
            return true;
        }
        else if(formData.ClaimDetails.filter(({ClaimType}) => ClaimType =="8").length > 2 ){//7 Number of at fault claims by a driver
            sessionStorage.setItem(SessionName.KickoutErrorCode, '7');
            return true;
        }
    }
    else if(pageName == ROUTES.primarydriver){ //Driver allocation page
        let driverobject = JSON.parse(sessionStorage.getItem('DriverDetailsPage'));
        let initValue;
        if(driverobject.reduce((x, curValue) => x + parseInt(curValue.NoOfMinorConviction), initValue=0) > 4 ){//9  Number of minor convictions on a vehicle
            sessionStorage.setItem(SessionName.KickoutErrorCode, '9');
            return true;
        }
        else if(driverobject.reduce((totalclaims, obj)=>  totalclaims + obj.ClaimDetails.filter(({ClaimType}) => ClaimType =="11").length,initValue=0) > 1 ){//12   Number of theft claims on a vehicle
            sessionStorage.setItem(SessionName.KickoutErrorCode, '12');
            return true;
        }
    }
    //Check the province level kickout scenerios.
    return validateKickoutScenariosProviences(formData, pageName);
  };

const validateKickoutScenariosProviences = (formData, pageName) =>{
    let provinceCode = JSON.parse(sessionStorage.getItem('ValidatePostalCode'))[0].provinceCode;
    let inValidInput = false;
    if(pageName == ROUTES.driverinformation){
        switch (provinceCode) {
            case 'PQ':
            case 'AB':
                if(formData.btnGrpcollisions == '1' &&
                    (formData.ClaimDetails.filter(({ClaimType}) => ClaimType =="11").length > 1 )){//8  Number of theft claims by a driver
                        sessionStorage.setItem(SessionName.KickoutErrorCode, '8');
                        inValidInput = true;
                }
            break;
            default: break;
        }
    }
    else if(pageName == ROUTES.primarydriver){
         let driverobject = sessionStorage.getItem('DriverDetailsPage') ? JSON.parse(sessionStorage.getItem('DriverDetailsPage')) : null;
        switch (provinceCode) {
            case 'PQ':
            case 'AB':
                let initValue;
                if(driverobject.reduce((totalclaims, obj)=> totalclaims + obj.ClaimDetails.length, initValue=0) > 4 ){//10  Number of claims on a vehicle
                    sessionStorage.setItem(SessionName.KickoutErrorCode, '10');
                    inValidInput = true;
                }
                else if(driverobject.reduce((totalclaims, obj)=> totalclaims + obj.ClaimDetails.filter(({ClaimType}) => ClaimType =="8").length,initValue=0) > 2){// 11 Number of at fault claims on a vehicle
                    sessionStorage.setItem(SessionName.KickoutErrorCode, '11');
                    inValidInput = true;
                }
            break;
            case 'PQ':
            case 'ON':
                    if(driverobject.filter(obj => obj.id =='1' && parseInt(obj.YearsLicensed) == 0).length > 0 ){//15 Years insured equals 0
                        sessionStorage.setItem(SessionName.KickoutErrorCode, '15');
                        inValidInput = true;
                    }
                break;
            default: break;
        }
    }


    return inValidInput;
};

//export const validateKickoutScenarios = (formData, pageName) =>{
//    if(pageName == ROUTES.getstartedpage && (parseInt(formData.btnGrpnoOfVehicles) > 3 || parseInt(formData.btnGrpnoOfDrivers) > 3)) //Getstarted page
//      return true;
//    else if(pageName == ROUTES.driverinformation){ //Driver information page
//        //console.log('driverdetails', formData)
//        if(parseInt(formData.btnGrpMajorCriminalViolInd) == 1 || 
//        parseInt(formData.btnGrpNoOfMinorConviction) == 5 ||
//        parseInt(formData.btnGrpNoOfAccidentsOrClaims) == 5 || 
//        (JSON.parse(sessionStorage.getItem('GetStartedPage')).DriverCount == "1" && parseInt(formData.YearsLicensed) == 0) ||
//        (formData.btnGrpcollisions == '1' && 
//        (formData.ClaimDetails.filter(({ClaimType}) => ClaimType =="8").length > 2 ))){//At Fault
//          return true;
//      }
//      else if(pageName == ROUTES.primarydriver){ //Driver allocation page
//        let driverobject = JSON.parse(sessionStorage.getItem('DriverDetailsPage'));
//        if(driverobject.reduce((x, curValue) => x + parseInt(curValue.NoOfMinorConviction), initValue=0) > 4 || //Minor conviction  
//        driverobject.reduce((totalclaims, obj)=>  totalclaims + obj.ClaimDetails.filter(({ClaimType}) => ClaimType =="11").length,initValue=0) > 1 // Total Theft 
//        )
//        return true;
//      }
//    }
//    //Check the province level kickout scenerios.
//    return validateKickoutScenariosProviences(formData, pageName);
//  };
//  
//const validateKickoutScenariosProviences = (formData, pageName) =>{
//    let provinceCode = JSON.parse(sessionStorage.getItem('ValidatePostalCode')).provinceCode;   
//    let inValidInput = false;
//    if(pageName == ROUTES.driverinformation){    
//        switch (provinceCode) {
//            case 'PQ':
//            case 'AB':
//                if(formData.btnGrpcollisions == '1' && 
//                    (formData.ClaimDetails.filter(({ClaimType}) => ClaimType =="11").length > 1 )){//Total Theft
//                        inValidInput = true;
//                }
//            break;
//            default: break;
//        }           
//    } 
//    else if(pageName == ROUTES.primarydriver){    
//         let driverobject = sessionStorage.getItem('DriverDetailsPage') ? JSON.parse(sessionStorage.getItem('DriverDetailsPage')) : null;
//        switch (provinceCode) {
//            case 'PQ':
//            case 'AB':
//                let initValue;
//                if(driverobject.reduce((totalclaims, obj)=> totalclaims + obj.ClaimDetails.length, initValue=0) > 4 || //all claims     
//                driverobject.reduce((totalclaims, obj)=> totalclaims + obj.ClaimDetails.filter(({ClaimType}) => ClaimType =="8").length,initValue=0) > 2){ // At Fault Collision 
//                   inValidInput = true;
//                }
//            break;
//            case 'PQ':
//            case 'ON':
//                    if(driverobject.filter(obj => obj.id =='1' && parseInt(obj.YearsLicensed) == 0).length > 0 ){ //Primary Driver years licensed = 0
//                        inValidInput = true;
//                    }
//                break;
//            default: break;
//        }           
//    } 
//
//    
//    return inValidInput;
//};