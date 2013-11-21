<!DOCTYPE html>
<html data-ngapp>
  <head>
    <title>{% block site-title %}{{ title }}{% endblock %}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    {% include "./partials/social-media-meta.swig" %}
    <!--SCREEN STYLES-->
    <!--SCREEN STYLES END-->
    <!--PRINT STYLES-->
    <!--PRINT STYLES END-->
    <!--[if IE 7]>
    <!--IE STYLES-->
    <!--IE STYLES END-->
    <![endif]-->
  </head>
  <body id="{{ slug || res.statusCode }}">
    <div class="container">
      <div class="wrapper">{% block body %}{% endblock %}</div>
    </div>
    <footer id="site-footer">
      <div class="row">{% block footer %}{% endblock %}</div>
    </footer>
    <!--SCRIPTS-->
    <!--SCRIPTS END-->
    </body>
</html>
