$(document).ready(function(){
  socket = new WebSocket("ws://" + window.location.host + "/chat" + window.location.pathname);
  var name = "";

  swal({
    title: 'Your name:',
    input: 'text',
    inputValidator: function (value) {
      return new Promise(function (resolve, reject) {
        if (value) {
          resolve()
        } else {
          reject('You need to write something!')
        }
      })
    }
  }).then(function (result) {
    name = result;
    swal({
      type: 'success',
      html: 'Hello ' + result
    })
  });

  socket.onopen = function(){
    $('#chatform').on('submit', function(event) {
      var message = {
        handle: name,
        message: $('#message').val(),
      }
      socket.send(JSON.stringify(message));
      $('#message').val('');
      return false;
    });
  }

  socket.onmessage = function(message) {
    var data = JSON.parse(message.data);
    $('#chat').append('<tr>'
    + '<td>' + data.timestamp + '</td>'
    + '<td>' + data.handle + '</td>'
    + '<td>' + data.message + ' </td>'
    + '</tr>');
    Push.create("Django Channels Example | " + room , {
      body: "New Message",
      icon: 'http://pa1.narvii.com/6184/91c955faf54e625b3467093bea75a6d25b813871_128.gif',
      timeout: 4000,
      onClick: function () {
        window.focus();
        this.close();
      }
    });
  };

  if (socket.readyState == WebSocket.OPEN) socket.onopen();


});
