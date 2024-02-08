const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  };
  
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(returnFirstTwoDrivers(drivers));
  console.log(returnLastTwoDrivers(drivers)); 
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
  }
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
  
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10));
  
  const fareTripler = createFareMultiplier(3);
  console.log(fareTripler(10));