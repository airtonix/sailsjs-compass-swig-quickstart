{% extends "base.swig" %}

{% block html-title %}Unknown Error{% endblock %}

{% block body %}
    <!--
      ______ ______ ______
     |    __|      |      |
     |__    |  --  |  --  |
     |______|______|______|

    //-->

    <h1>Internal Server Error</h1>
    <h2>Something isn't right here.</h2>

    {% if (typeof errors !== 'undefined') %}
    <pre class="error">
        <code>
            {% foreach error in errors %}
                {{ error }}
            {% endfor %}
        </code>
    </pre>
    {% else %}
        <p class="error">A team of highly trained sea bass is working on this as we speak.</p>
    {% endif %}
{% endblock %}