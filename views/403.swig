{% extends "base.swig" %}

{% block html-title %}Forbidden{% endblock %}

{% block body %}
    <!--
     _____  ______ ______
    |  |  ||      |__    |
    |__    |  --  |__    |
       |__||______|______|

    //-->
    <h1>Forbidden</h1>
    <h2>You don't have permission to see the page you're trying to reach.</h2>
    <p class="help"><a href='http://en.wikipedia.org/wiki/HTTP_403'>Why</a> might this be happening?</p>
{% endblock %}
