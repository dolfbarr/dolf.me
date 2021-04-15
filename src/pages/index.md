---
title: {{ data.author }}
layout: page
permalink: /
customStyles: ["index"]
---

<section class="landing">
  <h1>Hi! 👋</h1>

  <p class="landing__greeting">I’m Dolf Barr, a frontend engineer at <a href="{{ data.work.link }}" title="{{ data.work.name }}" target="_blank" rel="noopener noreferrer nofollow">{{ data.work.label }}</a> based in Saint Petersburg, Russia. I like to be on the edge of business problem solving and appeal for users, and believe that soft skills and clean code matter.</p>
</section>

## Contact me

Feel free to drop me a message via email <a href="mailto:{{ data.contacts.email }}">{{ data.contacts.email }}</a> or telegram [{{ data.contacts.telegram }}]({{ data.contacts.telegram }}).
