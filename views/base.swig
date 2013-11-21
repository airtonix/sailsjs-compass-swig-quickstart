<!DOCTYPE html>
<html data-ngapp>
  <head>
    <title>{% block site-title %}{{ title }}{% endblock %}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    {% include "./partials/social-media-meta.swig" %}
    <!--SCREEN STYLES-->
    <link rel="stylesheet" media="screen, projector" href="/0.0.1/linker/styles/screen.css">
    <!--SCREEN STYLES END-->
    <!--PRINT STYLES-->
    <link rel="stylesheet" media="print" href="/0.0.1/linker/styles/print.css">
    <!--PRINT STYLES END-->
    <!--[if IE 7]>
    <!--IE STYLES-->
    <link rel="stylesheet" media="screen, projector" href="/0.0.1/linker/styles/ie.css">
    <!--IE STYLES END-->
    <![endif]-->
  </head>
  <body id="{{ slug || res.statusCode }}">
    <div class="container">
      <div class="wrapper">{% block body %}{% endblock %}</div>
    </div>
    <footer id="site-footer">
      <div class="row">
        <ul class="button-group">
            <li><a class="button" href="#">home</a></li>
            <li><a class="button" href="#">home</a></li>
            <li><a class="button" href="#">home</a></li>
            <li><a class="button" href="#">home</a></li>
            <li><a class="button" href="#">home</a></li>
        </ul>
      {% block footer %}{% endblock %}
      </div>
    </footer>
    <!--SCRIPTS-->
    <script src="/0.0.1/linker/js/socket.io.js"></script>
    <script src="/0.0.1/linker/js/sails.io.js"></script>
    <script src="/0.0.1/linker/js/app.js"></script>
    <script src="/0.0.1/linker/js/main.js"></script>
    <!--SCRIPTS END-->
    </body>
</html>
