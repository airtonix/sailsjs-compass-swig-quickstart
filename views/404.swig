{% extends "base.swig" %}

{% block html-title %}Page Not Found{% endblock %}

{% block body %}
    <!--
     _____  ______ ______
    |  |  ||      |__    |
    |__    |  --  |__    |
       |__||______|______|


    This is the default "404: Not Found" page.
    User agents that don't "Accept" HTML will see a JSON version instead.
    You can customize the control logic for your needs in `config/404.js`

    Sails considers a request to be in a "404: Not Found" state when a user
    requests a URL which doesn't match any of your app's routes or blueprints.

    You can also trigger this response from one of your controllers or policies with:
    `return res.notFound();`

    //-->
    <h1>Something's fishy here.</h1>
    <h2>The page you were trying to reach doesn't exist.</h2>
    <p class="help">
      <a href="http://en.wikipedia.org/wiki/HTTP_404">Why</a> might this be happening?
    </p>
{% endblock %}
