{% extends "../base.swig" %}

{% block html-title %}{{ block.super }} / Some Catchy By-Line{% endblock %}

{% block body %}
<div id="splash" class="row">
    <div id="logo" class="large-12 columns">
        <div class="cell">
            <h1>{{ title }}
            <small>Some catchy by-line</small></h1>
        </div>
    </div>
    <nav id="site-nav">
        <ul class="button-group simple-outline transparent large-5 large-centered columns">
            <li><a class="button" href="/signup/">SignUp</a></li>
            <li><a class="button" href="/pricing/">Pricing</a></li>
            <li><a class="button" href="/features/">Features</a></li>
        </ul>
    </nav>
</div>
<div class="row">
    <div class="large-3 columns"><h3>Feature</h3></div>
    <div class="large-3 columns"><h3>Feature</h3></div>
    <div class="large-3 columns"><h3>Feature</h3></div>
    <div class="large-3 columns"><h3>Feature</h3></div>
</div>
{% endblock %}