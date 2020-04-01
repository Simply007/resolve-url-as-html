# resolve-url-as-html

GitHub issue: https://github.com/Kentico/kontent-delivery-sdk-js/issues/286

## Get started

```sh
npm install
npm start
```

Returns (**lacking attributes in a tags**)

```html
<h3><strong>Logotypes &amp; Badges</strong></h3>
<p><a>kentico_cloud_logotype</a></p>
<p><a>logo___powered_by_kentico_kontent_badge</a></p>
<p><a>logo___kentico_kontent_partner_badges</a></p>
```

Instead of

```html
<h3><strong>Logotypes &amp; Badges</strong></h3>
<p><a href="file/kentico_cloud_logotype">kentico_cloud_logotype</a></p>
<p><a href="file/logo___powered_by_kentico_kontent_badge">logo___powered_by_kentico_kontent_badge</a></p>
<p><a href="file/logo___kentico_kontent_partner_badges">logo___kentico_kontent_partner_badges</a></p>
```
