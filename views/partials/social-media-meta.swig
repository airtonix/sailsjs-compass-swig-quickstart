<meta name="description" content="{% block meta-description %}{% endblock %}" />

{# Twitter Card data #}
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="{% block meta-twitter-publisher-handle %}{% endblock %}">
<meta name="twitter:title" content="{% block meta-twitter-title %}{% endblock %}">
<meta name="twitter:description" content="{% block meta-twitter-description %}{% endblock %}">
<meta name="twitter:creator" content="{% block meta-twitter-author-description %}{% endblock %}">
{# Twitter Summary card images must be at least 200x200px #}
<meta name="twitter:image" content="{% block meta-twitter-summary-thumbnail %}{% endblock %}">

{# Open Graph data #}
<meta property="og:title" content="{% block meta-og-title %}{% endblock %}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{% block meta-og-url %}{% endblock %}" />
<meta property="og:image" content="{% block meta-og-thumb %}{% endblock %}" />
<meta property="og:description" content="{% block meta-og-description %}{% endblock %}" />
<meta property="og:site_name" content="{% block meta-og-sitename %}{% endblock %}" />
<meta property="fb:admins" content="{% block meta-og-facebookid %}{% endblock %}" />