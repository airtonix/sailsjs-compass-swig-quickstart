{% extends "base.swig" %}

{% block html-title %}Page Not Found{% endblock %}

{% block body %}
    <!--
     _____  ______ _____
    |  |  ||      |  |  |
    |__    |  --  |__    |
       |__||______|  |__|

    //-->
    <h1>Something's fishy here.</h1>
    <h2>The page you were trying to reach doesn't exist.</h2>
    <p class="help">
      <a href="http://en.wikipedia.org/wiki/HTTP_404">Why</a> might this be happening?
    </p>
{% endblock %}
