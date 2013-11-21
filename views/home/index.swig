{% extends "../base.swig" %}

{% block html-title %}{{ block.super }} / Some Catchy By-Line{% endblock %}

{% block body %}
<div id="splash">
    <div id="logo" class="large-12 columns">
        <div class="cell">
            <h1>{{ title }}
            <small>Some catchy by-line</small></h1>
            <form class="large-6 large-centered columns" action="/beta/" method="post">
                <input type="email" placeholder="email address">
            </form>
            <p>Want to know when we'll have bacon? </p>
        </div>
    </div>
    <div id="site-nav" class="large-12 columns">
        <ul>
            <li><a class="button" href="#">item</a></li>
            <li><a class="button" href="#">item</a></li>
            <li><a class="button" href="#">item</a></li>
        </ul>
    </div>
</div>
<div id="below-the-fold" class="row">
    <div class="large-6 columns">
        <h3>Feature</h3>
        <ul>
            <li><a class="button" href="#">point</a></li>
            <li><a class="button" href="#">another incredible thing</a></li>
            <li><a class="button" href="#">omg these things!</a></li>
        </ul>
    </div>
    <div class="large-6 columns centered">
        <h3>Feature</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
{% endblock %}

{% block footer %}
<small class="right">background image by <a href="http://www.flickr.com/photos/chicagozen/4761691035/">chicagozen</a></small>
{% endblock %}