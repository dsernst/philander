/* global $, window */

var numAnswered = 0
function countAnswer() {
  if (++numAnswered === 6) {
    setTimeout($('#status').html('').bind(this), 0)
    $('.matchedNotification').show()
    $('#questions').hide()
  }
}

/**
 * jTinder initialization
 */
$('#tinderslide').jTinder({
  // dislike callback
  onDislike: function () {
  // set the status text
    $('#status').html('You disagreed.')
    countAnswer()
  },
  // like callback
  onLike: function () {
    // set the status text
    $('#status').html('You agreed.')
    countAnswer()
  },
  animationRevertSpeed: 200,
  animationSpeed: 400,
  threshold: 1,
  likeSelector: '.like',
  dislikeSelector: '.dislike',
})

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function (event) {
  event.preventDefault()
  $('#tinderslide').jTinder($(this).attr('class'))
})


function newMessage(msg) {
  var $message = $('<div class="msg"></div>')
  $(`<p class="name">${msg.author}</p>`).appendTo($message)
  $(`<p>${msg.text}</p>`).appendTo($message)

  $message.appendTo('#chatlog')
}

function enqueue(msg) {
  setTimeout(newMessage.bind(null, msg), msg.delay)
}

var scheduledMsgs = [
  { author: 'Max',
    text: 'Hey!',
    delay: 1000 },

  { author: 'Emma',
    text: 'hey I\'m Emma',
    delay: 3000 },

  { author: 'Max',
    text: 'what do you think of bernie?',
    delay: 6000 },

  { author: 'Max',
    text: 'hello?',
    delay: 24000 },
]

$(function() {
  $('#ChatNow').click(function () {
    $('#ChatScreen').show()
    $('.matchedNotification').hide()
  })
  scheduledMsgs.forEach(enqueue)

  $('input').keypress(function (e) {
    if (e.which === 13) {
      newMessage({
        text: $(this).val(),
        author: window.firstname,
      })
      $(this).val('')
    }
  })

})
