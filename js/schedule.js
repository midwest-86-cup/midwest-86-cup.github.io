
function renderSchedule(tabletop, sheet, id) {

  var t = "<table class='nice-table'><thead>";
  t += "<th width='20'></th>";
  t += "<th width='50'>Date</th>";
  t += "<th width='200'>Track</th>";
  t += "<th>Conf</th>";
  t += "<th>Organizer</th>";
  t += "<th></th>";
  t += "<th width='100'></th>";
  t += "</thead><tbody>";

  var round = 1;

  tabletop.sheets(sheet).all().forEach(function(row){

     t += "<tr>"

     var r = "";

     if (row['Organizer']) {
       r = round;
       round ++;
     }

     t += "<td class='schedule-table-index-column'>R " + r + ".</td>";
     t += "<td class='schedule-table-date-column'>" + row['Date'] + "</td>";
     t += "<td class='schedule-table-event-column'><strong>" + row['Track'] + "</strong></td>";

     if (row['Organizer']) {
      t += "<td class='schedule-table-conf-column'>" + row['Configuration'] + "</td>";
      t += "<td class='schedule-table-organizer-column'><a href='" + row['OrganizerWebsite'] + "'>" + row['Organizer'] + "</a></td>";
      // t += "<td><a href='" + row['OrganizerWebsite'] + "'>Register</a></td>";
      t += "<td>" + row['Comments'] + "</td>";
     }
    else if (row['Track']) {
      t += "<td/><td/><td/><td/>";
    }

     t += "</tr>";
   });

  t += "</tbody></table>";

  $(id).html(t);
}

function getSchedule() {
  Tabletop.init( { key: '1wniNNQdwP0urUIbkAT9QNjx_qZqmS30VgkzdQScDq3U',
                   callback: renderAllSchedules } )

}

function renderAllSchedules(rows, tabletop) {
  renderSchedule(tabletop, '2017 SoCal', '#socal-schedule-table');
  renderSchedule(tabletop, 'NorCal', '#norcal-schedule-table');
}

getSchedule();
