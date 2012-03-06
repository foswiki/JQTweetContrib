jQuery(function($) {

  var defaults = {
    join_text: "auto",
    query: "#foswiki",
    avatar_size: 48,
    count: 10,
    auto_join_text_default:'', 
    auto_join_text_url:'', 
    auto_join_text_reply:'',
    auto_join_text_ed:'',
    auto_join_text_ing:''
  };

  $(".jqTweet:not(.jqInitedTweet)").livequery(function() {
    var $this = $(this), opts = $.extend({}, defaults, $this.metadata());

    $this.addClass("jqInitedTweet").tweet(opts);
  });
});
