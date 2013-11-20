{% extends "../base.swig" %}

{% block html-title %}{{ block.super }} / {{ Post.title }}{% endblock %}

{% block body %}
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
{% endblock %}