$(document).ready(function () {

  const startDateField = $('#start-date');
  const endDateField = $('#end-date');

  let startDate = 0;
  let endDate = 0;

  startDateField.on('blur', getStartDateVal);
  endDateField.on('blur', getEndDateVal);

  (function () {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = `mm + '-' + dd + '/' + yyyy`;
    today = `${yyyy}-${mm}-${dd}`;

    startDateField.attr('min', today)
    endDateField.attr('min', today)
  })()

  function getStartDateVal() {
    startDate = this.value;
    checkDate();
  }

  function getEndDateVal() {
    endDate = this.value;
    checkDate();
  }

  function checkDate() {
    if (startDate != 0 && startDate > endDate) {
      alert("The return date is earlier than the departure date.");
    }
  }

})

