
/*eslint-disable*/
{
    let user = {
        name: "John Smith",
        age: 35
      };
      
      let user2 = JSON.parse(JSON.stringify(user));


      let room = {
        number: 23
      };
      
      let meetup = {
        title: "Conference",
        occupiedBy: [{name: "John"}, {name: "Alice"}],
        place: room
      };
      
      room.occupiedBy = meetup;
      meetup.self = meetup;
      
      console.log( JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
      }));
      
      /*
      {
        "title":"Conference",
        "occupiedBy":[{"name":"John"},{"name":"Alice"}],
        "place":{"number":23}
      }
      */


}

function log() {
  console.log("No Arguments");
  }
  function log(x) {
  console.log("1 Argument: " + x);
  }
  function log(x, y) {
  console.log("2 Arguments: " + x + ", " + y);
  }
  log();
  log(5);
  log(6, 7);
  