{% extends "../base.swig" %}

{% block html-title %}{{ block.super }} / Some Catchy By-Line{% endblock %}

{% block body %}
<div id="splash">
    <div class="logo">
        <h1>{{ title }}
        <small>Some catchy by-line</small></h1>
    </div>
    <ul class="horizontal-button-group">
        <li><a href="/signup/">SignUp</a></li>
        <li><a href="/pricing/">Pricing</a></li>
        <li><a href="/features/">Features</a></li>
    </ul>
</div>
<div class="row">
    <div class="col large-3"><h3>Feature</h3></div>
    <div class="col large-3"><h3>Feature</h3></div>
    <div class="col large-3"><h3>Feature</h3></div>
    <div class="col large-3"><h3>Feature</h3></div>
</div>
{% endblock %}