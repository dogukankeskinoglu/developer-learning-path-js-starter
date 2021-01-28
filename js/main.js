$(document).ready(function () {
  const API_URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
  let quotesArray = [];
  
  let bbQuote = document.getElementById('bbQuote');

  let getQuote = async function () {
    let response = await fetch(API_URL);
    let data = await response.json()
    return data;
  };

  let displayQuote = (data) => {
    let {quote, author} = data[0];
    quotesArray = [...quotesArray, ...data];
    $( bbQuote ).append( 
      `<div class="new_quote">
        <blockquote>
          <h2 class="quote">${quote}</h2>
        <blockquote>
          <h4 class="author">${author}</h4>
      </div>` 
    );
  };

  $(".quote_button").click(function () {
    getQuote().then((data) => displayQuote(data));
  })

  let tweet = function () {
    let tweet = ''
    tweet += $($('.quote')[0]).text();
    tweet += '\n'
    tweet += $($('.author')[0]).text();
    return tweet;
  }

  $('.tweet_button').on('click', function () {
    let tweet_url = "https://twitter.com/intent/tweet?text=" + tweet();
    $(this).attr("href", tweet_url);
    $(this).attr('target', '_blank');
    window.location.href = tweet_url;
  })

});