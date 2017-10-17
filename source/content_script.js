$('window').on('load', function(){
   var moments = $('.moments');
   var link = moments.find('a');
   var limerick = moments.find('span.text');
   link.attr('href', 'https://haiku.hell-island.com/limrixx');
   limerick.text('Limrixx');
});
