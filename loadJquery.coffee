jquery = document.createElement('script');

jquery.setAttribute('src','https://code.jquery.com/jquery-2.2.4.min.js');
jquery.setAttribute('id','jquery');
document.getElementsByTagName('head')[0].childNodes
document.getElementsByTagName('script')[0].append(jquery)
document.getElementsByTagName('head')[0].insertBefore(document.getElementsByTagName('script')[0].childNodes[0],document.getElementsByTagName('head')[0].childNodes[0])
