import * as utils from './kickoutScenarios';

const localStorageMock = (() => {
  let store = {};
  let key = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
      key = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
    key: key
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,configurable:true,enumerable:true,writable:true
});

const getStarted = {
    PostalCode: "h2h2h2",
    LineType: "Auto",
    AgentNumber: "",
    CampaignCode: "",
    ClientBrowserDetails: {SupportCookies: true},
    DiscountCode: "",
    DriverCount: "1",
    btnGrpnoOfDrivers: "1",
    LineType: "Auto",
    MobileFlow: false,
    PostalCode: "h2h2h2",
    QuoteId: "1103233",
    UnitCode: "",
    VehicleCount: "1",
    btnGrpnoOfVehicles: "1"
}

const driverInformation = [{
    FirstName: "Mohan",
    EmailAddress: "mohan@all.com",
    PhoneNumber: "1234567890",
    DOB: "1987-01-01",
    Gender: "1",
    MaritalStatus: "1",
    YearsLicensed: "5",
    btnGrpMajorCriminalViolInd: "0",
    MinorConviction: "0",
    btnGrpNoOfMinorConviction: "0",
    NoOfMinorConviction: "0",
    CollisionsOrClaims: "1",
    NoOfCollisionsOrClaims: "2",
    btnGrpNoOfAccidentsOrClaims:"2",
    ClaimDetails:[{
        ClaimType: "9",
        ClaimDate: "2020-11-04",
        id: 0.53397028645145,
        isReseted: false
       }, {
        ClaimType: "11",
        ClaimDate: "2017-02-12",
        id:0.1673805086154192,
        isReseted: false
       }, {
           ClaimType: "11",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
      }, {
           ClaimType: "11",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
      }, {
          ClaimType: "9",
          ClaimDate: "2017-02-12",
          id:0.1673805086154192,
          isReseted: false
      }
    ]
}]

const validatePostalCode = [{
    postalCode: "h2h2h2",
    provinceID: 10,
    provinceCode: "PQ",
    city: "MONTREAL",
    areaCode: 514,
    territoryCode: "804",
    allstateTerritoryCode: "883",
    fireHydrantTerritoryCode: "811",
    fireHallTerritoryCode: null,
    unprotectedTerritoryCode: null,
    zoneCode: "1",
    townClassCodeOne: "1",
    townClassCodeTwo: "1",
    earthQuakeZone: null,
    sewerBackupZone:"1"
}]

describe('bootstrap', () => {
    beforeEach(() => {
        window.sessionStorage.clear();
        window.sessionStorage.setItem('GetStartedPage', JSON.stringify({ DriverCount: 1}));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'AB'}]));
        jest.restoreAllMocks();
    })
    it('should return false for getstarted if vehicles and driver are less than 3', () => {
        const formData = {
            btnGrpnoOfVehicles: 2,
            btnGrpnoOfDrivers: 2,
            YearsLicensed: 0
        }
        const result = utils.validateKickoutScenarios(formData, '/getstarted');
        expect(result).toBe(false);
    });
    it('should return true for getstarted if vehicles is greater than 3', () => {
        let formData = getStarted;
        formData.btnGrpnoOfVehicles = 4;
        formData.btnGrpnoOfDrivers = 2,
        formData.YearsLicensed = 0;
        const result = utils.validateKickoutScenarios(formData, '/getstarted');
        expect(result).toBe(true);
    });
    it('should return true for getstarted if drivers is greater than 3', () => {
        let formData = getStarted;
        formData.btnGrpnoOfVehicles = 2;
        formData.btnGrpnoOfDrivers = 4,
        formData.YearsLicensed = 0;
        const result = utils.validateKickoutScenarios(formData, '/getstarted');
        expect(result).toBe(true);
    });
    it('should return true for driverinformation if YearsLicensed is equal to zero', () => {
        const formData = driverInformation;
        formData.YearsLicensed = 0;
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        expect(result).toBe(true);
    });
    it('should return true for driverinformation if btnGrpMajorCriminalViolInd is equal to 1', () => {
        const formData = driverInformation[0];
        formData.btnGrpMajorCriminalViolInd = 1;
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('3');
    });
    it('should return true for driverinformation if btnGrpNoOfMinorConviction is equal to 5', () => {
        const formData = driverInformation[0];
        formData.btnGrpNoOfMinorConviction = 5;
        formData.btnGrpMajorCriminalViolInd = 0;
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('4');
    });
    it('should return true for driverinformation if btnGrpNoOfAccidentsOrClaims is equal to 5', () => {
        const formData = driverInformation[0];
        formData.btnGrpNoOfAccidentsOrClaims = 5;
        formData.btnGrpNoOfMinorConviction = 0;
        formData.btnGrpMajorCriminalViolInd = 0;
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('5');
    });
    it('should return false for all condition is not satisifed', () => {
        const formData = driverInformation[0];
        formData.btnGrpNoOfAccidentsOrClaims = 0;
        formData.btnGrpNoOfMinorConviction = 0;
        formData.btnGrpMajorCriminalViolInd = 0;
        formData.btnGrpcollisions = 0;
        formData.YearsLicensed = 1;
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        expect(result).toBe(false);
    });
    it('should return false for the kickoutprovinces for PQ', () => {
        const formData = driverInformation;
        formData.btnGrpNoOfAccidentsOrClaims = 0;
        formData.btnGrpNoOfMinorConviction = 0;
        formData.btnGrpMajorCriminalViolInd = 0;
        formData.btnGrpcollisions = 0;
        formData.YearsLicensed = 1;
        formData.ClaimDetails = [{
           ClaimType: "11",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "11",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }];
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'PQ'}]));
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        expect(result).toBe(false);
    });
    it('should return true for the kickoutprovinces for PQ', () => {
        const formData = driverInformation;
        formData.btnGrpcollisions = '1';
        formData.ClaimDetails = [{
           ClaimType: "11",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "11",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }];
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'PQ'}]));
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        expect(result).toBe(true);
    });
    it('should return false for the kickoutprovinces for AB', () => {
        const formData = driverInformation;
        formData.btnGrpcollisions = '1';
        formData.ClaimDetails = [{
           ClaimType: "11",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "11",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }];
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'AB'}]));
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        expect(result).toBe(true);
    });
    it('should return false for the kickoutprovinces for AB', () => {
        const formData = driverInformation;
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'AB'}]));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('12');
    });
    it('should return true for ClaimType more 2', () => {
        const formData = driverInformation[0];
        formData.btnGrpNoOfAccidentsOrClaims = 0;
        formData.btnGrpNoOfMinorConviction = 0;
        formData.btnGrpMajorCriminalViolInd = 0;
        formData.ClaimDetails = [{
           ClaimType: "8",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "8",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }, {
           ClaimType: "8",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }]
        const result = utils.validateKickoutScenarios(formData, '/driverinformation');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('7');
    });
    it('should return false for the kickoutprovinces for AB', () => {
        const formData = driverInformation;
        formData[0].ClaimDetails = [{
           ClaimType: "8",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "9",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }, {
           ClaimType: "11",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }];
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'AB'}]));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        expect(result).toBe(false);
    });
    it('should return true for the kickoutprovinces for AB', () => {
        const formData = driverInformation;
        formData[0].ClaimDetails = [{
           ClaimType: "8",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "8",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }, {
           ClaimType: "8",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
          ClaimType: "8",
          ClaimDate: "2020-11-04",
          id: 0.53397028645145,
          isReseted: false
        }, {
         ClaimType: "8",
         ClaimDate: "2020-11-04",
         id: 0.53397028645145,
         isReseted: false
        }];
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'AB'}]));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('10');
    });
    it('should return true for the kickoutprovinces for AB', () => {
        const formData = driverInformation;
        formData[0].ClaimDetails = [{
           ClaimType: "8",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }, {
           ClaimType: "8",
           ClaimDate: "2017-02-12",
           id:0.1673805086154192,
           isReseted: false
        }, {
           ClaimType: "8",
           ClaimDate: "2020-11-04",
           id: 0.53397028645145,
           isReseted: false
        }];
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'AB'}]));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('11');
    });
    it('should return true for the YearsLicensed is zero if ProvinceCode is ON', () => {
        const formData = [{
           id: '1',
           YearsLicensed: 0,
           ClaimDetails: []
        }];
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'ON'}]));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        expect(result).toBe(true);
    });
//    it('should return true for the YearsLicensed is zero if ProvinceCode is PQ', () => {
//        const formData = [{
//           id: '1',
//           YearsLicensed: 0,
//           ClaimDetails: []
//        }];
//        //    utils.validateKickoutScenarios = jest.fn().mockReturnValue(false);
//        //    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
//        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
//        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'PQ'}]));
//        const result = utils.validateKickoutScenarios({}, '/primarydriver');
//        expect(result).toBe(false);
//    });
    it('should mock utils.add method correctly', () => {
        const formData = driverInformation;
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        expect(result).toBe(true);
    });
    it('should return false for the kickoutprovinces for PQ', () => {
        const formData = driverInformation;
        formData[0].NoOfMinorConviction = '5';
        window.sessionStorage.setItem('DriverDetailsPage', JSON.stringify(formData));
        window.sessionStorage.setItem('ValidatePostalCode', JSON.stringify([{ provinceCode: 'PQ'}]));
        const result = utils.validateKickoutScenarios({}, '/primarydriver');
        const sessionStorage = window.sessionStorage.getItem('KickoutErrorCode');
        expect(result).toBe(true);
        expect(sessionStorage).toBe('9');
    });
});