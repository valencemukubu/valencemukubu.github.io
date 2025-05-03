// TODO Fetch data from the PortgreSQL database(to be implemented later)
Function fetchGradebook() {
      // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
}
// TODO: Populate the table with grade data
function populateGradebook(data) {
  console.log("Populating gradebook with data:", data);
}
// TODO REMOVE THIS
// Call the stubs to demonstrate the workfloww
const gradeData = fetchGradeData();
populateGradebook(gradeData)
//END Remove
function fetchGradeData() {
  // This function will query the postgreSQL database and return grade data
  console.log("Fetching grade data...");
  // Create a new request for HTTP data
  let xhr = new XMLHttpRequest();
  // This is the address on the machine we're asking for data
  let apiRoute = "/api/grades";
  // when the request changes status, we run this anonymous function
  xhr.onreadystatechange = function(){
      let results;
      // Check if we're done
      if(xhr.readyState === xhr.Done){
          // Check if we're successful
          if(xhr.status !== 200){
              console.error('Could not get grades.'
                 'status: ${xhr status');
          }
          // And then call the function ti update the HTML with our data
          populateGradebook(JSON.parse(xhr.responseText));
      }
  }.bind(this);
  xhr.open("get", apiRoute, true);
  xhr.send();
}
