{% extends "../base.swig" %}

{% block html-title %}{{ block.super }} / Blog{% endblock %}

{% block body %}
    {% for post in posts %}
        <div class="post">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    {% endfor %}
{% endblock %}