{% extends "../base.swig" %}

{% block html-title %}{{ block.super }} / Login{% endblock %}

{% block body %}
    <h1>Please Login</h1>
    <ul class="button-group simple-outline transparent">
        <li><a class="button" href="/login/github/">with Github</a></li>
        <li><a class="button" href="/login/persona/">with Persona</a></li>
        <li><div class="button">
            <span class="g-signin"
                data-scope="https://www.googleapis.com/auth/plus.login"
                data-clientid="YOUR_CLIENT_ID"
                data-redirecturi="postmessage"
                data-accesstype="offline"
                data-cookiepolicy="single_host_origin"
                data-callback="signInCallback"></span>
                <span class="signin-result"></span>
        </div></li>
    </ul>

{% endblock %}
