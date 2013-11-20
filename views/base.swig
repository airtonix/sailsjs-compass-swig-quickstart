<!DOCTYPE html>
<html data-ngapp>
  <head>
    <!--
        For demonstration purposes, the `title` is dynamically set here based on
        your `sails.config.appName` to show that you can inject data into layouts
        exactly the same way as with your other view templates.
    -->
    <title>{% block site-title %}{{ title }}{% endblock %}</title>

    <!-- Viewport mobile tag for sensible mobile support -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    {% include "partials/social-media.swig" %}
    <!--
      The Asset Linker
      ========================

      SCRIPTS, SCREEN, PRINT and IE style blocks.
      These are used by the Asset Linker.

      Sails supports a Grunt-based asset linker, to automatically inject
      <link> and <script> tags, as well any client-side templates you're using
      into your HTML layouts and views, respecting dependencies.

      You created this Sails app with the asset linker disabled.
      If you change your mind, check out the docs on the subject:
      http://sailsjs.org/#!documentation/asset-management
    -->

    <!--

      Stylesheets
      ========================

      You can link any CSS, LESS, or image files in your `assets` directory
      as you would normally: using <link/> tags.

    -->
    <!--SCREEN STYLES-->
    <!--SCREEN STYLES END-->
    <!--PRINT STYLES-->
    <!--PRINT STYLES END-->

    <!--

      Support for LESS/SASS included by default
      ================================================

      LESS files are automatically compiled when they change using the Gruntfile
      located in the top-level of this Sails app.  If you run into issues with styles
      not reloading, check the Sails log output in your console for LESS compilation errors.
      If necessary, shut down and then lift your app again.
    -->
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

    <!-- Bring in the socket.io client -->
    <!-- then beef it up with some convenience logic for talking to Sails.js -->
    <!-- listen on socket.io for incoming messages -->
    <!--SCRIPTS-->
    <!--SCRIPTS END-->
    </body>
</html>
