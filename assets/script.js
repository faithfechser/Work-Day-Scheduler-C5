$(function () {
    // Save button click event
    $(".saveBtn").on("click", function () {
      var timeBlock = $(this).parent();
      var timeBlockId = timeBlock.attr("id");
      var description = timeBlock.find(".description").val();
      localStorage.setItem(timeBlockId, description);
    });
    // PPF Color Function
    function colorUpdate() {
      var currentHour = dayjs().hour();
      $(".time-block").each(function () {
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
        if (timeBlockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
    // Local Storage Function
    function loadSave() {
      $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var savedSchedule = localStorage.getItem(timeBlockId);
  
        if (savedSchedule) {
          $(this).find(".description").val(savedSchedule);
        }
      });
    }
    // Display Current Date
    var currentDay = $("#currentDay");
    currentDay.text(dayjs().format("dddd, MMMM D, YYYY"));
    // Function Calls
    colorUpdate();
    loadSave();
  });
  
  