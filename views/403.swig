{% extends "base.swig" %}

{% block html-title %}Forbidden{% endblock %}

{% block body %}
    <!--
     _____  ______ ______
    |  |  ||      |__    |
    |__    |  --  |__    |
       |__||______|______|

      This is the default "403: Forbidden" page.
      User agents that don't "Accept" HTML will see a JSON version instead.
      You can customize the control logic for your needs in `config/403.js`

      You can trigger this response from one of your controllers or policies with:
      `return res.forbidden( msg );`
      (where `msg` is an optional error message to include in the response)

    //-->
    <h1>Forbidden</h1>
    <h2>You don't have permission to see the page you're trying to reach.</h2>
    <p class="help"><a href='http://en.wikipedia.org/wiki/HTTP_403'>Why</a> might this be happening?</p>
{% endblock %}
