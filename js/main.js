/* global $ */

/**
 * jTinder initialization
 */
$('#tinderslide').jTinder({
  // dislike callback
  onDislike: function () {
  // set the status text
    $('#status').html('You disagreed.')
  },
  // like callback
  onLike: function () {
    // set the status text
    $('#status').html('You agreed.')
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
